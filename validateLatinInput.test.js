import { validateLatinInput, errors } from './validateLatinInput';


const testCases = [
    {input: 'F', expected: {result: false, error: errors.ILLEGAL_SYMBOL.message}},
    {input: 'MDCXVI', expected: {result: true}},
    {input: 'IIII', expected: {result: false, error: errors.TOO_MANY_REPETITIONS.message}},
    {input: 'XXXX', expected: {result: false, error: errors.TOO_MANY_REPETITIONS.message}},
    {input: 'CCCC', expected: {result: false, error: errors.TOO_MANY_REPETITIONS.message}},
    {input: 'LL', expected: {result: false, error: errors.TOO_MANY_REPETITIONS_LDV.message}},
    {input: 'DD', expected: {result: false, error: errors.TOO_MANY_REPETITIONS_LDV.message}},
    {input: 'DCD', expected: {result: false, error: errors.TOO_MANY_REPETITIONS_LDV.message}},
    {input: 'LXL', expected: {result: false, error: errors.TOO_MANY_REPETITIONS_LDV.message}},
    {input: 'VV', expected: {result: false, error: errors.TOO_MANY_REPETITIONS_LDV.message}},
    {input: 'VIV', expected: {result: false, error: errors.TOO_MANY_REPETITIONS_LDV.message}},
    //illegal order
    {input: 'IIV', expected: {result: false, error: errors.REPETITIONS_BEFORE_BIGGER.message}},
    {input: 'IIX', expected: {result: false, error: errors.REPETITIONS_BEFORE_BIGGER.message}},
    {input: 'XXL', expected: {result: false, error: errors.REPETITIONS_BEFORE_BIGGER.message}},
    {input: 'XXC', expected: {result: false, error: errors.REPETITIONS_BEFORE_BIGGER.message}},
    {input: 'CCD', expected: {result: false, error: errors.REPETITIONS_BEFORE_BIGGER.message}},
    {input: 'CCM', expected: {result: false, error: errors.REPETITIONS_BEFORE_BIGGER.message}},
    // illegal neighbours
    {input: 'IL', expected: {result: false, error: errors.ILLEGAL_NEIGHBOUR.message}},
    {input: 'IC', expected: {result: false, error: errors.ILLEGAL_NEIGHBOUR.message}},
    {input: 'ID', expected: {result: false, error: errors.ILLEGAL_NEIGHBOUR.message}},
    {input: 'IM', expected: {result: false, error: errors.ILLEGAL_NEIGHBOUR.message}},
    {input: 'XD', expected: {result: false, error: errors.ILLEGAL_NEIGHBOUR.message}},
    {input: 'XM', expected: {result: false, error: errors.ILLEGAL_NEIGHBOUR.message}},
    {input: 'DM', expected: {result: false, error: errors.ILLEGAL_NEIGHBOUR.message}},
    {input: 'LC', expected: {result: false, error: errors.ILLEGAL_NEIGHBOUR.message}},
    {input: 'LD', expected: {result: false, error: errors.ILLEGAL_NEIGHBOUR.message}},
    {input: 'LM', expected: {result: false, error: errors.ILLEGAL_NEIGHBOUR.message}},
    // illegal before
    {input: 'IXL', expected: {result: false, error: errors.ILLEGAL_BEFORE.message}},
    {input: 'IXC', expected: {result: false, error: errors.ILLEGAL_BEFORE.message}},
    {input: 'IXCD', expected: {result: false, error: errors.ILLEGAL_BEFORE.message}},
    {input: 'IXCM', expected: {result: false, error: errors.ILLEGAL_BEFORE.message}},

    {input: 'XCD', expected: {result: false, error: errors.ILLEGAL_BEFORE.message}},
    {input: 'XCM', expected: {result: false, error: errors.ILLEGAL_BEFORE.message}},
    {input: 'DCM', expected: {result: false, error: errors.ILLEGAL_BEFORE.message}},
    {input: 'MDCM', expected: {result: false, error: errors.ILLEGAL_BEFORE.message}},
    {input: 'MCCM', expected: {result: false, error: errors.REPETITIONS_BEFORE_BIGGER.message}},
]
describe('Validating latin input', () => {
    const run = (({input, expected}) => {
        it(`Should return ${expected.result} in case of input: ${input}`, () => {
            const result = validateLatinInput(input);
            expect(result).toEqual(expected);
        })
    })
    testCases.forEach(testCase => run(testCase))
})