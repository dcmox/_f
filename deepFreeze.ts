export const deepFreeze = (o: any) => {
	const props = Object.getOwnPropertyNames(o)

	for (const prop of props) {
		if (o[prop] && typeof o[prop] === 'object') {
			deepFreeze(o[prop])
		}
	}

	return Object.freeze(o)
}
