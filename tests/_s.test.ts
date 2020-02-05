import assert from 'assert'
const _s = require('../_s')._s

describe('_s test suite', () => {
    it('should format a string to PascalCase', () => {
        const tests: any = [
            { s: 'hello_world', expected: 'HelloWorld' },
            { s: 'hi', expected: 'Hi' },
            { s: 'pascal_case_is_cool', expected: 'PascalCaseIsCool' },
        ]
        tests.forEach((test: any) => {
            assert.equal(_s.pascalCase(test.s), test.expected)
        })
    })
    it('should format a string to camelCase', () => {
        const tests: any = [
            { s: 'hello_world', expected: 'helloWorld' },
            { s: 'hi', expected: 'hi' },
            { s: 'camel_case_is_cooler', expected: 'camelCaseIsCooler' },
        ]
        tests.forEach((test: any) => {
            assert.equal(_s.camelCase(test.s), test.expected)
        })
    })
    it('should convert new lines to br tags', () => {
        const tests: any = [
            { s: 'a\nb\nc', expected: 'a<br />b<br />c' },
            { s: 'hello\nthere', expected: 'hello<br />there' },
            { s: 'hello', expected: 'hello' },
        ]
        tests.forEach((test: any) => {
            assert.equal(_s.nl2br(test.s), test.expected)
        })
    })
    it('should convert break tags to new lines', () => {
        const tests: any = [
            { s: 'a<br>b<br />c', expected: 'a\nb\nc' },
            { s: 'hello<BR>there', expected: 'hello\nthere' },
            { s: 'hello<BR  />there', expected: 'hello\nthere' },
        ]
        tests.forEach((test: any) => {
            assert.equal(_s.br2nl(test.s), test.expected)
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
            assert.deepEqual(_s.splitByLength(test.s, 3), test.expected)
        })
    })
    it('should upper case words', () => {
        const tests: any = [
            { s: 'hello there', expected: 'Hello There'},
            { s: 'hello World', expected: 'Hello World' },
            { s: 'who are you', expected: 'Who Are You' },
        ]
        tests.forEach((test: any) => {
            assert.equal(_s.upperCaseWords(test.s), test.expected)
        })
    })
    it('should upper case the first letter', () => {
        const tests: any = [
            { s: 'hello there', expected: 'Hello there'},
            { s: 'hello World', expected: 'Hello World' },
            { s: 'who are you', expected: 'Who are you' },
        ]
        tests.forEach((test: any) => {
            assert.equal(_s.upperCaseFirst(test.s), test.expected)
        })
    })
    it('should upper case the first letter', () => {
        const tests: any = [
            { s: 'hello there. how are you? i am fine.', expected: 'Hello there. How are you? I am fine.'},
            { s: 'hello World. are you doing okay?', expected: 'Hello World. Are you doing okay?' },
            { s: 'i am fine! hurray.', expected: 'I am fine! Hurray.' },
        ]
        tests.forEach((test: any) => {
            assert.equal(_s.upperCaseFirstInSentence(test.s), test.expected)
        })
    })
    it('should decode html tags', () => {
        const tests: any = [
            { s: '<b>Test</b>', expected: '&lt;b&gt;Test&lt;/b&gt;'},
            { s: 'hello', expected: 'hello' },
            { s: '<i>testing</i><br>', expected: '&lt;i&gt;testing&lt;/i&gt;&lt;br&gt;'},
        ]
        tests.forEach((test: any) => {
            assert.equal(_s.decodeHTML(test.s), test.expected)
        })
    })
    it('should convert a string to only alphabetical characters', () => {
        const tests: any = [
            { s: '<b>Test</b>', expected: 'bTestb'},
            { s: 'hello.49812', expected: 'hello' },
            { s: 'br417eak', expected: 'break'},
        ]
        tests.forEach((test: any) => {
            assert.equal(_s.toAlpha(test.s), test.expected)
        })
    })
    it('should convert a string to only alphabetical characters with exceptions', () => {
        const tests: any = [
            { s: 'Testing. One! Two?33', expected: 'Testing.One!Two?'},
            { s: 'Boom.==', expected: 'Boom.' },
            { s: 'Bam boo', expected: 'Bamboo'},
        ]
        tests.forEach((test: any) => {
            assert.equal(_s.toAlpha(test.s, '.!?'), test.expected)
        })
    })
    it('should convert a string to only number characters', () => {
        const tests: any = [
            { s: '<b>Test</b>123', expected: '123'},
            { s: 'hello.49812', expected: '49812' },
            { s: 'br417eak', expected: '417'},
        ]
        tests.forEach((test: any) => {
            assert.equal(_s.toNumeric(test.s), test.expected)
        })
    })
    it('should convert a string to only alphabetical characters with exceptions', () => {
        const tests: any = [
            { s: 'Testing. One! Two?33', expected: '33'},
            { s: '360-555-6789', expected: '360-555-6789' },
            { s: '902 10', expected: '90210'},
        ]
        tests.forEach((test: any) => {
            assert.equal(_s.toNumeric(test.s, '-'), test.expected)
        })
    })
    it('should convert a string to binary', () => {
        const tests: any = [
            { s: 'test', expected: '01110100011001010111001101110100'},
            { s: 'hello', expected: '0110100001100101011011000110110001101111' },
            { s: 'world', expected: '0111011101101111011100100110110001100100'},
        ]
        tests.forEach((test: any) => {
            assert.equal(_s.toBinary(test.s), test.expected)
        })
    })
    it('should convert a string from binary', () => {
        const tests: any = [
            { expected: 'test', s: '01110100011001010111001101110100'},
            { expected: 'hello', s: '0110100001100101011011000110110001101111' },
            { expected: 'world', s: '0111011101101111011100100110110001100100'},
        ]
        tests.forEach((test: any) => {
            assert.equal(_s.fromBinary(test.s), test.expected)
        })
    })
    it('should convert a string to hex', () => {
        const tests: any = [
            { s: 'test', expected: '74657374'},
            { s: 'hello', expected: '68656c6c6f' },
            { s: 'world', expected: '776f726c64'},
        ]
        tests.forEach((test: any) => {
            assert.equal(_s.toHex(test.s), test.expected)
        })
    })
    it('should convert a string from hex', () => {
        const tests: any = [
            { expected: 'test', s: '74657374'},
            { expected: 'hello', s: '68656C6C6F' },
            { expected: 'world', s: '776F726C64'},
        ]
        tests.forEach((test: any) => {
            assert.equal(_s.fromHex(test.s), test.expected)
        })
    })
    it('should convert a string to base64', () => {
        const tests: any = [
            { s: 'test', expected: 'dGVzdA=='},
            { s: 'hello', expected: 'aGVsbG8=' },
            { s: 'world', expected: 'd29ybGQ='},
        ]
        tests.forEach((test: any) => {
            assert.equal(_s.toBase64(test.s), test.expected)
        })
    })
    it('should convert a string from base64', () => {
        const tests: any = [
            { expected: 'test', s: 'dGVzdA=='},
            { expected: 'hello', s: 'aGVsbG8=' },
            { expected: 'world', s: 'd29ybGQ='},
        ]
        tests.forEach((test: any) => {
            assert.equal(_s.fromBase64(test.s), test.expected)
        })
    })
    it('should right rotate a string', () => {
        const tests: any = [
            { s: 'test', times: 3, expected: 'estt'},
            { s: 'hello', times: 3, expected: 'llohe' },
            { s: 'world', times: 7, expected: 'ldwor'},
        ]
        tests.forEach((test: any) => {
            assert.equal(_s.rightRotate(test.s, test.times), test.expected)
        })
    })
    it('should right shift a string', () => {
        const tests: any = [
            { s: '1231', times: 3, expected: '0001'},
            { s: '54321', times: 4, expected: '00005' },
            { s: '1world', times: 5, expected: '000000'},
        ]
        tests.forEach((test: any) => {
            assert.equal(_s.rightShift(test.s, test.times), test.expected)
        })
    })
})
