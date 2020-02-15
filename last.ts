export const last = (a: any[], byRef: boolean = false): any => {
	if (byRef) {
		const temp: any = a.filter((item: any) => item !== undefined)
		return Array.isArray(temp[temp.length - 1])
			? temp[temp.length - 1].slice()
			: typeof temp[temp.length - 1] === 'object'
			? Object.assign({}, temp[temp.length - 1])
			: temp[temp.length - 1]
	} else {
		return a.slice().pop()
	}
}
