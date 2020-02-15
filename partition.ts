export const partition = (a: any[], size: number) => {
	return a.reduce((acc: any[], item: any) => {
		acc[acc.length - 1]
			? acc[acc.length - 1].length < size
				? acc[acc.length - 1].push(item)
				: (acc[acc.length] = [item])
			: (acc[acc.length] = [item])
		return acc
	}, [])
}
