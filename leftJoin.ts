export const leftJoin = (
	a: any,
	b: any | any[],
	criteria?: () => boolean,
): any => {
	if (typeof a !== 'object') {
		throw new Error('First parameter must be an object!')
	}
	let c: any
	if (!Array.isArray(b)) {
		if (typeof b !== 'object') {
			throw new Error(
				'Second parameter must be an object or an array of objects!',
			)
		}
		c = [Object.assign({}, b)]
	} else {
		c = b.slice()
	}
	if (criteria) {
		return Object.assign(
			c
				.filter(criteria)
				.reduce((acc: any, cur: any) => Object.assign(acc, cur), {}),
			a,
		)
	} else {
		return Object.assign(
			c.reduce((acc: any, cur: any) => Object.assign(acc, cur), {}),
			a,
		)
	}
}
