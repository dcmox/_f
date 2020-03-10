import assert from 'assert'
import { lrange } from '../lrange'
import { ERoundOption } from '../round'
const _f = require('../_f')

describe('_f test suite', () => {
	it('should format a string to PascalCase', () => {
		const tests: any = [
			{ s: 'hello_world', expected: 'HelloWorld' },
			{ s: 'hi', expected: 'Hi' },
			{ s: 'pascal_case_is_cool', expected: 'PascalCaseIsCool' },
		]
		tests.forEach((test: any) => {
			assert.equal(_f.pascalCase(test.s), test.expected)
		})
	})
	it('should format a string to camelCase', () => {
		const tests: any = [
			{ s: 'hello_world', expected: 'helloWorld' },
			{ s: 'hi', expected: 'hi' },
			{ s: 'camel_case_is_cooler', expected: 'camelCaseIsCooler' },
		]
		tests.forEach((test: any) => {
			assert.equal(_f.camelCase(test.s), test.expected)
		})
	})
	it('should convert new lines to br tags', () => {
		const tests: any = [
			{ s: 'a\nb\nc', expected: 'a<br />b<br />c' },
			{ s: 'hello\nthere', expected: 'hello<br />there' },
			{ s: 'hello', expected: 'hello' },
		]
		tests.forEach((test: any) => {
			assert.equal(_f.nl2br(test.s), test.expected)
		})
	})
	it('should convert break tags to new lines', () => {
		const tests: any = [
			{ s: 'a<br>b<br />c', expected: 'a\nb\nc' },
			{ s: 'hello<BR>there', expected: 'hello\nthere' },
			{ s: 'hello<BR  />there', expected: 'hello\nthere' },
		]
		tests.forEach((test: any) => {
			assert.equal(_f.br2nl(test.s), test.expected)
		})
	})
	it('split a string into parts by length', () => {
		const tests: any = [
			{ s: 'onetwomoo', expected: ['one', 'two', 'moo'] },
			{ s: 'hmmyum', expected: ['hmm', 'yum'] },
			{ s: 'moo', expected: ['moo'] },
			{ s: 'mo', expected: ['mo'] },
		]
		tests.forEach((test: any) => {
			assert.deepEqual(_f.splitByLength(test.s, 3), test.expected)
		})
	})
	it('should upper case words', () => {
		const tests: any = [
			{ s: 'hello there', expected: 'Hello There' },
			{ s: 'hello World', expected: 'Hello World' },
			{ s: 'who are you', expected: 'Who Are You' },
		]
		tests.forEach((test: any) => {
			assert.equal(_f.upperCaseWords(test.s), test.expected)
		})
	})
	it('should upper case the first letter', () => {
		const tests: any = [
			{ s: 'hello there', expected: 'Hello there' },
			{ s: 'hello World', expected: 'Hello World' },
			{ s: 'who are you', expected: 'Who are you' },
		]
		tests.forEach((test: any) => {
			assert.equal(_f.upperCaseFirst(test.s), test.expected)
		})
	})
	it('should upper case the first letter', () => {
		const tests: any = [
			{
				s: 'hello there. how are you? i am fine.',
				expected: 'Hello there. How are you? I am fine.',
			},
			{
				s: 'hello World. are you doing okay?',
				expected: 'Hello World. Are you doing okay?',
			},
			{ s: 'i am fine! hurray.', expected: 'I am fine! Hurray.' },
		]
		tests.forEach((test: any) => {
			assert.equal(_f.upperCaseFirstInSentence(test.s), test.expected)
		})
	})
	it('should decode html tags', () => {
		const tests: any = [
			{ s: '<b>Test</b>', expected: '&lt;b&gt;Test&lt;/b&gt;' },
			{ s: 'hello', expected: 'hello' },
			{
				s: '<i>testing</i><br>',
				expected: '&lt;i&gt;testing&lt;/i&gt;&lt;br&gt;',
			},
		]
		tests.forEach((test: any) => {
			assert.equal(_f.decodeHTML(test.s), test.expected)
		})
	})
	it('should convert a string to only alphabetical characters', () => {
		const tests: any = [
			{ s: '<b>Test</b>', expected: 'bTestb' },
			{ s: 'hello.49812', expected: 'hello' },
			{ s: 'br417eak', expected: 'break' },
		]
		tests.forEach((test: any) => {
			assert.equal(_f.toAlpha(test.s), test.expected)
		})
	})
	it('should convert a string to only alphabetical characters with exceptions', () => {
		const tests: any = [
			{ s: 'Testing. One! Two?33', expected: 'Testing.One!Two?' },
			{ s: 'Boom.==', expected: 'Boom.' },
			{ s: 'Bam boo', expected: 'Bamboo' },
		]
		tests.forEach((test: any) => {
			assert.equal(_f.toAlpha(test.s, '.!?'), test.expected)
		})
	})
	it('should convert a string to only number characters', () => {
		const tests: any = [
			{ s: '<b>Test</b>123', expected: '123' },
			{ s: 'hello.49812', expected: '49812' },
			{ s: 'br417eak', expected: '417' },
		]
		tests.forEach((test: any) => {
			assert.equal(_f.toNumeric(test.s), test.expected)
		})
	})
	it('should right join an object', () => {
		const obj = {
			a: 'This',
			b: 'is',
			c: 'a',
			d: 'test!',
		}
		const objToJoin = {
			d: 'test.',
		}
		const expected = {
			a: 'This',
			b: 'is',
			c: 'a',
			d: 'test.',
		}
		assert.deepEqual(_f.rightJoin(obj, objToJoin), expected)
	})
	it('should left join an object', () => {
		const obj = {
			a: 'This',
			b: 'is',
			c: 'a',
			d: 'test!',
		}
		const objToJoin = {
			d: 'test.',
		}
		const expected = {
			a: 'This',
			b: 'is',
			c: 'a',
			d: 'test!',
		}
		assert.deepEqual(_f.leftJoin(obj, objToJoin), expected)
	})
	it('should deepfreeze an object', () => {
		const obj = {
			a: {
				b: {
					c: [1, 2, 3],
				},
				d: {
					e: [1, 2, 3, 4],
				},
			},
		}
		_f.deepFreeze(obj)
		try {
			obj.a.b.c = [2, 1, 3]
			obj.a.d = { e: [] }
		} catch {
			assert.equal(true, true)
		}
		assert.deepEqual(obj.a.b, {
			c: [1, 2, 3],
		})
	})
	it('should convert a string to only alphabetical characters with exceptions', () => {
		const tests: any = [
			{ s: 'Testing. One! Two?33', expected: '33' },
			{ s: '360-555-6789', expected: '360-555-6789' },
			{ s: '902 10', expected: '90210' },
		]
		tests.forEach((test: any) => {
			assert.equal(_f.toNumeric(test.s, '-'), test.expected)
		})
	})
	it('should convert a string to binary', () => {
		const tests: any = [
			{ s: 'test', expected: '01110100011001010111001101110100' },
			{
				s: 'hello',
				expected: '0110100001100101011011000110110001101111',
			},
			{
				s: 'world',
				expected: '0111011101101111011100100110110001100100',
			},
		]
		tests.forEach((test: any) => {
			assert.equal(_f.toBinary(test.s), test.expected)
		})
	})
	it('should convert a string from binary', () => {
		const tests: any = [
			{ expected: 'test', s: '01110100011001010111001101110100' },
			{
				expected: 'hello',
				s: '0110100001100101011011000110110001101111',
			},
			{
				expected: 'world',
				s: '0111011101101111011100100110110001100100',
			},
		]
		tests.forEach((test: any) => {
			assert.equal(_f.fromBinary(test.s), test.expected)
		})
	})
	it('should convert a string to hex', () => {
		const tests: any = [
			{ s: 'test', expected: '74657374' },
			{ s: 'hello', expected: '68656c6c6f' },
			{ s: 'world', expected: '776f726c64' },
		]
		tests.forEach((test: any) => {
			assert.equal(_f.toHex(test.s), test.expected)
		})
	})
	it('should convert a string from hex', () => {
		const tests: any = [
			{ expected: 'test', s: '74657374' },
			{ expected: 'hello', s: '68656C6C6F' },
			{ expected: 'world', s: '776F726C64' },
		]
		tests.forEach((test: any) => {
			assert.equal(_f.fromHex(test.s), test.expected)
		})
	})
	it('should convert a string to base64', () => {
		const tests: any = [
			{ s: 'test', expected: 'dGVzdA==' },
			{ s: 'hello', expected: 'aGVsbG8=' },
			{ s: 'world', expected: 'd29ybGQ=' },
		]
		tests.forEach((test: any) => {
			assert.equal(_f.toBase64(test.s), test.expected)
		})
	})
	it('should convert a string from base64', () => {
		const tests: any = [
			{ expected: 'test', s: 'dGVzdA==' },
			{ expected: 'hello', s: 'aGVsbG8=' },
			{ expected: 'world', s: 'd29ybGQ=' },
		]
		tests.forEach((test: any) => {
			assert.equal(_f.fromBase64(test.s), test.expected)
		})
	})
	it('should right rotate a string', () => {
		const tests: any = [
			{ s: 'test', times: 3, expected: 'estt' },
			{ s: 'hello', times: 3, expected: 'llohe' },
			{ s: 'world', times: 7, expected: 'ldwor' },
		]
		tests.forEach((test: any) => {
			assert.equal(_f.rightRotate(test.s, test.times), test.expected)
		})
	})
	it('should right shift a string', () => {
		const tests: any = [
			{ s: '1231', times: 3, expected: '0001' },
			{ s: '54321', times: 4, expected: '00005' },
			{ s: '1world', times: 5, expected: '000001' },
		]
		tests.forEach((test: any) => {
			assert.equal(_f.rightShift(test.s, test.times), test.expected)
		})
	})
	it('should left rotate a string', () => {
		const tests: any = [
			{ s: 'test', times: 3, expected: 'ttes' },
			{ s: 'hello', times: 4, expected: 'ohell' },
			{ s: 'world', times: 5, expected: 'world' },
		]
		tests.forEach((test: any) => {
			assert.equal(_f.leftRotate(test.s, test.times), test.expected)
		})
	})
	it('should create an excerpt', () => {
		const tests: any = [
			{ s: 'hello world', expected: 'hello...' },
			{ s: 'hi there how', expected: 'hi there...' },
			{ s: 'hi hi hi how', expected: 'hi hi hi...' },
		]
		tests.forEach((test: any) => {
			assert.equal(_f.excerpt(test.s, 10), test.expected)
		})
	})
	it('should reverse a string', () => {
		const tests: any = [
			{ s: 'hello world', expected: 'dlrow olleh' },
			{ s: 'hi there', expected: 'ereht ih' },
		]
		tests.forEach((test: any) => {
			assert.equal(_f.reverse(test.s), test.expected)
		})
	})
	it('should reverse words in a string', () => {
		const tests: any = [
			{ s: 'hello world', expected: 'world hello' },
			{ s: 'hi there', expected: 'there hi' },
		]
		tests.forEach((test: any) => {
			assert.equal(_f.reverseWords(test.s), test.expected)
		})
	})
	it('should find the first unique character in a string', () => {
		const tests: any = [
			{ s: 'aaabbcdc', expected: 'd' },
			{ s: 'abacadbcdeff', expected: 'e' },
		]
		tests.forEach((test: any) => {
			assert.equal(_f.firstUniqueCharacter(test.s), test.expected)
		})
	})
	it('should convert a string path to an array', () => {
		const tests: any = [
			{ s: 'a[1].b.c', expected: ['a', '1', 'b', 'c'] },
			{ s: 'a.b.c.d', expected: ['a', 'b', 'c', 'd'] },
		]
		tests.forEach((test: any) => {
			assert.deepEqual(_f.toPath(test.s), test.expected)
		})
	})
	it('should convert a key to a human readable string', () => {
		const tests: any = [
			{ s: 'first_name', expected: 'First Name' },
			{ s: 'last-name', expected: 'Last Name' },
			{ s: 'user-last-name', expected: 'Last Name' },
		]
		tests.forEach((test: any) => {
			assert.deepEqual(_f.keyToField(test.s, 'user'), test.expected)
		})
	})
	it('should detect if a string is mostly in caps, aka SHOUTING', () => {
		const tests: any = [
			{ s: 'ROTC Certified', expected: false },
			{ s: 'DID you know I AM SHOUTING?', expected: true },
			{ s: 'SHOUT OUT!', expected: true },
		]
		tests.forEach((test: any) => {
			assert.deepEqual(_f.isShouting(test.s), test.expected)
		})
	})
	it('should detect repeating sets in a string', () => {
		const tests: any = [
			{ s: 'abcabcabc', expected: ['abcabcabc'] },
			{ s: 'ararbarbarbar', expected: ['arbarbarb'] },
			{
				s: 'jello mello fello hellohellohello',
				expected: ['hellohellohello'],
			},
			{ s: 'test', expected: null },
		]
		tests.forEach((test: any) => {
			assert.deepEqual(_f.getRepeatingSets(test.s), test.expected)
		})
	})
	it('should detect if a string contains repeating sets', () => {
		const tests: any = [
			{ s: 'abcabcabc', expected: true },
			{ s: 'ararbarbarbar', expected: true },
			{ s: 'jello mello fello hello hello hello', expected: true },
			{ s: 'test', expected: false },
		]
		tests.forEach((test: any) => {
			assert.deepEqual(_f.hasRepeatingSets(test.s), test.expected)
		})
	})
	it('should detect sequences in a string', () => {
		const tests: any = [
			{ s: '1234567', expected: ['1234567'] },
			{ s: 'abc def', expected: ['abc', 'def'] },
			{ s: '321 fed', expected: ['321', 'fed'] },
			{ s: 'test', expected: [] },
		]
		tests.forEach((test: any) => {
			assert.deepEqual(_f.getSequences(test.s), test.expected)
		})
	})
	it('should detect if a string contains sequences', () => {
		const tests: any = [
			{ s: '1234567', expected: true },
			{ s: 'abc def', expected: true },
			{ s: '321 fed', expected: true },
			{ s: 'test', expected: false },
		]
		tests.forEach((test: any) => {
			assert.deepEqual(_f.hasSequences(test.s), test.expected)
		})
	})
	it('should detect repeating characters in a string', () => {
		const tests: any = [
			{ s: 'testingggg', expected: ['gggg'] },
			{ s: 'boooo that is grosss!', expected: ['oooo', 'sss'] },
			{ s: 'SHOUT OUT!', expected: null },
		]
		tests.forEach((test: any) => {
			assert.deepEqual(_f.getRepeatingCharacters(test.s), test.expected)
		})
	})
	it('should detect if a string contains repeating characters', () => {
		const tests: any = [
			{ s: 'testingggg', expected: true },
			{ s: 'boooo that is grosss!', expected: true },
			{ s: 'SHOUT OUT!', expected: false },
		]
		tests.forEach((test: any) => {
			assert.deepEqual(_f.hasRepeatingCharacters(test.s), test.expected)
		})
	})
	it('should justify text', () => {
		const tests: any = [
			{
				s:
					'Science is what we understand well enough to explain to a computer. Art is everything else we do.',
				expected:
					'Science  is  what we\nunderstand      well\nenough   to  explain\nto  a  computer. Art\nis  everything  else\nwe do.',
			},
		]
		tests.forEach((test: any) => {
			assert.deepEqual(_f.justifyText(test.s), test.expected)
		})
	})
	it('should justify strip tags', () => {
		assert.deepEqual(_f.stripTags('<b>test</b>'), 'test')
		assert.deepEqual(
			_f.stripTags('<div><button>hello world</button></div>'),
			'hello world',
		)
	})
	it('should detect if a string is JSON', () => {
		const tests: any = [
			{
				s: JSON.stringify({ field: 'test' }),
				expected: true,
			},
			{
				s: JSON.stringify({ field: 'testing', boolean: false }),
				expected: true,
			},
		]
		tests.forEach((test: any) => {
			assert.deepEqual(_f.isJson(test.s), test.expected)
		})
	})
	it('should stringify a JSON object', () => {
		class MoxyDate {}
		const d = new Date()

		const obj = {
			a: 'test',
			b: '"test"',
			c: 'world',
			d: 'hello',
			e: 'hmmmm',
			f: [1, 2, 3],
			g: 12345,
			h: true,
			i: {}, // Test breaks on function declaration but doesn't in actual usage
			j: new MoxyDate(),
			k: { a: 123, b: 'def', g: true },
			l: d,
			m: String('test'),
			p: 'TEST',
			q: new Map([
				[1, 2],
				[3, 4],
			]),
		}
		const stringify = _f.stringifyCache(obj)
		assert.deepEqual(stringify(obj), JSON.stringify(obj))

		const custom = {
			n: new Int8Array([1, 2, 3]),
			o: new BigInt64Array([BigInt(1), BigInt(2)]),
		}
		const stringifyCustom = _f.stringifyCache(custom)
		assert.deepEqual(stringifyCustom(custom), '{"n":[1,2,3],"o":{}}')
		assert.deepEqual(_f.stringifyT(false), 'false')
		assert.deepEqual(_f.stringifyT(d), '"' + d.toISOString() + '"')
		assert.deepEqual(_f.stringifyT(123), '123')
	})
	it('should memoize a function', () => {
		const memoized = _f.memoize(1)(function(a: number, b: number) {
			return a + b
		})
		memoized(1, 2)
		assert.equal(memoized(1, 2), 3)
		assert.equal(memoized(3, 4), 7)
		assert.equal(memoized(3, 4), 7)
	})
	it('should sanitize a string or object', () => {
		// tslint:disable-next-line: quotemark
		const { ESanitize } = require('../sanitize')
		assert.deepEqual(
			_f.sanitize(
				{ username: 'johndoe', password: { $gt: '' } },
				ESanitize.NOSQL,
			),
			{ username: 'johndoe', password: {} },
		)
		assert.equal(
			_f.sanitize("name' OR 1==1", ESanitize.SQL),
			"name\\' OR 1==1",
		)
		assert.equal(
			_f.sanitize("name' \tOR 1==1", ESanitize.SQL),
			"name\\' \\tOR 1==1",
		)
		assert.equal(
			_f.sanitize('<b>This is a test</b>', ESanitize.HTML),
			'&lt;b&gt;This is a test&lt;/b&gt;',
		)
	})
	it('should check that a variable matches a type', () => {
		assert.equal(_f.check('test', String, false), true)
		assert.equal(_f.check(false, Boolean, false), true)
		assert.equal(_f.check('false', Boolean, false), false)
		assert.equal(_f.check(0, 'boolean', false), false)
		assert.equal(_f.check(0, 'number', false), true)
		assert.equal(_f.check(0, null, false), false)
		assert.equal(_f.check(null, null, false), true)
		const arr: any = []
		assert.equal(_f.check(arr[2], undefined, false), true)
		assert.equal(_f.check(arr, undefined, false), false)
		// tslint:disable-next-line: max-classes-per-file
		class Test {}
		const test = new Test()
		assert.equal(_f.check(test, Test, false), true)
		assert.equal(_f.check({}, Object, false), true)
		assert.equal(_f.check([], Array, false), true)
		assert.throws(() => _f.check(1, Boolean))
		assert.throws(() => _f.check(555, String))
		assert.throws(() => _f.check('555', Number))
		assert.throws(() => _f.check({}, Array))
	})
	it('should safely evaluate an expression or code logic', async () => {
		// NodeJS eval
		const nodeResult = await _f.safeEval('a = 5 + 5', { a: 0 })
		assert.deepEqual(nodeResult, { a: 10 })
		const byValueTest = { a: 0 }
		await _f.safeEval('a = 5 + 5', byValueTest)
		assert.notDeepEqual(byValueTest, { a: 10 })
		// Browser eval
		const result = await _f.safeEval('a = 5 + 5', { a: 0, useNode: false })
		assert.deepEqual(result, { a: 10 })
		// Simple eval
		const simpleResult = _f.simpleEval('5 * 5 + 5')
		assert.deepEqual(simpleResult, 30)
	})
	it('should calculate the distances between strings correctly', () => {
		assert.equal(_f.levenshtein('test', 'test'), 0)
		assert.equal(_f.levenshtein('', 'test'), 4)
		assert.equal(_f.levenshtein('test', ''), 4)
		assert.equal(_f.levenshtein('test', 'testing'), 3)
		assert.equal(_f.levenshtein('abc', 'def'), 3)
		assert.equal(_f.levenshtein('abc', 'cba'), 2)
	})

	it('should map array of objects and grab the field we want', () => {
		assert.deepEqual(
			_f.map([{ a: 'b' }, { a: 'c', b: 'a' }, { a: 'd', e: 'f' }], 'a'),
			['b', 'c', 'd'],
		)
		assert.deepEqual(
			_f.map([{ a: 'b' }, { b: 'a' }, { a: 'd', e: 'f' }], 'a'),
			['b', undefined, 'd'],
		)
	})

	it('should generate a number between 1 and 100', () => {
		const number = _f.secureRandomNumber(1, 100)
		assert.equal(number >= 1 && number <= 100, true)
		const number2 = _f.secureRandomNumber(333, 444)
		assert.equal(number2 >= 333 && number <= 444, true)
	})

	it('should add, subtract, divide, and multiply', () => {
		assert.equal(_f.add(0.1, 0.2), 0.3)
		assert.equal(_f.add(0.1, 0.2, 0.1, 0.1), 0.5)
		assert.equal(_f.subtract(0.3, 0.1), 0.2)
		assert.equal(_f.subtract(0.2, 0.1), 0.1)
		assert.equal(_f.multiply(0.2, 0.1), 0.02)
		assert.equal(_f.divide(0.02, 0.1), 0.2)
	})
	it('int to roman numeral', () => {
		assert.equal(_f.intToRoman(1981), 'MCMLXXXI')
		assert.equal(_f.intToRoman(4242), '(IV)CCXLII')
		assert.equal(_f.intToRoman(1337), 'MCCCXXXVII')
		assert.equal(_f.intToRoman(3), 'III')
		assert.equal(_f.intToRoman(4), 'IV')
		assert.equal(_f.intToRoman(5), 'V')
		assert.equal(_f.intToRoman(9), 'IX')
		assert.equal(_f.intToRoman(435097), '(CD)(X)(X)(X)(V)XCVII')
		assert.equal(_f.intToRoman(3999999), '(M)(M)(M)(CM)(XC)(IX)CMXCIX')
	})
	it('should compact an array', () => {
		assert.deepEqual(_f.compact([1, 2, null, false, 3, 4, undefined, 5]), [
			1,
			2,
			3,
			4,
			5,
		])
	})
	it('should return the first element', () => {
		assert.deepEqual(_f.first([1, 2, 3]), 1)
		const items = [1, 2, 3]
		assert.equal(_f.first([1, 2, 3], true), items[0])
	})
	it('should return the last element', () => {
		assert.deepEqual(_f.last([1, 2, 3]), 3)
		const items = [1, 2, 3]
		assert.equal(_f.last([1, 2, 3], true), items[2])
	})
	it('should find the first element in an array matching a condition', () => {
		assert.deepEqual(
			_f.findFirst(
				[{ a: 1 }, { a: 2 }, { a: 1, b: 2 }],
				(item: any) => item.a === 1,
			),
			{ a: 1 },
		)
	})
	it('should find the first element in an array matching a condition by ref', () => {
		const items = [{ a: 1 }, { a: 2 }, { a: 1, b: 2 }]
		assert.equal(
			_f.findFirst(items, (item: any) => item.a === 1, true),
			items[0],
		)
	})
	it('should find the last element in an array matching a condition', () => {
		assert.deepEqual(
			_f.findLast(
				[{ a: 1 }, { a: 2 }, { a: 1, b: 2 }],
				(item: any) => item.a === 1,
			),
			{ a: 1, b: 2 },
		)
	})
	it('should find the first element in an array matching a condition by ref', () => {
		const items = [{ a: 1 }, { a: 2 }, { a: 1, b: 2 }]
		assert.equal(
			_f.findLast(items, (item: any) => item.a === 1, true),
			items[2],
		)
	})
	it('should grab unique values in an array', () => {
		assert.deepEqual(_f.unique([1, 2, 3, 4, 2, 5, 2]), [1, 2, 3, 4, 5])
	})
	it('should grab unique values by a key in an array', () => {
		assert.deepEqual(
			_f.uniqueBy(
				[
					{ x: 1 },
					{ x: 2 },
					{ x: 3 },
					{ x: 4 },
					{ x: 2, y: 1 },
					{ x: 5 },
					{ x: 2 },
				],
				'x',
			),
			[{ x: 1 }, { x: 2 }, { x: 3 }, { x: 4 }, { x: 5 }],
		)
	})
	it('should test if a string contains only alpha characters', () => {
		assert.deepEqual(_f.isAlpha('abc'), true)
		assert.deepEqual(_f.isAlpha('abc-test', '-'), true)
		assert.deepEqual(_f.isAlpha('abc-test1', '-'), false)
	})
	it('should test if a string contains only numeric characters', () => {
		assert.deepEqual(_f.isNumeric('abc'), false)
		assert.deepEqual(_f.isNumeric('123-456', '-'), true)
		assert.deepEqual(_f.isNumeric('1234'), true)
	})
	it('should round a number to the nearest X', () => {
		assert.deepEqual(_f.round(16, 5), 15)
		assert.deepEqual(_f.round(12.2), 12)
		assert.deepEqual(_f.round(15, 20), 20)
		assert.deepEqual(_f.round(6, 2.5, ERoundOption.ROUND_DOWN), 5)
		assert.deepEqual(_f.round(6, 2.5, ERoundOption.ROUND_UP), 7.5)
	})
	it('should test if a string contains only alpha-numeric characters', () => {
		assert.deepEqual(_f.isAlphaNumeric('abc123'), true)
		assert.deepEqual(_f.isAlphaNumeric('123-abc', '-'), true)
		assert.deepEqual(_f.isAlphaNumeric('1234'), true)
		assert.deepEqual(_f.isAlphaNumeric('1234>'), false)
	})
	it('should create a range', () => {
		assert.deepEqual(_f.range(1, 9), [1, 2, 3, 4, 5, 6, 7, 8])
		assert.deepEqual(_f.range(0, 10, 2), [0, 2, 4, 6, 8])
		assert.deepEqual(_f.range(0, -20, -2), [
			0,
			-2,
			-4,
			-6,
			-8,
			-10,
			-12,
			-14,
			-16,
			-18,
		])
		assert.deepEqual(_f.range(0, -20, 1), [])
	})
	it('should create a large range', () => {
		let iterations: number = 0
		for (const num of lrange(0, 1000000, 2)) {
			assert.equal(num % 2, 0)
			iterations++
		}
		assert.equal(iterations, 500000)
		const nums = []
		for (const num of lrange(1, 10, 2)) {
			nums.push(num)
		}
		assert.deepEqual(nums, [1, 3, 5, 7, 9])
	})
	it('should create a unique id', () => {
		const id = _f.uniqueId()
		const id2 = _f.uniqueId()
		const id3 = _f.uniqueId()
		assert.notDeepEqual(id, id2)
		assert.notDeepEqual(id2, id3)
	})
	it('should partition an array', () => {
		assert.deepEqual(_f.partition([1, 2, 3, 4, 5, 6], 2), [
			[1, 2],
			[3, 4],
			[5, 6],
		])
		assert.deepEqual(_f.partition([1, 2, 3, 4, 5, 6], 3), [
			[1, 2, 3],
			[4, 5, 6],
		])
	})
})
