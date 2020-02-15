export const excerpt = (s: string, len: number = 255): string =>
	s.length <= len
		? s
		: s.slice(0, s.substring(0, len).lastIndexOf(' ')) + '...'
