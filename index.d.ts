// Type definitions for underscore-functions 0.8.1
// Project: underscore-functions
// Definitions by: Daniel Moxon https://www.underscore-functions.com
declare module 'underscore-functions' {
	declare type TStringifyCacheResult = ((o: any) => string) | string
	declare enum ESanitize {
		MONGO = 1,
		SQL = 2,
		HTML = 3,
	}
	declare function check(
		value: any,
		type: any,
		throwErr: boolean = true,
	): boolean
	declare function sanitize(
		stringOrObject: any,
		mode: ESanitize = ESanitize.MONGO,
	): any
	declare function intToRoman(num: number): number
	declare function toBase64(s: string): string
	declare function fromBase64(s: string): string
	declare function fromBinary(s: string): string
	declare function toBinary(s: string): string
	declare function camelCase(s: string): string
	declare function pascalCase(s: string): string
	declare function nl2br(s: string): string
	declare function br2nl(s: string): string
	declare function splitByLength(s: string, len: number): string[]
	declare function upperCaseWords(s: string): string
	declare function upperCaseFirst(s: string): string
	declare function upperCaseFirstInSentence(s: string): string
	declare function decodeHTML(html: string): string
	declare function toAlpha(s: string, charSet?: string): string
	declare function toNumeric(s: string, charSet?: string): string
	declare function toHex(s: string): string
	declare function fromHex(s: string): string
	declare function rightRotate(s: string, bits: number): string
	declare function leftRotate(s: string, bits: number): string
	declare function rightShift(
		s: string,
		bits: number,
		char: string = '0',
	): string
	declare function reverse(s: string): string
	declare function reverseWords(s: string): string
	declare function shuffle(a: string | any[]): string | any[]
	declare function keyToField(s: string, strip?: string): string
	declare function isAlpha(s: string, ignoreChars?: string): boolean
	declare function isNumeric(s: string, ignoreChars?: string): boolean
	declare function isAlphaNumeric(s: string, ignoreChars?: string): boolean
	declare function uniqueId(prefix?: string, postfix?: string): string
	declare function firstUniqueCharacter(s: string): string
	declare function randomString(len: number, charSet?: string): string
	declare function isShouting(s: string, optionalThreshold?: number): boolean
	declare function getRepeatingCharacters(
		s: string,
		ignoreCase?: boolean,
		minRepeat: number = 2,
	): string[]
	declare function hasRepeatingCharacters(
		s: string,
		ignoreCase?: boolean,
		minRepeat: number = 2,
	): boolean

	declare function getRepeatingSets(
		s: string,
		ignoreCase?: boolean,
		minRepeat: number = 2,
	): string[]
	declare function hasRepeatingSets(
		s: string,
		ignoreCase?: boolean,
		minRepeat: number = 2,
	): boolean
	declare function getSequences(s: string, ignoreCase?: boolean): string[]
	declare function hasSequences(s: string, ignoreCase?: boolean): boolean
	declare function levenshtein(s: string, s2: string): number
	declare function justifyText(text: string, len: number = 20): string
	declare function isJson(s: string): boolean
	declare function stripTags(s: string): string
	declare function stringifyCache(
		o: any,
		_returnTemplate: boolean = false,
	): TStringifyCacheResult
	declare function stringifyT(o: any, tpl: string = ''): string
	declare function deepFreeze(a: any): any
	declare function leftJoin(a: any, b: any[], criteria?: () => boolean): any
	declare function rightJoin(a: any, b: any[], criteria?: () => boolean): any
	declare function compact(a: any[]): any
	declare function first(a: any[], byRef: boolean = false): any
	declare function last(a: any[], byRef: boolean = false): any
	declare function findFirst(
		a: any[],
		cond: (item: any) => boolean,
		byRef: boolean = false,
	): any
	declare function findLast(
		a: any[],
		cond: (item: any) => boolean,
		byRef: boolean = false,
	): any
	declare function unique(a: any[]): any
	declare function uniqueBy(
		a: any[],
		prop: string,
		byRef: boolean = false,
	): any
	declare function deepClone(a: any): any
	declare function flat(a: any): any
	declare function shuffle(a: string | any[]): string | any[]
	declare function range(start: number, end?: number, step?: number): number[]
	declare function lrange(start: number, end?: number, step?: number)
	declare function partition(a: any[], size: number): any[]
	declare function secureRandomNumber(min: number, max: number): number
	declare function round(
		n: number,
		precision: number = 0.5,
		ERoundOption = { ROUND: 0, ROUND_UP: 1, ROUND_DOWN: 2 },
	): number
	declare function add(...n: number[]): number
	declare function subtract(...n: number[]): number
	declare function multiply(...n: number[]): number
	declare function divide(...n: number[]): number
	declare function unixTimestamp(ds?: string): number
	declare function memoize(n: number): (...args: any) => any
}
