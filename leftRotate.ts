export const leftRotate = (s: string, bits: number) =>
	bits > s.length
		? s.slice(bits % s.length) + s.slice(0, bits % s.length)
		: s.slice(bits) + s.slice(0, bits)
