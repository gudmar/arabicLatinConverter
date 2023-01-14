import { latinToArabic } from "./LatinToArabic";

const testCases = [
    { input: 'I',    expected: 1 },
    { input: 'II',    expected: 2 },
    { input: 'III',    expected: 3 },
    { input: 'IV',    expected: 4 },
    { input: 'V',    expected: 5 },
    { input: 'VI',    expected: 6 },
    { input: 'VIII',    expected: 8 },
    { input: 'IX',    expected: 9 },
    { input: 'XI',    expected: 11 },
    { input: 'XIV',    expected: 14 },
    { input: 'XIX',    expected: 19 },
    { input: 'XXXIX',    expected: 39 },
    { input: 'XLIII',    expected: 43 },
    { input: 'LV',    expected: 55 },
    { input: 'LXXX',    expected: 80 },
    { input: 'XC',    expected: 90 },
    { input: 'CI',    expected: 101 },
    { input: 'CLX',    expected: 160 },
    { input: 'CCC',    expected: 300 },
    { input: 'CD',    expected: 400 },
    { input: 'DC',    expected: 600 },
    { input: 'DXC',    expected: 590 },
    { input: 'CM',    expected: 900 },
    { input: 'MCMLXXXIV',    expected: 1984 },
    { input: 'MMMMMDCCCXCIX',    expected: 5899 },
]

describe('Latin to arabic test', () => {
    const run = ({input, expected}) => (
        it(`Should return ${expected} in case ${input} is given`, () => {
            const result = latinToArabic(input);
            expect(result).toBe(expected);
        })
    )
    testCases.forEach(testCase => run(testCase))
})


