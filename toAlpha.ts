export const toAlpha = (s: string, charSet?: string) =>
	charSet
		? s.replace(
				new RegExp(
					`[^a-zA-Z${charSet
						.split('')
						.map((c: string) => '\\' + c)
						.join('')}]`,
					'g',
				),
				'',
		  )
		: s.replace(/[^a-zA-Z]/g, '')
