export const toPath = (s: string): string[] =>
	s
		.replace(/\[|\]/g, '.')
		.split('.')
		.filter((n: string) => n)
