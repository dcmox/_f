export const isNumeric = (s: string | number, ignoreChars?: string) =>
	ignoreChars
		? !s.toString().match(
				new RegExp(
					`[^0-9${ignoreChars
						.split('')
						.map((c: string) => '\\' + c)
						.join('|')}]`,
					'gi',
				),
		  )
		: !s.toString().match(/[^0-9]/g)
