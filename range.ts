export const range = (s: number, e?: number, m?: number) =>
	e && m
		? Array.from(
				{ length: Math.ceil((e - s) / m) },
				(x: any, i: number) => i * m + s,
		  )
		: e
		? Array.from({ length: e - s }, (x: any, i: number) => i + s)
		: Array.from({ length: s }, (x: any, i: number) => i)
