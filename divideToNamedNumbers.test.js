import { divideToNamedNumbers } from "./arabianToRoman";

function getExpected(obj) {
    const m = new Map();
    Object.entries(obj).forEach(([point, value]) => {
        const key = parseInt(point.slice(1));
        m.set(key, value || 0);
    })
    return m;
}

describe('Divide to named numbers', () => {
    it('Should process 1', () => {
        const input = 1;
        const expected = getExpected({ _1: 1 });
        const result = divideToNamedNumbers(input);
        expect(result).toEqual(expected);
    })
    it('Should process 2', () => {
        const input = 2;
        const expected = getExpected({ _1: 2 });
        const result = divideToNamedNumbers(input);
        expect(result).toEqual(expected);
    })
    it('Should process 3', () => {
        const input = 3;
        const expected = getExpected({ _1: 3 });
        const result = divideToNamedNumbers(input);
        expect(result).toEqual(expected);
    })
    it('Should process 5', () => {
        const input = 5;
        const expected = getExpected({ _5: 1 });
        const result = divideToNamedNumbers(input);
        expect(result).toEqual(expected);
    })
    it('Should process 6', () => {
        const input = 6;
        const expected = getExpected({ _1: 1, _5: 1 });
        const result = divideToNamedNumbers(input);
        expect(result).toEqual(expected);
    })
    it('Should process 9', () => {
        const input = 9;
        const expected = getExpected({ _9: 1 });
        const result = divideToNamedNumbers(input);
        expect(result).toEqual(expected);
    })
    it('Should process 29', () => {
        const input = 29;
        const expected = getExpected({ _10: 2, _9: 1 });
        const result = divideToNamedNumbers(input);
        expect(result).toEqual(expected);
    })
    it('Should process 4549', () => {
        const input = 4549;
        const expected = getExpected({
            _1000: 4,
            _500: 1, 
            _40: 1,
            _9: 1,
        });
        const result = divideToNamedNumbers(input);
        expect(result).toEqual(expected);
    })
})