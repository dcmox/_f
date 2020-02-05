# _s
String library for TypeScript / NodeJS

## String Functions
* pascalCase = (s: string): string => pascalCase(s)
* camelCase = (s: string): string => camelCase(s)
* nl2br = (s: string) => nl2br(s)
* br2nl = (s: string) => br2nl(s)
* splitByLength = (s: string, len: number) => splitByLength(s, len)
* upperCaseWords = (s: string) => upperCaseWords(s)
* upperCaseFirst = (s: string) => upperCaseFirst(s)
* upperCaseFirstInSentence = (s: string) => upperCaseFirstInSentence(s)
* decodeHTML = (html: string): string => decodeHTML(html)
* toAlpha = (s: string, charSet?: string) => toAlpha(s, charSet)
* toNumeric = (s: string, charSet?: string) => toNumeric(s, charSet)
* toBinary = (s: string) => toBinary(s)
* toHex = (s: string) => toHex(s)
* fromHex = (s: string) => fromHex(s)
* fromBinary = (s: string) => fromBinary(s)
* toBase64 = (s: string) => toBase64(s)
* fromBase64 = (s: string) => fromBase64(s)

## Usage
```typescript
const _s = require('underscore-string')._s
const str = _s.upperCaseWords('hello world') // Hello World
```