export const findLast = (
	a: any[],
	cond: (item: any) => boolean,
	byRef: boolean = false,
): any => {
	if (byRef) {
		const temp = a.filter((item: any) => cond(item))
		return temp[temp.length - 1]
	} else {
		const temp = a
			.slice()
			.reverse()
			.find((item: any) => cond(item))
		return Array.isArray(temp)
			? temp.slice()
			: typeof temp === 'object'
			? Object.assign({}, temp)
			: temp
	}
}
