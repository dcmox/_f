export const getSequences = (s: string, ignoreCase: boolean = true) => {
	const cmp: string = ignoreCase ? s.toLowerCase() : s
	let i: number = 0
	let sp: number = -1
	let ep: number = -1
	let dir: number = -1
	const sequences: string[] = []
	while (i < s.length) {
		if (sp === -1) {
			if (cmp.charCodeAt(i) === cmp.charCodeAt(i + 1) - 1) {
				sp = i
				dir = -1
			} else if (cmp.charCodeAt(i) === cmp.charCodeAt(i + 1) + 1) {
				sp = i
				dir = 1
			}
		} else {
			if (
				(dir === -1 &&
					cmp.charCodeAt(i) === cmp.charCodeAt(i + 1) - 1) ||
				(dir === 1 && cmp.charCodeAt(i) === cmp.charCodeAt(i + 1) + 1)
			) {
				ep = i + 2
			} else {
				if (sp !== -1 && ep !== -1) {
					sequences.push(s.slice(sp, ep))
				}
				sp = ep = -1
			}
		}
		i++
	}

	return sequences
}
