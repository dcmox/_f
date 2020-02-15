export const flat = (a: any) =>
	a.reduce(
		(ret: any[], v: any) => ret.concat(Array.isArray(v) ? flat(v) : v),
		[],
	)
