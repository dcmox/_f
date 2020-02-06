# _f
Moxy String and Array manipulation library for TypeScript / NodeJS. Array functions are immutable by default, providing you with copies rather than references.

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
* shuffle = (a: string | any[]) => Shuffle a string
* keyToField = (s: string, strip?: string) => Converts a key to a human readable field

## Array Functions
* compact = (a: any[]) => Removes values that are falsey
* first = (a: any[], byRef: boolean = false) => Returns the first element in an array (as a copy by default)
* last = (a: any[], byRef: boolean = false) => Returns the last element in an array (as a copy by default)
* findFirst = (a: any[], cond: (item: any) => boolean, byRef: boolean = false) => Returns the first element in an array (as a copy by default) that matches a condition
* findLast = (a: any[], cond: (item: any) => boolean, byRef: boolean = false) => Returns the last element in an array (as a copy by default) that matches a condition
* unique = (a: any[]) => Returns only the unique values in an array
* deepClone = (a: any) => Deep clone an object or array so that is is a pure copy
* flat = (a: any) => Flatten an array
* shuffle = (a: string | any[]) => Shuffle an array

## Usage
```typescript
const _f = require('underscore-functions')._f
const str = _f.upperCaseWords('hello world') // Hello World
```

## Donations appreciated
If you find any of my GitHub projects useful, feel free to [donate here](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=EUDNKJR7GS3UQ&source=url)!