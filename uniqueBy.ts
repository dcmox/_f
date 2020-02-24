export const uniqueBy = (a: any[], prop: string, byRef: boolean = false) =>
	byRef
		? a.filter(
				(item: any, index: number) =>
					a.findIndex((itm) => itm[prop] === item[prop]) === index,
		  )
		: a
				.map((item: any) =>
					Array.isArray(item)
						? item.slice()
						: item === 'object'
						? Object.assign({}, item)
						: item,
				)
				.filter(
					(item: any, index: number) =>
						a.findIndex((itm) => itm[prop] === item[prop]) ===
						index,
				)
