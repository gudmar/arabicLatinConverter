import { arabian2Latin } from './arabianToRoman.js'

const testCases = [
    {input: 49,    expected: 'XLIX' },
    {input: 50,    expected: 'L' },
    {input: 60,    expected: 'LX' },
    {input: 89,    expected: 'LXXXIX' },
    {input: 90,    expected: 'XC' },
    {input: 91,    expected: 'XCI' },
    {input: 99,    expected: 'XCIX' },
    {input: 100,   expected: 'C'    },
    {input: 101,    expected: 'CI' },
    {input: 140,    expected: 'CXL' },
    {input: 150,    expected: 'CL' },
    {input: 160,    expected: 'CLX' },
    {input: 200,    expected: 'CC' },
    {input: 300,    expected: 'CCC' },
    {input: 400,    expected: 'CD' },
    {input: 490,    expected: 'CDXC' },
    {input: 500,    expected: 'D' },
    {input: 900,    expected: 'CM' },
    {input: 1000,    expected: 'M' },
    {input: 6000,    expected: 'MMMMMM' },
    {input: 1984,    expected: 'MCMLXXXIV' },
]

describe('Arabian to latin number converter: TDD', () => {

    it('Should process 1 to I', () => {
        const input = 1;
        const expected = 'I';
        const result = arabian2Latin(input);
        expect(result).toBe(expected);
    })
    it('Should process 2 to II', () => {
        const input = 2;
        const expected = 'II';
        const result = arabian2Latin(input);
        expect(result).toBe(expected);
    })
    it('Should process 3 to III', () => {
        const input = 3;
        const expected = 'III';
        const result = arabian2Latin(input);
        expect(result).toBe(expected);
    })
    it('Should process 4 to IV', () => {
        const input = 4;
        const expected = 'IV';
        const result = arabian2Latin(input);
        expect(result).toBe(expected);
    })
    it('Should process 5 to V', () => {
        const input = 5;
        const expected = 'V';
        const result = arabian2Latin(input);
        expect(result).toBe(expected);
    })
    it('Should process 6 to VI', () => {
        const input = 6;
        const expected = 'VI';
        const result = arabian2Latin(input);
        expect(result).toBe(expected);
    })
    it('Should process 7 to VII', () => {
        const input = 7;
        const expected = 'VII';
        const result = arabian2Latin(input);
        expect(result).toBe(expected);
    })
    it('Should process 8 to VIII', () => {
        const input = 8;
        const expected = 'VIII';
        const result = arabian2Latin(input);
        expect(result).toBe(expected);
    })
    it('Should process 9 to IX', () => {
        const input = 9;
        const expected = 'IX';
        const result = arabian2Latin(input);
        expect(result).toBe(expected);
    })
    it('Should process 10 to X', () => {
        const input = 10;
        const expected = 'X';
        const result = arabian2Latin(input);
        expect(result).toBe(expected);
    })
    it('Should process 11 to XI', () => {
        const input = 11;
        const expected = 'XI';
        const result = arabian2Latin(input);
        expect(result).toBe(expected);
    })
    it('Should process 12 to XII', () => {
        const input = 12;
        const expected = 'XII';
        const result = arabian2Latin(input);
        expect(result).toBe(expected);
    })
    it('Should process 14 to XIV', () => {
        const input = 14;
        const expected = 'XIV';
        const result = arabian2Latin(input);
        expect(result).toBe(expected);
    })
    it('Should process 15 to XV', () => {
        const input = 15;
        const expected = 'XV';
        const result = arabian2Latin(input);
        expect(result).toBe(expected);
    })
    it('Should process 16 to XVI', () => {
        const input = 16;
        const expected = 'XVI';
        const result = arabian2Latin(input);
        expect(result).toBe(expected);
    })
    it('Should process 19 to XIX', () => {
        const input = 19;
        const expected = 'XIX';
        const result = arabian2Latin(input);
        expect(result).toBe(expected);
    })
    it('Should process 20 to XX', () => {
        const input = 20;
        const expected = 'XX';
        const result = arabian2Latin(input);
        expect(result).toBe(expected);
    })
    it('Should process 2i to XXI', () => {
        const input = 21;
        const expected = 'XXI';
        const result = arabian2Latin(input);
        expect(result).toBe(expected);
    })
    it('Should process 24 to XXIV', () => {
        const input = 24;
        const expected = 'XXIV';
        const result = arabian2Latin(input);
        expect(result).toBe(expected);
    })
    it('Should process 25 to XXV', () => {
        const input = 25;
        const expected = 'XXV';
        const result = arabian2Latin(input);
        expect(result).toBe(expected);
    })
    it('Should process 26 to XXVI', () => {
        const input = 26;
        const expected = 'XXVI';
        const result = arabian2Latin(input);
        expect(result).toBe(expected);
    })
    it('Should process 29 to XXIX', () => {
        const input = 29;
        const expected = 'XXIX';
        const result = arabian2Latin(input);
        expect(result).toBe(expected);
    })
    it('Should process 30 to XXX', () => {
        const input = 30;
        const expected = 'XXX';
        const result = arabian2Latin(input);
        expect(result).toBe(expected);
    })
    it('Should process 31 to XXXI', () => {
        const input = 31;
        const expected = 'XXXI';
        const result = arabian2Latin(input);
        expect(result).toBe(expected);
    })
    it('Should process 39 to XXXIX', () => {
        const input = 39;
        const expected = 'XXXIX';
        const result = arabian2Latin(input);
        expect(result).toBe(expected);
    })
    it('Should process 40 to XL', () => {
        const input = 40;
        const expected = 'XL';
        const result = arabian2Latin(input);
        expect(result).toBe(expected);
    })
    it('Should process 41 to XLI', () => {
        const input = 41;
        const expected = 'XLI';
        const result = arabian2Latin(input);
        expect(result).toBe(expected);
    })
    it('Should process 42 to XLII', () => {
        const input = 42;
        const expected = 'XLII';
        const result = arabian2Latin(input);
        expect(result).toBe(expected);
    })
    it('Should process 44 to ', () => {
        const input = 44;
        const expected = 'XLIV';
        const result = arabian2Latin(input);
        expect(result).toBe(expected);
    })

// Acceptance tests

    const run = ({ input, expected }) => 
    (it(`Should process ${input} to ${expected}`, () => {
        const result = arabian2Latin(input);
        expect(result).toBe(expected)
    }))

    testCases.forEach( testCase => run(testCase))

})