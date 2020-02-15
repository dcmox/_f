export const unique = (a: any[], byRef: boolean = false) =>
	byRef
		? a.filter((item: any, index: number) => a.indexOf(item) === index)
		: a
				.slice()
				.filter((item: any, index: number) => a.indexOf(item) === index)
