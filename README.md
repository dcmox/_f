# _f
String and Array manipulation library for TypeScript / NodeJS

## String Functions
* pascalCase = (s: string): string => Converts to Pascal Case
* camelCase = (s: string): string => Converts to camel case
* nl2br = (s: string) => Converts new lines to break tags
* br2nl = (s: string) => Converts break tags to new lines
* splitByLength = (s: string, len: number) => Splits a string by length
* upperCaseWords = (s: string) => Upper cases words in a string
* upperCaseFirst = (s: string) => Upper cases the first letter of a string.
* upperCaseFirstInSentence = (s: string) => Upper cases the first letter in each sentence.
* decodeHTML = (html: string): string => decodes HTML into safe characters
* toAlpha = (s: string, charSet?: string) => Converts to alpha-only characters
* toNumeric = (s: string, charSet?: string) => Converts to number-only characters
* toBinary = (s: string) => Converts to binary
* fromBinary = (s: string) => Converts from binary
* toHex = (s: string) => Converts to Hex
* fromHex = (s: string) => Converts from Hex
* toBase64 = (s: string) => Converts to Base64
* fromBase64 = (s: string) => Converts from Base64
* rightRotate = (s: string, bits: number) => Right rotates a string
* leftRotate = (s: string, bits: number) => Left rotates a string
* rightShift = (s: string, bits: number, char: string = '0') => Right shifts a string
* reverse = (s: string) => Reverses a string
* reverseWords = (s: string) => Reverses words in a string

## Usage
```typescript
const _f = require('underscore-functions')._f
const str = _f.upperCaseWords('hello world') // Hello World
```