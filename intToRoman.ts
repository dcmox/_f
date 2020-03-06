export const intToRoman = (num: number) => {
	if (num >= 4000000) {
		throw new Error('Cannot handle numbers 4M and over!')
	}
	let result = ''
	if (num > 3999) {
		while (num >= 1000000) {
			result += '(M)'
			num -= 1000000
		}

		while (true) {
			if (num >= 900000) {
				result += '(CM)'
				num -= 900000
				break
			}
			if (num >= 500000) {
				result += '(D)'
				num -= 500000
			}
			if (num >= 400000) {
				result += '(CD)'
				num -= 400000
				break
			}
			while (num >= 100000) {
				result += '(C)'
				num -= 100000
			}
			break
		}

		while (true) {
			if (num >= 90000) {
				result += '(XC)'
				num -= 90000
				break
			}
			if (num >= 50000) {
				result += '(L)'
				num -= 50000
			}
			if (num >= 40000) {
				result += '(XL)'
				num -= 40000
				break
			}
			while (num >= 10000) {
				result += '(X)'
				num -= 10000
			}
			break
		}

		while (true) {
			if (num >= 9000) {
				result += '(IX)'
				num -= 9000
				break
			}
			if (num >= 5000) {
				result += '(V)'
				num -= 5000
			}
			if (num >= 4000) {
				result += '(IV)'
				num -= 4000
				break
			}
			break
		}
	}

	while (num >= 1000) {
		result += 'M'
		num -= 1000
	}

	while (true) {
		if (num >= 900) {
			result += 'CM'
			num -= 900
			break
		}
		if (num >= 500) {
			result += 'D'
			num -= 500
		}
		if (num >= 400) {
			result += 'CD'
			num -= 400
			break
		}
		while (num >= 100) {
			result += 'C'
			num -= 100
		}
		break
	}

	while (true) {
		if (num >= 90) {
			result += 'XC'
			num -= 90
			break
		}
		if (num >= 50) {
			result += 'L'
			num -= 50
		}
		if (num >= 40) {
			result += 'XL'
			num -= 40
			break
		}
		while (num >= 10) {
			result += 'X'
			num -= 10
		}
		break
	}

	while (true) {
		if (num >= 9) {
			result += 'IX'
			num -= 9
			break
		}
		if (num >= 5) {
			result += 'V'
			num -= 5
		}
		if (num >= 4) {
			result += 'IV'
			num -= 4
			break
		}
		while (num > 0) {
			result += 'I'
			num -= 1
		}
		break
	}
	return result
}
