/* Copyright 2020 Daniel Moxon @ https://github.com/dcmox/_f */

import { fromBase64, toBase64 } from './base64'
import { fromBinary, toBinary } from './binary'
import { camelCase } from './camelCase'
import { check } from './check'
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
import { intToRoman } from './intToRoman'
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
import { LRUCache } from './lru'
import { map } from './map'
import { add, divide, multiply, subtract } from './math'
import { memoize } from './memoize'
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
import { round } from './round'
import { safeEval, simpleEval } from './safeEval'
import { ESanitize, sanitize } from './sanitize'
import { secureRandomNumber } from './secureRandomNumber'
import { shuffle } from './shuffle'
import { splitByLength } from './splitByLength'
import { stringifyCache, stringifyT } from './stringify'
import { stripTags } from './stripTags'
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
	add,
	br2nl,
	camelCase,
	check,
	compact,
	decodeHTML,
	deepClone,
	deepFreeze,
	divide,
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
	intToRoman,
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
	LRUCache,
	map,
	memoize,
	multiply,
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
	round,
	ESanitize,
	safeEval,
	simpleEval,
	sanitize,
	secureRandomNumber,
	shuffle,
	splitByLength,
	stringifyCache,
	stringifyT,
	stripTags,
	subtract,
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
