/* Copyright 2020 Daniel Moxon @ https://github.com/dcmox/_f */

import { fromBase64, toBase64 } from './base64'
import { fromBinary, toBinary } from './binary'
import { camelCase } from './camelCase'
import { compact } from './compact'
import { decodeHTML } from './decodeHTML'
import { deepClone } from './deepClone'
import { deepFreeze } from './deepFreeze'
import { excerpt } from './excerpt'
import { findFirst } from './findFirst'
import { findLast } from './findLast'
import { first } from './first'
import { firstUniqueCharacter } from './firstUniqueCharacter'
import { flat } from './flat'
import { getRepeatingCharacters } from './getRepeatingCharacters'
import { getRepeatingSets } from './getRepeatingSets'
import { getSequences } from './getSequences'
import { hasRepeatingCharacters } from './hasRepeatingCharacters'
import { hasRepeatingSets } from './hasRepeatingSets'
import { hasSequences } from './hasSequences'
import { fromHex, toHex } from './hex'
import { isAlpha } from './isAlpha'
import { isAlphaNumeric } from './isAlphaNumeric'
import { isJson } from './isJson'
import { isNumeric } from './isNumeric'
import { isShouting } from './isShouting'
import { justifyText } from './justifyText'
import { keyToField } from './keyToField'
import { last } from './last'
import { leftJoin } from './leftJoin'
import { leftRotate } from './leftRotate'
import { levenshtein } from './levenshtein'
import { lrange } from './lrange'
import { map } from './map'
import { br2nl, nl2br } from './nl2br'
import { partition } from './partition'
import { pascalCase } from './pascalCase'
import { randomString } from './randomString'
import { range } from './range'
import { reverse } from './reverse'
import { reverseWords } from './reverseWords'
import { rightJoin } from './rightJoin'
import { rightRotate } from './rightRotate'
import { rightShift } from './rightShift'
import { secureRandomNumber } from './secureRandomNumber'
import { shuffle } from './shuffle'
import { splitByLength } from './splitByLength'
import { toAlpha } from './toAlpha'
import { toNumeric } from './toNumeric'
import { toPath } from './toPath'
import { unique } from './unique'
import { uniqueBy } from './uniqueBy'
import { uniqueId } from './uniqueId'
import { unixTimestamp } from './unixTimestamp'
import { upperCaseFirst } from './upperCaseFirst'
import { upperCaseFirstInSentence } from './upperCaseFirstInSentence'
import { upperCaseWords } from './upperCaseWords'

module.exports = {
	br2nl,
	camelCase,
	compact,
	decodeHTML,
	deepClone,
	deepFreeze,
	excerpt,
	findFirst,
	findLast,
	first,
	firstUniqueCharacter,
	flat,
	fromBase64,
	fromBinary,
	fromHex,
	getRepeatingCharacters,
	getRepeatingSets,
	getSequences,
	hasRepeatingCharacters,
	hasRepeatingSets,
	hasSequences,
	isAlpha,
	isAlphaNumeric,
	isJson,
	isNumeric,
	isShouting,
	justifyText,
	keyToField,
	last,
	leftJoin,
	leftRotate,
	levenshtein,
	lrange,
	map,
	nl2br,
	partition,
	pascalCase,
	randomString,
	range,
	reverse,
	reverseWords,
	rightJoin,
	rightRotate,
	rightShift,
	secureRandomNumber,
	shuffle,
	splitByLength,
	toAlpha,
	toBase64,
	toBinary,
	toHex,
	toNumeric,
	toPath,
	unique,
	uniqueBy,
	uniqueId,
	unixTimestamp,
	upperCaseFirst,
	upperCaseFirstInSentence,
	upperCaseWords,
}
