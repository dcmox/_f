export enum ESanitize {
	MONGO = 1,
	SQL = 2,
	HTML = 3,
}
// tslint:disable: object-literal-sort-keys
// tslint:disable: quotemark
const HTML_CHAR_MAP: any = {
	'&': '&amp;',
	'<': '&lt;',
	'>': '&gt;',
	'"': '&quot;',
	"'": '&#039;',
	'`': '&#x60;',
}
const SQL_CHAR_MAP: any = {
	'\0': '\\0',
	'\x08': '\\b',
	'\x09': '\\t',
	'\x1a': '\\z',
	'\n': '\\n',
	'\r': '\\r',
	'"': '\\"',
	"'": "\\'",
	'%': '\\%',
	'\\': '\\\\',
}
export const sanitize = (v: any, mode: number = ESanitize.MONGO): any => {
	switch (mode) {
		case ESanitize.MONGO:
			if (toString.call(v) === '[object Object]') {
				for (const k in v) {
					if (k.startsWith('$')) {
						delete v[k]
					} else if (toString.call(v[k]) === '[object Object]') {
						sanitize(v[k], mode)
					}
				}
			}
			break
		case ESanitize.SQL:
			if (typeof v === 'string') {
				return v.replace(
					/[\0\x08\x09\x1a\n\r"'\\\%]/g,
					(char: string): string => SQL_CHAR_MAP[char] || char,
				)
			} else if (toString.call(v) === '[object Object]') {
				for (const k in v) {
					if (
						typeof v[k] === 'string' ||
						toString.call(v[k]) === '[object Object]'
					) {
						v[k] = sanitize(v[k], mode)
					}
				}
			}
			break
		case ESanitize.HTML:
			if (typeof v === 'string') {
				return v.replace(
					/[&<>"']/g,
					(char: string): string => HTML_CHAR_MAP[char],
				)
			} else if (toString.call(v) === '[object Object]') {
				for (const k in v) {
					if (typeof v[k] === 'string') {
						v[k] = v[k].replace(
							/[&<>"']/g,
							(char: string): string => HTML_CHAR_MAP[char],
						)
					} else if (toString.call(v[k]) === '[object Object]') {
						v[k] = sanitize(v[k], mode)
					}
				}
			}
			break
	}

	return v
}
