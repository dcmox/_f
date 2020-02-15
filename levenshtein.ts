export const levenshtein = (src: string, target: string): number => {
	if (src === target) {
		return 0
	}
	if (src.length === 0) {
		return target.length
	}
	if (target.length === 0) {
		return src.length
	}

	const m: number = src.length + 1
	const n: number = target.length + 1
	const dMatrix: number[][] = new Array(m)

	for (let i = 0; i < m; i++) {
		dMatrix[i] = new Array(n).fill(0)
	}
	for (let i = 1; i < m; i++) {
		dMatrix[i][0] = i
	}
	for (let j = 1; j < n; j++) {
		dMatrix[0][j] = j
	}

	for (let j = 1; j < n; j++) {
		for (let i = 1; i < m; i++) {
			const cost: number = src[i - 1] === target[j - 1] ? 0 : 1
			/* delete, insert, and swap */
			dMatrix[i][j] = [
				dMatrix[i - 1][j] + 1,
				dMatrix[i][j - 1] + 1,
				dMatrix[i - 1][j - 1] + cost,
			].reduce((prev: number, current: number) =>
				prev < current ? prev : current,
			)
		}
	}

	return dMatrix[m - 1][n - 1]
}
