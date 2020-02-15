export const upperCaseFirstInSentence = (s: string) =>
	s.indexOf('.') === -1 && s.indexOf('?') === -1 && s.indexOf('!') === -1
		? s.charAt(0).toUpperCase() + s.slice(1)
		: s
				.replace(/(\.|\?|\!)  /g, (str: string) => str.trim() + ' ')
				.split('.')
				.map((sentence: string) =>
					sentence.charAt(0) === ' '
						? ' ' +
						  sentence.charAt(1).toUpperCase() +
						  sentence.slice(2)
						: sentence.charAt(0).toUpperCase() + sentence.slice(1),
				)
				.join('.')
				.split('?')
				.map((sentence: string) =>
					sentence.charAt(0) === ' '
						? ' ' +
						  sentence.charAt(1).toUpperCase() +
						  sentence.slice(2)
						: sentence.charAt(0).toUpperCase() + sentence.slice(1),
				)
				.join('?')
				.split('!')
				.map((sentence: string) =>
					sentence.charAt(0) === ' '
						? ' ' +
						  sentence.charAt(1).toUpperCase() +
						  sentence.slice(2)
						: sentence.charAt(0).toUpperCase() + sentence.slice(1),
				)
				.join('!')
