export const splitByLength = (s: string, len: number) =>
	s.match(new RegExp(`.{${len}}`, 'g')) || [s]
