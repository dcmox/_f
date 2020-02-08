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
* isAlpha = (s: string, ignoreChars?: string) => Returns true if the string contains only alpha characters, with an optional set of characters to ignore
* isNumeric = (s: string, ignoreChars?: string) => Returns true if the string contains only numeric characters, with an optional set of characters to ignore
* isAlphaNumeric = (s: string, ignoreChars?: string) =>  Returns true if the string contains only alpha numeric characters, with an optional set of characters to ignore
* uniqueId = (prefix?: string, postfix?: string) => Generates a unique ID
* firstUniqueCharacter = (s: string) => Returns the first non-repeating character in a string
* randomString = (len: number, charSet?: string) => Generates a random string of N length using an optionally defined character set.
* isShouting = (s: string, optionalThreshold?: number) => Returns true if a sentence (more than 5 characters long) is detected as being SHOUTED OUT. Threshold is the percentage of uppercase text.
* getRepeatingCharacters = (s: string, ignoreCase?: boolean, minRepeat: number = 2) => Get all repeating characters in a string
* hasRepeatingCharacters = (s: string, ignoreCase?: boolean, minRepeat: number = 2) => Returns true if a string has repeating characters, `booo` = 2 repeated 'o' characters.
* getRepeatingSets = (s: string, ignoreCase?: boolean, minRepeat: number = 2) => Get all repeating sets in a string
* hasRepeatingSets = (s: string, ignoreCase?: boolean, minRepeat: number = 2) => Returns true if a string has repeating sets, `hellohellohello` = 2 repeated 'hello' sets.
* getRepeatingSequences = (s: string, ignoreCase?: boolean) => Returns all repeating sequences (eg. 123, abc, 321) in a string
* hasRepeatingSequences = (s: string, ignoreCase?: boolean) => Returns true if a string has characters or numbers in sequence or reverse sequence  (eg. 123, abc, 321)

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
* range = (start: number, end?: number, multiplier?: number) => Creates a range of numbers
* partition = (a: any[], size: number) => Partitions an array into segments of X size

## Date Functions
* unixTimestamp = () => Returns the time in milliseconds since the Unix epoch (00:00:00 UTC on 1 January 1970)

## Usage
```typescript
const _f = require('underscore-functions')._f
const str = _f.upperCaseWords('hello world') // Hello World
```

## Donations appreciated
If you find any of my GitHub projects useful, feel free to [donate here](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=EUDNKJR7GS3UQ&source=url)!