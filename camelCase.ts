export const camelCase = (s: string): string =>
	s
		.replace(/_/g, ' ')
		.split(' ')
		.map((s: string, i: number) =>
			i === 0 ? s : s.charAt(0).toUpperCase() + s.slice(1),
		)
		.join('')
