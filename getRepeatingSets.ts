export const getRepeatingSets = (
	s: string,
	ignoreCase: boolean = true,
	minRepeat: number = 2,
) => s.match(new RegExp(`(.+)\\1{${minRepeat},}`, ignoreCase ? 'gi' : 'g'))
