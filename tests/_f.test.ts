import assert from 'assert'
const _f = require('../_f')._f

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
            { s: 'hello there', expected: 'Hello There'},
            { s: 'hello World', expected: 'Hello World' },
            { s: 'who are you', expected: 'Who Are You' },
        ]
        tests.forEach((test: any) => {
            assert.equal(_f.upperCaseWords(test.s), test.expected)
        })
    })
    it('should upper case the first letter', () => {
        const tests: any = [
            { s: 'hello there', expected: 'Hello there'},
            { s: 'hello World', expected: 'Hello World' },
            { s: 'who are you', expected: 'Who are you' },
        ]
        tests.forEach((test: any) => {
            assert.equal(_f.upperCaseFirst(test.s), test.expected)
        })
    })
    it('should upper case the first letter', () => {
        const tests: any = [
            { s: 'hello there. how are you? i am fine.', expected: 'Hello there. How are you? I am fine.'},
            { s: 'hello World. are you doing okay?', expected: 'Hello World. Are you doing okay?' },
            { s: 'i am fine! hurray.', expected: 'I am fine! Hurray.' },
        ]
        tests.forEach((test: any) => {
            assert.equal(_f.upperCaseFirstInSentence(test.s), test.expected)
        })
    })
    it('should decode html tags', () => {
        const tests: any = [
            { s: '<b>Test</b>', expected: '&lt;b&gt;Test&lt;/b&gt;'},
            { s: 'hello', expected: 'hello' },
            { s: '<i>testing</i><br>', expected: '&lt;i&gt;testing&lt;/i&gt;&lt;br&gt;'},
        ]
        tests.forEach((test: any) => {
            assert.equal(_f.decodeHTML(test.s), test.expected)
        })
    })
    it('should convert a string to only alphabetical characters', () => {
        const tests: any = [
            { s: '<b>Test</b>', expected: 'bTestb'},
            { s: 'hello.49812', expected: 'hello' },
            { s: 'br417eak', expected: 'break'},
        ]
        tests.forEach((test: any) => {
            assert.equal(_f.toAlpha(test.s), test.expected)
        })
    })
    it('should convert a string to only alphabetical characters with exceptions', () => {
        const tests: any = [
            { s: 'Testing. One! Two?33', expected: 'Testing.One!Two?'},
            { s: 'Boom.==', expected: 'Boom.' },
            { s: 'Bam boo', expected: 'Bamboo'},
        ]
        tests.forEach((test: any) => {
            assert.equal(_f.toAlpha(test.s, '.!?'), test.expected)
        })
    })
    it('should convert a string to only number characters', () => {
        const tests: any = [
            { s: '<b>Test</b>123', expected: '123'},
            { s: 'hello.49812', expected: '49812' },
            { s: 'br417eak', expected: '417'},
        ]
        tests.forEach((test: any) => {
            assert.equal(_f.toNumeric(test.s), test.expected)
        })
    })
    it('should convert a string to only alphabetical characters with exceptions', () => {
        const tests: any = [
            { s: 'Testing. One! Two?33', expected: '33'},
            { s: '360-555-6789', expected: '360-555-6789' },
            { s: '902 10', expected: '90210'},
        ]
        tests.forEach((test: any) => {
            assert.equal(_f.toNumeric(test.s, '-'), test.expected)
        })
    })
    it('should convert a string to binary', () => {
        const tests: any = [
            { s: 'test', expected: '01110100011001010111001101110100'},
            { s: 'hello', expected: '0110100001100101011011000110110001101111' },
            { s: 'world', expected: '0111011101101111011100100110110001100100'},
        ]
        tests.forEach((test: any) => {
            assert.equal(_f.toBinary(test.s), test.expected)
        })
    })
    it('should convert a string from binary', () => {
        const tests: any = [
            { expected: 'test', s: '01110100011001010111001101110100'},
            { expected: 'hello', s: '0110100001100101011011000110110001101111' },
            { expected: 'world', s: '0111011101101111011100100110110001100100'},
        ]
        tests.forEach((test: any) => {
            assert.equal(_f.fromBinary(test.s), test.expected)
        })
    })
    it('should convert a string to hex', () => {
        const tests: any = [
            { s: 'test', expected: '74657374'},
            { s: 'hello', expected: '68656c6c6f' },
            { s: 'world', expected: '776f726c64'},
        ]
        tests.forEach((test: any) => {
            assert.equal(_f.toHex(test.s), test.expected)
        })
    })
    it('should convert a string from hex', () => {
        const tests: any = [
            { expected: 'test', s: '74657374'},
            { expected: 'hello', s: '68656C6C6F' },
            { expected: 'world', s: '776F726C64'},
        ]
        tests.forEach((test: any) => {
            assert.equal(_f.fromHex(test.s), test.expected)
        })
    })
    it('should convert a string to base64', () => {
        const tests: any = [
            { s: 'test', expected: 'dGVzdA=='},
            { s: 'hello', expected: 'aGVsbG8=' },
            { s: 'world', expected: 'd29ybGQ='},
        ]
        tests.forEach((test: any) => {
            assert.equal(_f.toBase64(test.s), test.expected)
        })
    })
    it('should convert a string from base64', () => {
        const tests: any = [
            { expected: 'test', s: 'dGVzdA=='},
            { expected: 'hello', s: 'aGVsbG8=' },
            { expected: 'world', s: 'd29ybGQ='},
        ]
        tests.forEach((test: any) => {
            assert.equal(_f.fromBase64(test.s), test.expected)
        })
    })
    it('should right rotate a string', () => {
        const tests: any = [
            { s: 'test', times: 3, expected: 'estt'},
            { s: 'hello', times: 3, expected: 'llohe' },
            { s: 'world', times: 7, expected: 'ldwor'},
        ]
        tests.forEach((test: any) => {
            assert.equal(_f.rightRotate(test.s, test.times), test.expected)
        })
    })
    it('should right shift a string', () => {
        const tests: any = [
            { s: '1231', times: 3, expected: '0001'},
            { s: '54321', times: 4, expected: '00005' },
            { s: '1world', times: 5, expected: '000001'},
        ]
        tests.forEach((test: any) => {
            assert.equal(_f.rightShift(test.s, test.times), test.expected)
        })
    })
    it('should left rotate a string', () => {
        const tests: any = [
            { s: 'test', times: 3, expected: 'ttes'},
            { s: 'hello', times: 4, expected: 'ohell' },
            { s: 'world', times: 5, expected: 'world'},
        ]
        tests.forEach((test: any) => {
            assert.equal(_f.leftRotate(test.s, test.times), test.expected)
        })
    })
    it('should create an excerpt', () => {
        const tests: any = [
            { s: 'hello world', expected: 'hello...'},
            { s: 'hi there how', expected: 'hi there...' },
            { s: 'hi hi hi how', expected: 'hi hi hi...'},
        ]
        tests.forEach((test: any) => {
            assert.equal(_f.excerpt(test.s, 10), test.expected)
        })
    })
    it('should reverse a string', () => {
        const tests: any = [
            { s: 'hello world', expected: 'dlrow olleh'},
            { s: 'hi there', expected: 'ereht ih' },
        ]
        tests.forEach((test: any) => {
            assert.equal(_f.reverse(test.s), test.expected)
        })
    })
    it('should reverse words in a string', () => {
        const tests: any = [
            { s: 'hello world', expected: 'world hello'},
            { s: 'hi there', expected: 'there hi' },
        ]
        tests.forEach((test: any) => {
            assert.equal(_f.reverseWords(test.s), test.expected)
        })
    })
    it('should find the first unique character in a string', () => {
        const tests: any = [
            { s: 'aaabbcdc', expected: 'd'},
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
    it('should detect repeating sequences in a string', () => {
        const tests: any = [
            { s: 'abcabcabc', expected: ['abcabcabc'] },
            { s: 'ararbarbarbar', expected: ['arbarbarb'] },
            { s: 'jello mello fello hello hello hello', expected: ['hello hello hello'] },
            { s: 'test', expected: null },
        ]
        tests.forEach((test: any) => {
            assert.deepEqual(_f.getRepeatingSequences(test.s), test.expected)
        })
    })
    it('should detect if a string contains repeating sequences', () => {
        const tests: any = [
            { s: 'abcabcabc', expected: true },
            { s: 'ararbarbarbar', expected: true },
            { s: 'jello mello fello hello hello hello', expected: true },
            { s: 'test', expected: false },
        ]
        tests.forEach((test: any) => {
            assert.deepEqual(_f.hasRepeatingSequences(test.s), test.expected)
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
    it('should compact an array', () => {
        assert.deepEqual(_f.compact([1, 2, null, false, 3, 4, undefined, 5]), [1, 2, 3, 4, 5])
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
        assert.deepEqual(_f.findFirst([{a: 1}, {a: 2}, {a: 1, b: 2}], (item: any) => item.a === 1), {a: 1})
    })
    it('should find the first element in an array matching a condition by ref', () => {
        const items = [{a: 1}, {a: 2}, {a: 1, b: 2}]
        assert.equal(_f.findFirst(items, (item: any) => item.a === 1, true), items[0])
    })
    it('should find the last element in an array matching a condition', () => {
        assert.deepEqual(_f.findLast([{a: 1}, {a: 2}, {a: 1, b: 2}], (item: any) => item.a === 1), {a: 1, b: 2})
    })
    it('should find the first element in an array matching a condition by ref', () => {
        const items = [{a: 1}, {a: 2}, {a: 1, b: 2}]
        assert.equal(_f.findLast(items, (item: any) => item.a === 1, true), items[2])
    })
    it('should compact grab unique values in an array', () => {
        assert.deepEqual(_f.unique([1, 2, 3, 4, 2, 5, 2]), [1, 2, 3, 4, 5])
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
    it('should test if a string contains only alpha-numeric characters', () => {
        assert.deepEqual(_f.isAlphaNumeric('abc123'), true)
        assert.deepEqual(_f.isAlphaNumeric('123-abc', '-'), true)
        assert.deepEqual(_f.isAlphaNumeric('1234'), true)
        assert.deepEqual(_f.isAlphaNumeric('1234>'), false)
    })
    it('should create a range', () => {
        assert.deepEqual(_f.range(1, 9), [1, 2, 3, 4, 5, 6, 7, 8])
        assert.deepEqual(_f.range(0, 10, 2), [0, 2, 4, 6, 8])
        assert.deepEqual(_f.range(0, -20, -2), [0, -2, -4, -6, -8, -10, -12, -14, -16, -18])
        assert.deepEqual(_f.range(0, -20, 1), [])
    })
    it('should create a unique id', () => {
        const id = _f.uniqueId()
        const id2 = _f.uniqueId()
        const id3 = _f.uniqueId()
        assert.notDeepEqual(id, id2)
        assert.notDeepEqual(id2, id3)
    })
    it('should partition an array', () => {
        assert.deepEqual(_f.partition([1, 2, 3, 4, 5, 6], 2), [[1, 2], [3, 4], [5, 6]])
        assert.deepEqual(_f.partition([1, 2, 3, 4, 5, 6], 3), [[1, 2, 3], [4, 5, 6]])
    })
})
