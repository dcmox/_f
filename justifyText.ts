export const justifyText = (text: string, mlen: number = 20) => {
	return text
		.split(' ')
		.reduce((txt: any, w: string) => {
			const idx = txt.length - 1
			const len = txt && txt.length ? txt[idx].length : 0
			if (len) {
				// Add word
				if (len + w.length + 1 < mlen) {
					txt[idx] += w + ' '
				} else {
					// Justify line
					txt[idx] = txt[idx].trim()
					const llen = txt[idx].length
					if (llen < mlen) {
						let remaining = mlen - llen
						const words = txt[idx].split(' ')
						const wlen = words.length - 1
						const spacesPerWord = Math.ceil(remaining / wlen)
						txt[idx] = txt[idx]
							.split(' ')
							.map((tw: string, i: number) => {
								if (i !== wlen) {
									if (remaining >= spacesPerWord) {
										tw = tw.padEnd(
											spacesPerWord + tw.length + 1,
											' ',
										)
										remaining -= spacesPerWord
									} else {
										tw = tw.padEnd(
											remaining + tw.length + 1,
											' ',
										)
										remaining = 0
									}
								}
								return tw
							})
							.join('')
					}
					txt.push(w + ' ')
				}
			} else {
				// Next line
				txt.push(w + ' ')
			}
			return txt
		}, [])
		.join('\n')
		.trim()
}
