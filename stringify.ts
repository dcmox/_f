type TStringifyCacheResult = ((o: any) => string) | string
const delimiter = String.fromCharCode(0)
export const stringifyCache = (
	o: any,
	_returnTemplate: boolean = false,
): TStringifyCacheResult => {
	let tpl: string = '{'
	const keys = Object.keys(o)
	if (keys.length === 0 && _returnTemplate && o.constructor === Object) {
		return '{}'
	}
	keys.forEach((k) => {
		switch (o[k].constructor) {
			case String:
			case Date:
				tpl += '"' + k + '":' + '"' + delimiter + '",'
				break
			case Number:
			case Boolean:
				tpl += '"' + k + '":' + delimiter + ','
				break
			case Object:
				tpl += '"' + k + '":' + stringifyCache(o[k], true) + ','
				break
			case Array:
			case Int8Array:
			case Int16Array:
			case Int32Array:
			case Uint8ClampedArray:
			case Uint8Array:
			case Uint16Array:
			case Uint32Array:
				tpl += '"' + k + '":' + '[' + delimiter + ']' + ','
				break
			case BigInt64Array: // Special support for these
			case BigUint64Array:
				tpl += '"' + k + '":' + delimiter + ','
				break
			default:
				tpl += '"' + k + '":' + delimiter + ','
		}
	})
	tpl = tpl.slice(0, tpl.length - 1) + '}'
	if (_returnTemplate) {
		return tpl
	}
	return (o: any): string => {
		switch (o.constructor) {
			case String:
				return '"' + o.replace(/\\/g, '\\\\').replace(/"/g, '\\"') + '"'
			case Date:
				return '"' + o.toISOString() + '"'
			case Boolean:
			case Number:
				return o.toString()
			case Array:
				return '[' + o.toString() + ']'
		}
		const values: any = Object.values(o).reduce((dest: any, obj: any) => {
			if (obj.constructor === Object) {
				dest.push(...Object.values(obj))
				return dest
			} else {
				dest.push(obj)
				return dest
			}
		}, [])
		let i: number = 0
		tpl = tpl.replace(new RegExp(delimiter, 'g'), () => {
			i++
			if (
				values[i - 1].constructor === Function ||
				typeof values[i - 1] === 'object'
			) {
				if (values[i - 1].constructor === Date) {
					return values[i - 1].toISOString()
				}
				switch (values[i - 1].constructor) {
					case BigInt64Array:
						return '{}' // 'BigInt64Array [' + values[i - 1] + ']'
					case BigUint64Array:
						return '{}' // 'BigUint64Array [' + values[i - 1] + ']'
					case Array:
					case Int8Array:
					case Int16Array:
					case Int32Array:
					case Uint8ClampedArray:
					case Uint8Array:
					case Uint16Array:
					case Uint32Array:
						return values[i - 1]
				}
				return '{}'
			} else {
				if (values[i - 1].constructor === String) {
					return values[i - 1]
						.replace(/\\/g, '\\\\')
						.replace(/"/g, '\\"')
				} else {
					return values[i - 1]
				}
			}
		})
		return tpl
	}
}

// Declared twice for speed optimizations and individual use
export const stringifyT = (o: any, tpl: string = ''): string => {
	switch (o.constructor) {
		case String:
			return '"' + o.replace(/\\/g, '\\\\').replace(/"/g, '\\"') + '"'
		case Date:
			return '"' + o.toISOString() + '"'
		case Boolean:
		case Number:
			return o.toString()
		case Array:
			return '[' + o.toString() + ']'
	}
	const values: any = Object.values(o).reduce((dest: any, obj: any) => {
		if (obj.constructor === Object) {
			dest.push(...Object.values(obj))
			return dest
		} else {
			dest.push(obj)
			return dest
		}
	}, [])
	let i: number = 0
	tpl = tpl.replace(new RegExp(delimiter, 'g'), () => {
		i++
		if (
			values[i - 1].constructor === Function ||
			typeof values[i - 1] === 'object'
		) {
			if (values[i - 1].constructor === Date) {
				return values[i - 1].toISOString()
			}
			switch (values[i - 1].constructor) {
				case BigInt64Array:
					return '{}' // 'BigInt64Array [' + values[i - 1] + ']'
				case BigUint64Array:
					return '{}' // 'BigUint64Array [' + values[i - 1] + ']'
				case Array:
				case Int8Array:
				case Int16Array:
				case Int32Array:
				case Uint8ClampedArray:
				case Uint8Array:
				case Uint16Array:
				case Uint32Array:
					return values[i - 1]
			}
			return '{}'
		} else {
			if (values[i - 1].constructor === String) {
				return values[i - 1].replace(/\\/g, '\\\\').replace(/"/g, '\\"')
			} else {
				return values[i - 1]
			}
		}
	})
	return tpl
}
