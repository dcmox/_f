export const secureRandomNumber = (min: number, max: number) => {
	const distance = max - min
	const level = Math.ceil(Math.log(distance) / Math.log(256))
	const num = parseInt(
		require('crypto')
			.randomBytes(level)
			.toString('hex'),
		16,
	)
	const result = Math.floor(
		(num / Math.pow(256, level)) * (max - min + 1) + min,
	)
	return result
}
