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

export const decodeHTML = (html: string): string =>
	html.toString().replace(REGEX_HTML_CHARS, (m: string) => HTML_CHAR_MAP[m])
