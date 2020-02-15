export const findFirst = (
	a: any[],
	cond: (item: any) => boolean,
	byRef: boolean = false,
): any => {
	if (byRef) {
		return a.find((item: any) => cond(item))
	} else {
		const temp = a.slice().find((item: any) => cond(item))
		return Array.isArray(temp)
			? temp.slice()
			: typeof temp === 'object'
			? Object.assign({}, temp)
			: temp
	}
}
