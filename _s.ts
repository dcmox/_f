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
const rightRotate = (s: string, bits: number) => s.slice(s.length - bits) + s.slice(0, s.length - bits)
const rightShift = (s: string, bits: number, char: string = '0') => s.slice(0, s.length - bits).padStart(s.length, char)

export class UnderscoreS {
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
    public static rightShift = (s: string, bits: number, char: string = '0') => rightShift(s, bits, char)
}

export const _s = UnderscoreS

export default _s
