export const isAlphaNumeric = (s: string, ignoreChars?: string) =>
	ignoreChars
		? !s.toString().match(
				new RegExp(
					`[^A-Z0-9${ignoreChars
						.split('')
						.map((c: string) => '\\' + c)
						.join('|')}]`,
					'gi',
				),
		  )
		: !s.toString().match(/[^A-Z0-9]/gi)
