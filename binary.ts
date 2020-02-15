import { splitByLength } from './splitByLength'

export const fromBinary = (s: string) =>
	splitByLength(s, 8)
		.map((c: string) => String.fromCharCode(parseInt(c, 2)))
		.join('')

export const toBinary = (s: string) =>
	s
		.split('')
		.map((c: string) =>
			c
				.charCodeAt(0)
				.toString(2)
				.padStart(8, '0'),
		)
		.join('')
