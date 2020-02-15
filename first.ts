export const first = (a: any[], byRef: boolean = false): any => {
	if (byRef) {
		for (const i in a) {
			if (a[i]) {
				return Array.isArray(a[i])
					? a[i].slice()
					: typeof a[i] === 'object'
					? Object.assign({}, a[i])
					: a[i]
			}
		}
	} else {
		return a.slice().shift()
	}
}
