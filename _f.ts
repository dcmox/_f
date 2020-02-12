/* Copyright 2020 Daniel Moxon @ https://github.com/dcmox/_f */
interface ICharMap {
	[key: string]: string
}
// tslint:disable: object-literal-sort-keys
const HTML_CHAR_MAP: ICharMap = {
	'&': '&amp;',
	'<': '&lt;',
	'>': '&gt;',
	'"': '&quot;',
	"'": '&#039;',
	'`': '&#x60;',
}
const REGEX_HTML_CHARS = /[&<>"']/g
const pascalCase = (s: string): string =>
	s
		.replace(/_/g, ' ')
		.split(' ')
		.map((s: string) => s.charAt(0).toUpperCase() + s.slice(1))
		.join('')
const camelCase = (s: string): string =>
	s
		.replace(/_/g, ' ')
		.split(' ')
		.map((s: string, i: number) =>
			i === 0 ? s : s.charAt(0).toUpperCase() + s.slice(1),
		)
		.join('')
const nl2br = (s: string) => s.replace(/\n/g, '<br />')
const br2nl = (s: string) => s.replace(/(<br([ ]*)?>|<br([ ]*)?\/>)/gi, '\n')
const splitByLength = (s: string, len: number) =>
	s.match(new RegExp(`.{${len}}`, 'g')) || [s]
const upperCaseWords = (s: string) =>
	s
		.split(' ')
		.map((w: string) => w.charAt(0).toUpperCase() + w.slice(1))
		.join(' ')
const upperCaseFirst = (s: string) => s.charAt(0).toUpperCase() + s.slice(1)
const upperCaseFirstInSentence = (s: string) =>
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
const decodeHTML = (html: string): string =>
	html.toString().replace(REGEX_HTML_CHARS, (m: string) => HTML_CHAR_MAP[m])
const toAlpha = (s: string, charSet?: string) =>
	charSet
		? s.replace(
				new RegExp(
					`[^a-zA-Z${charSet
						.split('')
						.map((c: string) => '\\' + c)
						.join('')}]`,
					'g',
				),
				'',
		  )
		: s.replace(/[^a-zA-Z]/g, '')
const toNumeric = (s: string, charSet?: string) =>
	charSet
		? s.replace(
				new RegExp(
					`[^0-9${charSet
						.split('')
						.map((c: string) => '\\' + c)
						.join('')}]`,
					'g',
				),
				'',
		  )
		: s.replace(/[^0-9]/g, '')
const toBinary = (s: string) =>
	s
		.split('')
		.map((c: string) =>
			c
				.charCodeAt(0)
				.toString(2)
				.padStart(8, '0'),
		)
		.join('')
const toHex = (s: string) =>
	s
		.split('')
		.map((c: string) => c.charCodeAt(0).toString(16))
		.join('')
const fromHex = (s: string) =>
	splitByLength(s, 2)
		.map((c: string) => String.fromCharCode(parseInt(c, 16)))
		.join('')
const fromBinary = (s: string) =>
	splitByLength(s, 8)
		.map((c: string) => String.fromCharCode(parseInt(c, 2)))
		.join('')
const toBase64 = (s: string) =>
	window ? btoa(s) : new Buffer(s).toString('base64')
const fromBase64 = (s: string) =>
	window ? atob(s) : new Buffer(s).toString('ascii')
const rightRotate = (s: string, bits: number) =>
	bits > s.length
		? s.slice(s.length - (bits % s.length)) +
		  s.slice(0, s.length - (bits % s.length))
		: s.slice(s.length - bits) + s.slice(0, s.length - bits)
const leftRotate = (s: string, bits: number) =>
	bits > s.length
		? s.slice(bits % s.length) + s.slice(0, bits % s.length)
		: s.slice(bits) + s.slice(0, bits)
const rightShift = (s: string, bits: number, char: string = '0') =>
	bits > s.length
		? ''.padStart(s.length, char)
		: s.slice(0, s.length - bits).padStart(s.length, char)
const excerpt = (s: string, len: number = 255): string =>
	s.length <= len
		? s
		: s.slice(0, s.substring(0, len).lastIndexOf(' ')) + '...'
const reverse = (s: string): string =>
	s
		.split('')
		.reverse()
		.join('')
const reverseWords = (s: string): string =>
	s
		.split(' ')
		.reverse()
		.join(' ')
const toPath = (s: string): string[] =>
	s
		.replace(/\[|\]/g, '.')
		.split('.')
		.filter((n: string) => n)
const firstUniqueCharacter = (s: string): string =>
	s.split('').find(c => s.indexOf(c) === s.lastIndexOf(c)) || ''
const randomString = (
	len: number = 10,
	charset: string = '!@#%=*_-~23456789abcdefghijkmnopqrstuvwxyzABCDEFGHIJKLMNPQRSTUVWXYZ',
): string =>
	Array.from({ length: len }, (c: any) =>
		charset.charAt(Math.floor(Math.random() * charset.length)),
	).join('')
const isShouting = (s: string, threshold: number = 0.51) =>
	(s.match(/[A-Z]/g)?.length || 0) / s.length >= threshold && s.length > 5

const getSequences = (s: string, ignoreCase: boolean = true) => {
	const cmp: string = ignoreCase ? s.toLowerCase() : s
	let i: number = 0
	let sp: number = -1
	let ep: number = -1
	let dir: number = -1
	const sequences: string[] = []
	while (i < s.length) {
		if (sp === -1) {
			if (cmp.charCodeAt(i) === cmp.charCodeAt(i + 1) - 1) {
				sp = i
				dir = -1
			} else if (cmp.charCodeAt(i) === cmp.charCodeAt(i + 1) + 1) {
				sp = i
				dir = 1
			}
		} else {
			if (
				(dir === -1 &&
					cmp.charCodeAt(i) === cmp.charCodeAt(i + 1) - 1) ||
				(dir === 1 && cmp.charCodeAt(i) === cmp.charCodeAt(i + 1) + 1)
			) {
				ep = i + 2
			} else {
				if (sp !== -1 && ep !== -1) {
					sequences.push(s.slice(sp, ep))
				}
				sp = ep = -1
			}
		}
		i++
	}

	return sequences
}

const hasSequences = (s: string, ignoreCase: boolean = true) =>
	new RegExp(
		`(?:abc|bcd|cde|def|efg|fgh|ghi|hij|ijk|jkl|klm|lmn|mno|nop|opq|pqr|qrs|rst|stu|tuv|uvw|vwx|wxy|xyz` +
			`|zyx|xyw|xwv|wvu|vut|uts|tsr|srq|rqp|qpo|pon|onm|nml|mlk|lkj|kji|jih|ihg|hgf|gfe|fed|edc|dcb|cba` +
			`|012|123|234|345|456|567|678|789|890|098|987|876|765|654|543|432|321|210)`,
		ignoreCase ? 'gi' : 'g',
	).test(s)

const getRepeatingSets = (
	s: string,
	ignoreCase: boolean = true,
	minRepeat: number = 2,
) => s.match(new RegExp(`(.+)\\1{${minRepeat},}`, ignoreCase ? 'gi' : 'g'))
const hasRepeatingSets = (
	s: string,
	ignoreCase: boolean = true,
	minRepeat: number = 2,
) => new RegExp(`(.+)\\1{${minRepeat},}`, ignoreCase ? 'gi' : 'g').test(s)
const getRepeatingCharacters = (
	s: string,
	ignoreCase: boolean = true,
	minRepeat: number = 2,
) => s.match(new RegExp(`(.)\\1{${minRepeat},}`, ignoreCase ? 'gi' : 'g'))
const hasRepeatingCharacters = (
	s: string,
	ignoreCase: boolean = true,
	minRepeat: number = 2,
) => new RegExp(`(.)\\1{${minRepeat},}`, ignoreCase ? 'gi' : 'g').test(s)

const levenshtein = (src: string, target: string): number => {
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

const secureRandomNumber = (min: number, max: number) => {
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

const keyToField = (s: string, strip?: string): string =>
	strip
		? s
				.replace(new RegExp(`${strip}`, 'g'), '')
				.replace(/\-|\_/g, ' ')
				.split(' ')
				.map((w: string) => w.charAt(0).toUpperCase() + w.slice(1))
				.join(' ')
				.trim()
		: s
				.replace(/\-|\_/g, ' ')
				.split(' ')
				.map((w: string) => w.charAt(0).toUpperCase() + w.slice(1))
				.join(' ')
				.trim()

const compact = (a: any[]): any[] => a.filter((itm: any) => itm)

const map = (a: any[], fn: () => any | string): any[] =>
	typeof fn === 'string' ? a.map((item: any) => item[fn]) : a.map(fn)

const first = (a: any[], byRef: boolean = false): any => {
	if (byRef) {
		for (const i in a) {
			if (a[i]) {
				return a[i]
			}
		}
	} else {
		return a.slice().shift()
	}
}

const last = (a: any[], byRef: boolean = false): any => {
	if (byRef) {
		const temp: any = a.filter((item: any) => item !== undefined)
		return temp[temp.length - 1]
	} else {
		return a.slice().pop()
	}
}

const findFirst = (
	a: any[],
	cond: (item: any) => boolean,
	byRef: boolean = false,
): any =>
	byRef
		? a.find((item: any) => cond(item))
		: a.slice().find((item: any) => cond(item))

const findLast = (
	a: any[],
	cond: (item: any) => boolean,
	byRef: boolean = false,
): any => {
	if (byRef) {
		const temp: any = a.filter((item: any) => cond(item))
		return temp[temp.length - 1]
	} else {
		return a
			.slice()
			.reverse()
			.find((item: any) => cond(item))
	}
}

const unique = (a: any[], byRef: boolean = false) =>
	byRef
		? a.filter((item: any, index: number) => a.indexOf(item) === index)
		: a
				.slice()
				.filter((item: any, index: number) => a.indexOf(item) === index)

const CONSTRUCTOR_TAGS = [
	'[object ArrayBuffer]',
	'[object Boolean]',
	'[object DataView]',
	'[object Date]',
	'[object Array]',
	'[object Float32Array]',
	'[object Float64Array]',
	'[object Set]',
	'[object Symbol]',
	'[object Map]',
	'[object Number]',
	'[object Int8Array]',
	'[object Int16Array]',
	'[object Int32Array]',
	'[object Uint8Array]',
	'[object Uint8ClampedArray]',
	'[object Uint16Array]',
	'[object Uint32Array]',
	'[object WeakMap]',
]

const deepClone = (src: any): any => {
	if (Array.isArray(src)) {
		if (src.some((e: any) => Array.isArray(e))) {
			return src.map(e => (Array.isArray(src) ? deepClone(e) : e))
		} else {
			return src.slice(0)
		}
	}

	if (typeof src !== 'object') {
		return src
	}

	if (
		typeof src === 'object' &&
		CONSTRUCTOR_TAGS.includes(toString.call(src))
	) {
		return new src.constructor(src)
	}

	return Object.keys(src).reduce(
		(result: any, key: any): any => {
			if (Array.isArray(src[key])) {
				result[key] = deepClone(src[key])
			} else if (typeof src[key] === 'object') {
				const prototype: any = Object.getPrototypeOf(src[key])
				result[key] = deepClone(src[key])
				Object.setPrototypeOf(result[key], prototype)
				Object.getOwnPropertySymbols(src[key]).forEach(
					(symbol: symbol) => {
						result[key][symbol] = src[key][symbol]
					},
				)
			} else {
				result[key] = src[key]
			}
			return result
		},
		Object.getOwnPropertySymbols(src).reduce(
			(result: any, symbol: symbol) => {
				result[symbol] = src[symbol]
				return result
			},
			{},
		),
	)
}

const flat = (a: any) =>
	a.reduce(
		(ret: any[], v: any) => ret.concat(Array.isArray(v) ? flat(v) : v),
		[],
	)

const shuffle = (a: string | any[], byRef: boolean = false) =>
	typeof a === 'string'
		? a
				.split('')
				.sort((a: any, b: any) =>
					Math.random() > Math.random() ? 1 : -1,
				)
				.join('')
		: byRef
		? a.sort((a: any, b: any) => (Math.random() > Math.random() ? 1 : -1))
		: a
				.slice()
				.sort((a: any, b: any) =>
					Math.random() > Math.random() ? 1 : -1,
				)

const isNumeric = (s: string | number, ignoreChars?: string) =>
	ignoreChars
		? !s.toString().match(
				new RegExp(
					`[^0-9${ignoreChars
						.split('')
						.map((c: string) => '\\' + c)
						.join('|')}]`,
					'gi',
				),
		  )
		: !s.toString().match(/[^0-9]/g)

const isAlpha = (s: string, ignoreChars?: string) =>
	ignoreChars
		? !s.toString().match(
				new RegExp(
					`[^A-Z${ignoreChars
						.split('')
						.map((c: string) => '\\' + c)
						.join('|')}]`,
					'gi',
				),
		  )
		: !s.toString().match(/[^A-Z]/gi)

const isAlphaNumeric = (s: string, ignoreChars?: string) =>
	ignoreChars
		? !s.toString().match(
				new RegExp(
					`[^A-Z0-9${ignoreChars
						.split('')
						.map((c: string) => '\\' + c)
						.join('|')}]`,
					'gi',
				),
		  )
		: !s.toString().match(/[^A-Z0-9]/gi)

const range = (s: number, e?: number, m?: number) =>
	e && m
		? Array.from(
				{ length: Math.ceil((e - s) / m) },
				(x: any, i: number) => i * m + s,
		  )
		: e
		? Array.from({ length: e - s }, (x: any, i: number) => i + s)
		: Array.from({ length: s }, (x: any, i: number) => i)

const partition = (a: any[], size: number) => {
	return a.reduce((acc: any[], item: any) => {
		acc[acc.length - 1]
			? acc[acc.length - 1].length < size
				? acc[acc.length - 1].push(item)
				: (acc[acc.length] = [item])
			: (acc[acc.length] = [item])
		return acc
	}, [])
}

const unixTimestamp = () => new Date().valueOf()

const uniqueId = (prefix?: string, postfix?: string) => {
	return (
		(prefix || '') +
		(process && process.pid ? process.pid.toString(36) : '') +
		Timestamp.get().toString(36) +
		(postfix || '')
	)
}

class Timestamp {
	public static time: any
	public static last: any
	public static get(): number {
		this.time = new Date().valueOf()
		this.last = this.last || this.time
		return (this.last = this.time > this.last ? this.time : this.last + 1)
	}
}

module.exports = {
	pascalCase,
	camelCase,
	nl2br,
	br2nl,
	splitByLength,
	upperCaseWords,
	upperCaseFirst,
	upperCaseFirstInSentence,
	decodeHTML,
	toAlpha,
	toNumeric,
	toBinary,
	toHex,
	fromHex,
	fromBinary,
	toBase64,
	fromBase64,
	rightRotate,
	leftRotate,
	rightShift,
	excerpt,
	reverse,
	reverseWords,
	toPath,
	keyToField,
	compact,
	first,
	last,
	findFirst,
	findLast,
	unique,
	deepClone,
	flat,
	shuffle,
	isAlpha,
	isNumeric,
	isAlphaNumeric,
	range,
	unixTimestamp,
	uniqueId,
	partition,
	randomString,
	isShouting,
	firstUniqueCharacter,
	getRepeatingCharacters,
	hasRepeatingCharacters,
	getRepeatingSets,
	hasRepeatingSets,
	getSequences,
	hasSequences,
	secureRandomNumber,
	levenshtein,
	map,
}
