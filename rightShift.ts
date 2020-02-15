export const rightShift = (s: string, bits: number, char: string = '0') =>
	bits > s.length
		? ''.padStart(s.length, char)
		: s.slice(0, s.length - bits).padStart(s.length, char)
