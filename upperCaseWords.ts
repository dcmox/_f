export const upperCaseWords = (s: string) =>
	s
		.split(' ')
		.map((w: string) => w.charAt(0).toUpperCase() + w.slice(1))
		.join(' ')
