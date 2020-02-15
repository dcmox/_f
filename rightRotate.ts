export const rightRotate = (s: string, bits: number) =>
	bits > s.length
		? s.slice(s.length - (bits % s.length)) +
		  s.slice(0, s.length - (bits % s.length))
		: s.slice(s.length - bits) + s.slice(0, s.length - bits)
