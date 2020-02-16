export function* lrange(
	s: number = 0,
	e: number | null = null,
	step: number = 1,
): Generator<number> {
	if (e === null) {
		e = s
		s = 0
	}

	if (e > s) {
		for (let i: number = s; i < e; i += step) {
			yield i
		}
	} else {
		for (let i: number = s; i > e; i += step) {
			yield i
		}
	}
}
