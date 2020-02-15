export const shuffle = (a: string | any[], byRef: boolean = false) =>
	typeof a === 'string'
		? a
				.split('')
				.sort((a: any, b: any) =>
					Math.random() > Math.random() ? 1 : -1,
				)
				.join('')
		: byRef
		? a.sort((a: any, b: any) => (Math.random() > Math.random() ? 1 : -1))
		: a
				.slice()
				.sort((a: any, b: any) =>
					Math.random() > Math.random() ? 1 : -1,
				)
