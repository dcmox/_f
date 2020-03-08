export const safeEval = async (
	s: any,
	context: any = {},
	timeout: number = 5000,
) => {
	// NodeJS version
	if (
		typeof process !== 'undefined' &&
		process.release.name === 'node' &&
		context.useNode !== false // Special parameter for testing
	) {
		// Create a child process for isolation
		const { fork } = require('child_process')
		const tmp = require('os').tmpdir()
		const fs = require('fs')
		// Create a container
		const container =
			tmp +
			'tmpFile-' +
			+new Date() +
			'-' +
			(Math.random() * 10000 + 1000)
		// Build our sandboxed script
		const script = `
            var s = \`${s}\`
            var context = ${JSON.stringify(context)}
            const sandbox = require('vm')
            sandbox.createContext(context)
            sandbox.runInContext(s, context)
            if (process.send) {
                process.send(context)
            }
        `
		// Write our script to the container
		fs.writeFileSync(container, script)
		// Create our sandbox environment
		const sandbox = fork(container)
		// Await the result
		const result = await new Promise((resolve, reject) => {
			// Set a timeout
			const handle = setTimeout(() => {
				sandbox.kill()
				reject('safeEval timed out before resolving.')
			}, timeout)
			// Resolve eval output
			sandbox.on('message', (result: any) => {
				clearTimeout(handle)
				resolve(result)
			})
		})
		// Delete our container
		fs.unlinkSync(container)
		return result
	} else if (typeof window !== 'undefined') {
		// Browser context version
		// Create our container
		const container = document.createElement('iframe')
		const containerId = 'evalContainer-' + +new Date()
		container.id = containerId
		// Build our script, only allow one way access, hide parent from child
		let script = 'parent = null;'
		// Only give references to context values, basic support
		for (const key of Object.keys(context)) {
			if (key === 'useNode') {
				continue
			}
			const type = typeof context[key]
			switch (type) {
				case 'string':
					script += `window["${key}"] = "${context[key]}";`
					break
				case 'number':
				case 'boolean':
					script += `window["${key}"] = ${context[key]};`
					break
				default:
					script += `window["${key}"] = ${JSON.stringify(
						context[key],
					)};`
					break
			}
		}
		// Finally, store our result into container window
		script += 'window["evalResult"] = eval(`' + s + '`) || null'
		container.src = 'javascript:' + script
		container.setAttribute('sandbox', 'allow-scripts')
		document.body.append(container)
		// Wait for our time to elapse or a result
		let time = 0
		while (
			document.getElementById(containerId)?.contentWindow.window
				.evalResult === undefined
		) {
			time += 10
			if (time >= timeout) {
				break
			}
			await new Promise((resolve) => setTimeout(resolve, time))
		}
		// Store our result
		const result = document.getElementById(containerId)?.contentWindow
			.window.evalResult
		if (result !== undefined) {
			const obj: any = {}
			for (const key of Object.keys(context)) {
				if (key === 'useNode') {
					continue
				}
				obj[key] = document.getElementById(
					containerId,
				)?.contentWindow.window[key]
			}
			return obj
		}
		return undefined
	}
}

// Simple eval
export const simpleEval = (s: string): any =>
	Function('"use strict";return (' + s + ')')()
