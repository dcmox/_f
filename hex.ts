import { splitByLength } from './splitByLength'

export const toHex = (s: string) =>
	s
		.split('')
		.map((c: string) => c.charCodeAt(0).toString(16))
		.join('')

export const fromHex = (s: string) =>
	splitByLength(s, 2)
		.map((c: string) => String.fromCharCode(parseInt(c, 16)))
		.join('')
