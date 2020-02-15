export const pascalCase = (s: string): string =>
	s
		.replace(/_/g, ' ')
		.split(' ')
		.map((s: string) => s.charAt(0).toUpperCase() + s.slice(1))
		.join('')
