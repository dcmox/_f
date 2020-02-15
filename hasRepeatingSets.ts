export const hasRepeatingSets = (
	s: string,
	ignoreCase: boolean = true,
	minRepeat: number = 2,
) => new RegExp(`(.+)\\1{${minRepeat},}`, ignoreCase ? 'gi' : 'g').test(s)
