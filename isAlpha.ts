export const isAlpha = (s: string, ignoreChars?: string) =>
	ignoreChars
		? !s.toString().match(
				new RegExp(
					`[^A-Z${ignoreChars
						.split('')
						.map((c: string) => '\\' + c)
						.join('|')}]`,
					'gi',
				),
		  )
		: !s.toString().match(/[^A-Z]/gi)
