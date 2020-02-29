export enum ERoundOption {
	ROUND = 0,
	ROUND_UP = 1,
	ROUND_DOWN = 2,
}

export const round = (
	n: string | number,
	precision: number = 0.5,
	r: ERoundOption = ERoundOption.ROUND,
) => {
	const number = typeof n === 'string' ? parseFloat(n) : n
	if (!precision) {
		return number.toLocaleString()
	}
	return r === 0
		? (Math.round(number / precision) * precision).toLocaleString()
		: r === 1
		? (Math.ceil(number / precision) * precision).toLocaleString()
		: (Math.floor(number / precision) * precision).toLocaleString()
}
