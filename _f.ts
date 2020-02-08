/* Copyright 2020 Daniel Moxon @ https://github.com/dcmox/_f */
interface ICharMap { [key: string]: string }
// tslint:disable: object-literal-sort-keys
const HTML_CHAR_MAP: ICharMap = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    '\'': '&#039;',
    '`': '&#x60;',
}
const REGEX_HTML_CHARS = /[&<>"']/g
const pascalCase = (s: string): string => s.replace(/_/g, ' ').split(' ').map((s: string) =>
    s.charAt(0).toUpperCase() + s.slice(1)).join('')
const camelCase = (s: string): string => s.replace(/_/g, ' ').split(' ').map((s: string, i: number) =>
    i === 0 ? s : s.charAt(0).toUpperCase() + s.slice(1)).join('')
const nl2br = (s: string) => s.replace(/\n/g, '<br />')
const br2nl = (s: string) => s.replace(/(<br([ ]*)?>|<br([ ]*)?\/>)/gi, '\n')
const splitByLength = (s: string, len: number) => s.match(new RegExp(`.{${len}}`, 'g')) || [s]
const upperCaseWords = (s: string) => s.split(' ').map((w: string) =>
    w.charAt(0).toUpperCase() + w.slice(1)).join(' ')
const upperCaseFirst = (s: string) => s.charAt(0).toUpperCase() + s.slice(1)
const upperCaseFirstInSentence = (s: string) =>
    s.indexOf('.') === -1 && s.indexOf('?') === -1 && s.indexOf('!') === -1
    ? s.charAt(0).toUpperCase() + s.slice(1)
    : s.replace(/(\.|\?|\!)  /g, (str: string) => str.trim() + ' ')
        .split('.').map((sentence: string) => sentence.charAt(0) === ' '
                                            ? ' ' + sentence.charAt(1).toUpperCase() + sentence.slice(2)
                                            : sentence.charAt(0).toUpperCase() + sentence.slice(1)).join('.')
        .split('?').map((sentence: string) => sentence.charAt(0) === ' '
                                            ? ' ' + sentence.charAt(1).toUpperCase() + sentence.slice(2)
                                            : sentence.charAt(0).toUpperCase() + sentence.slice(1)).join('?')
        .split('!').map((sentence: string) => sentence.charAt(0) === ' '
                                            ? ' ' + sentence.charAt(1).toUpperCase() + sentence.slice(2)
                                            : sentence.charAt(0).toUpperCase() + sentence.slice(1)).join('!')
const decodeHTML = (html: string): string =>
    html.toString().replace(REGEX_HTML_CHARS, (m: string) => HTML_CHAR_MAP[m])
const toAlpha = (s: string, charSet?: string) =>
    charSet
    ? s.replace(new RegExp(`[^a-zA-Z${charSet.split('').map((c: string) => '\\' + c).join('')}]`, 'g'), '')
    : s.replace(/[^a-zA-Z]/g, '')
const toNumeric = (s: string, charSet?: string) =>
    charSet
    ? s.replace(new RegExp(`[^0-9${charSet.split('').map((c: string) => '\\' + c).join('')}]`, 'g'), '')
    : s.replace(/[^0-9]/g, '')
const toBinary = (s: string) => s.split('').map((c: string) => c.charCodeAt(0).toString(2).padStart(8, '0')).join('')
const toHex = (s: string) => s.split('').map((c: string) => c.charCodeAt(0).toString(16)).join('')
const fromHex = (s: string) =>
    splitByLength(s, 2).map((c: string) => String.fromCharCode(parseInt(c, 16))).join('')
const fromBinary = (s: string) =>
    splitByLength(s, 8).map((c: string) => String.fromCharCode(parseInt(c, 2))).join('')
const toBase64 = (s: string) => window ? btoa(s) : new Buffer(s).toString('base64')
const fromBase64 = (s: string) => window ? atob(s) : new Buffer(s).toString('ascii')
const rightRotate = (s: string, bits: number) =>
    bits > s.length
    ? s.slice(s.length - (bits % s.length)) + s.slice(0, s.length - (bits % s.length))
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
    (s.length <= len ? s : s.slice(0, s.substring(0, len).lastIndexOf(' ')) + '...')
const reverse = (s: string): string => s.split('').reverse().join('')
const reverseWords = (s: string): string => s.split(' ').reverse().join(' ')
const toPath = (s: string): string[] => s.replace(/\[|\]/g, '.').split('.').filter((n: string) => n)
const firstUniqueCharacter = (s: string): string => s.split('').find((c) => s.indexOf(c) === s.lastIndexOf(c)) || ''
const randomString = (len: number = 10, charset: string = '!@#%=*_-~23456789abcdefghijkmnopqrstuvwxyzABCDEFGHIJKLMNPQRSTUVWXYZ'): string =>
    Array.from({length: len}, (c: any) => charset.charAt(Math.floor(Math.random() * charset.length))).join('')
const isShouting = (s: string, threshold: number = 0.51) =>
    (s.match(/[A-Z]/g)?.length || 0) / s.length >= threshold && s.length > 5

const getRepeatingSequences = (s: string, ignoreCase: boolean = true, minRepeat: number = 2) =>
    ignoreCase
    ? s.match(new RegExp(`(.)\\1{${minRepeat},}`, 'gi'))
    : s.match(new RegExp(`(.)\\1{${minRepeat},}`, 'g'))

const hasRepeatingSequences = (s: string, ignoreCase: boolean = true, minRepeat: number = 2) =>
    ignoreCase
    ? new RegExp(`(.+)\\1{${minRepeat},}`, 'gi').test(s)
    : new RegExp(`(.+)\\1{${minRepeat},}`, 'g').test(s)

const getRepeatingCharacters = (s: string, ignoreCase: boolean = true, minRepeat: number = 2) =>
    ignoreCase
    ? s.match(new RegExp(`(.)\\1{${minRepeat},}`, 'gi'))
    : s.match(new RegExp(`(.)\\1{${minRepeat},}`, 'g'))

const hasRepeatingCharacters = (s: string, ignoreCase: boolean = true, minRepeat: number = 2) =>
    ignoreCase
    ? new RegExp(`(.)\\1{${minRepeat},}`, 'gi').test(s)
    : new RegExp(`(.)\\1{${minRepeat},}`, 'g').test(s)

const keyToField = (s: string, strip?: string): string =>
    strip
    ? s.replace(new RegExp(`${strip}`, 'g'), '')
        .replace(/\-|\_/g, ' ')
        .split(' ')
        .map((w: string) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(' ')
        .trim()
    : s.replace(/\-|\_/g, ' ')
        .split(' ')
        .map((w: string) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(' ')
        .trim()

const compact = (a: any[]): any[] => a.filter((itm: any) => itm)

const first = (a: any[], byRef: boolean = false): any => {
    if (byRef) {
        for (const i in a) { if (a[i]) { return a[i] } }
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

const findFirst = (a: any[], cond: (item: any) => boolean, byRef: boolean = false): any =>
    byRef
    ? a.find((item: any) => cond(item))
    : a.slice().find((item: any) => cond(item))

const findLast = (a: any[], cond: (item: any) => boolean, byRef: boolean = false): any => {
    if (byRef) {
        const temp: any = a.filter((item: any) => cond(item))
        return temp[temp.length - 1]
    } else {
        return a.slice().reverse().find((item: any) => cond(item))
    }
}

const unique = (a: any[], byRef: boolean = false) =>
    byRef
    ? a.filter((item: any, index: number) => a.indexOf(item) === index)
    : a.slice().filter((item: any, index: number) => a.indexOf(item) === index)

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
            return src.map((e) => Array.isArray(src) ? deepClone(e) : e)
        } else {
            return src.slice(0)
        }
    }

    if (typeof src !== 'object') { return src }

    if (typeof src === 'object' && CONSTRUCTOR_TAGS.includes(toString.call(src))) {
        return new src.constructor(src)
    }

    return Object.keys(src).reduce((result: any, key: any): any => {
        if (Array.isArray(src[key])) {
            result[key] = deepClone(src[key])
        } else if (typeof src[key] === 'object') {
            const prototype: any = Object.getPrototypeOf(src[key])
            result[key] = deepClone(src[key])
            Object.setPrototypeOf(result[key], prototype)
            Object.getOwnPropertySymbols(src[key]).forEach((symbol: symbol) => {
                result[key][symbol] = src[key][symbol]
            })
        } else {
            result[key] = src[key]
        }
        return result
    }, Object.getOwnPropertySymbols(src).reduce((result: any, symbol: symbol) => {
        result[symbol] = src[symbol]
        return result
    }, {}))
}

const flat = (a: any) => a.reduce((ret: any[], v: any) => ret.concat(Array.isArray(v) ? flat(v) : v), [])

const shuffle = (a: string | any[], byRef: boolean = false) =>
    typeof a === 'string'
    ? a.split('').sort((a: any, b: any) => Math.random() > Math.random() ? 1 : -1).join('')
    : byRef
    ? a.sort((a: any, b: any) => Math.random() > Math.random() ? 1 : -1)
    : a.slice().sort((a: any, b: any) => Math.random() > Math.random() ? 1 : -1)

const isNumeric = (s: string | number, ignoreChars?: string) =>
    ignoreChars
    ? !s.toString().match(new RegExp(`[^0-9${ignoreChars.split('').map((c: string) => '\\' + c).join('|')}]`, 'gi'))
    : !s.toString().match(/[^0-9]/g)

const isAlpha = (s: string, ignoreChars?: string) =>
    ignoreChars
    ? !s.toString().match(new RegExp(`[^A-Z${ignoreChars.split('').map((c: string) => '\\' + c).join('|')}]`, 'gi'))
    : !s.toString().match(/[^A-Z]/gi)

const isAlphaNumeric = (s: string, ignoreChars?: string) =>
    ignoreChars
    ? !s.toString().match(new RegExp(`[^A-Z0-9${ignoreChars.split('').map((c: string) => '\\' + c).join('|')}]`, 'gi'))
    : !s.toString().match(/[^A-Z0-9]/gi)

const range = (s: number, e?: number, m?: number) =>
    e && m
    ? Array.from({length: Math.ceil((e - s) / m)}, (x: any, i: number) => (i * m) + s)
    : e
    ? Array.from({length: e - s}, (x: any, i: number) => i + s)
    : Array.from({length: s}, (x: any, i: number) => i)

const partition = (a: any[], size: number) => {
    return a.reduce((acc: any[], item: any) => {
        acc[acc.length - 1]
        ? acc[acc.length - 1].length < size
        ? acc[acc.length - 1].push(item)
        : acc[acc.length] = [ item ]
        : acc[acc.length] = [ item ]
        return acc
    }, [])
}

const unixTimestamp = () => new Date().valueOf()

const uniqueId = (prefix?: string, postfix?: string) => {
    return (prefix || '')
        + (process && process.pid ? process.pid.toString(36) : '')
        + Timestamp.get().toString(36)
        + (postfix || '')
}

class Timestamp {
    public static time: any
    public static last: any
    public static get(): number {
        this.time = new Date().valueOf()
        this.last = this.last || this.time
        return this.last = this.time > this.last ? this.time : this.last + 1
    }
}

// tslint:disable-next-line: max-classes-per-file
export class UnderscoreF {
    public static pascalCase = (s: string): string => pascalCase(s)
    public static camelCase = (s: string): string => camelCase(s)
    public static nl2br = (s: string) => nl2br(s)
    public static br2nl = (s: string) => br2nl(s)
    public static splitByLength = (s: string, len: number) => splitByLength(s, len)
    public static upperCaseWords = (s: string) => upperCaseWords(s)
    public static upperCaseFirst = (s: string) => upperCaseFirst(s)
    public static upperCaseFirstInSentence = (s: string) => upperCaseFirstInSentence(s)
    public static decodeHTML = (html: string): string => decodeHTML(html)
    public static toAlpha = (s: string, charSet?: string) => toAlpha(s, charSet)
    public static toNumeric = (s: string, charSet?: string) => toNumeric(s, charSet)
    public static toBinary = (s: string) => toBinary(s)
    public static toHex = (s: string) => toHex(s)
    public static fromHex = (s: string) => fromHex(s)
    public static fromBinary = (s: string) => fromBinary(s)
    public static toBase64 = (s: string) => toBase64(s)
    public static fromBase64 = (s: string) => fromBase64(s)
    public static rightRotate = (s: string, bits: number) => rightRotate(s, bits)
    public static leftRotate = (s: string, bits: number) => leftRotate(s, bits)
    public static rightShift = (s: string, bits: number, char: string = '0') => rightShift(s, bits, char)
    public static excerpt = (s: string, len: number) => excerpt(s, len)
    public static reverse = (s: string) => reverse(s)
    public static reverseWords = (s: string) => reverseWords(s)
    public static toPath = (s: string) => toPath(s)
    public static keyToField = (s: string, strip?: string) => keyToField(s, strip)
    public static compact = (a: any[]) => compact(a)
    public static first = (a: any[], byRef: boolean = false) => first(a, byRef)
    public static last = (a: any[], byRef: boolean = false) => last(a, byRef)
    public static findFirst = (a: any[], cond: () => boolean, byRef: boolean = false) => findFirst(a, cond, byRef)
    public static findLast = (a: any[], cond: () => boolean, byRef: boolean = false) => findLast(a, cond, byRef)
    public static unique = (a: any[]) => unique(a)
    public static deepClone = (a: any) => deepClone(a)
    public static flat = (a: any) => flat(a)
    public static shuffle = (a: string | any[]) => shuffle(a)
    public static isAlpha = (s: string, ignoreChars?: string) => isAlpha(s, ignoreChars)
    public static isNumeric = (s: string, ignoreChars?: string) => isNumeric(s, ignoreChars)
    public static isAlphaNumeric = (s: string, ignoreChars?: string) => isAlphaNumeric(s, ignoreChars)
    public static range = (start: number, end?: number, multiplier?: number) => range(start, end, multiplier)
    public static unixTimestamp = () => unixTimestamp()
    public static uniqueId = (prefix?: string, postfix?: string) => uniqueId(prefix, postfix)
    public static partition = (a: any[], size: number) => partition(a, size)
    public static firstUniqueCharacter = (s: string) => firstUniqueCharacter(s)
    public static randomString = (len: number, charSet?: string) => randomString(len, charSet)
    public static isShouting = (s: string, threshold: number = 0.51) => isShouting(s, threshold)
    public static getRepeatingCharacters = (s: string, ignoreCase?: boolean,
                                            minRepeat: number = 2) => getRepeatingCharacters(s, ignoreCase, minRepeat)
    public static hasRepeatingCharacters = (s: string, ignoreCase?: boolean,
                                            minRepeat: number = 2) => hasRepeatingCharacters(s, ignoreCase, minRepeat)
    public static getRepeatingSequences = (s: string, ignoreCase?: boolean,
                                           minRepeat: number = 2) => getRepeatingSequences(s, ignoreCase, minRepeat)
    public static hasRepeatingSequences = (s: string, ignoreCase?: boolean,
                                           minRepeat: number = 2) => hasRepeatingSequences(s, ignoreCase, minRepeat)
}

export const _f = UnderscoreF

export default _f
