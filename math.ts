// Prevents oddities like 0.2 * 0.1 = 0.020000000000000004 and 0.2 + 0.1 = 0.30000000000000004
export const multiply = (...n: number[]) =>
	Number(n.reduce((t, c) => t * c).toFixed(15))

export const add = (...n: number[]) =>
	Number((n.map((v) => v * 100).reduce((t, c) => t + c) / 100).toFixed(15))

export const subtract = (...n: number[]) =>
	Number((n.map((v) => v * 100).reduce((t, c) => t - c) / 100).toFixed(15))

export const divide = (...n: number[]) =>
	Number(n.reduce((t, c) => t / c).toFixed(15))
