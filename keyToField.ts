export const keyToField = (s: string, strip?: string): string =>
	strip
		? s
				.replace(new RegExp(`${strip}`, 'g'), '')
				.replace(/\-|\_/g, ' ')
				.split(' ')
				.map((w: string) => w.charAt(0).toUpperCase() + w.slice(1))
				.join(' ')
				.trim()
		: s
				.replace(/\-|\_/g, ' ')
				.split(' ')
				.map((w: string) => w.charAt(0).toUpperCase() + w.slice(1))
				.join(' ')
				.trim()
