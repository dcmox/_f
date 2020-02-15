export const toNumeric = (s: string, charSet?: string) =>
	charSet
		? s.replace(
				new RegExp(
					`[^0-9${charSet
						.split('')
						.map((c: string) => '\\' + c)
						.join('')}]`,
					'g',
				),
				'',
		  )
		: s.replace(/[^0-9]/g, '')
