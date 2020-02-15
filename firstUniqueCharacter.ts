export const firstUniqueCharacter = (s: string): string =>
	s.split('').find(c => s.indexOf(c) === s.lastIndexOf(c)) || ''
