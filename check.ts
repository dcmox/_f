export const check = (value: any, type: any, throwErr: boolean = true) => {
	switch (type) {
		case String:
			type = 'string'
			break
		case Boolean:
			type = 'boolean'
			break
		case Number:
			type = 'number'
			break
		case Object:
			type = 'object'
			break
		case Array:
			type = 'array'
			break
		case undefined:
			if (throwErr && value !== undefined) {
				throw new TypeError(
					'Value (' +
						JSON.stringify(value) +
						') does not match type: ' +
						type,
				)
			} else if (value !== undefined) {
				return false
			}
			return true
		case null:
			if (throwErr && value !== null) {
				throw new TypeError(
					'Value (' +
						JSON.stringify(value) +
						') does not match type: ' +
						type,
				)
			} else if (value !== null) {
				return false
			}
			return true
	}

	if (
		throwErr &&
		!toString
			.call(value)
			.toLowerCase()
			.match(type.toLowerCase()) &&
		!value.constructor
			.toString()
			.toLowerCase()
			.match(type.toLowerCase())
	) {
		throw new TypeError(
			'Value (' +
				JSON.stringify(value) +
				') does not match type: ' +
				type,
		)
	} else if (
		!toString
			.call(value)
			.toLowerCase()
			.match(type.toString().toLowerCase()) &&
		!value.constructor
			.toString()
			.toLowerCase()
			.match(type.toString().toLowerCase())
	) {
		return false
	}
	return true
}
