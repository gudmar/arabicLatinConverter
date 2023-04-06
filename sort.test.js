import { sortNumbers } from "./sort.js";

describe('Testing sortNumbers', () => {
    it('Should return null when given null or undefined or not an array', () => {
        const notArrays = [
            {}, null, undefined, 1, true, Symbol(),
        ]
        const results = notArrays.map((val) => sortNumbers(val));
        const isEveryNull = results.every(item => item === null);
        expect(isEveryNull).toBeTruthy();
    });
    it('Should return [] when given []', () => {
        const result = sortNumbers([]);
        expect(result).toEqual([]);
    })
    it('Should return [0] when given [0]', () => {
        const result = sortNumbers([0]);
        expect(result).toEqual([0]);
    })
    it('Should return null when given array with not a number', () => {
        const notANumberArrays = [
            [0, 3, 2, true],
            [0, 3, 2, Symbol()],
            [0, 3, 2, []],
            [0, 3, 2, null]
        ]
        const results = notANumberArrays.map(arr => sortNumbers(arr));
        const isEveryNull = results.every(item => item === null);
        expect(isEveryNull).toBeTruthy();
    })
    it('Should return [1, 5] if given [1, 5]', () => {
        const result = sortNumbers([1, 5]);
        expect(result).toEqual([1, 5])
    })
    it('Should return [1,5] if given [5,1]', () => {
        const result = sortNumbers([5, 1]);
        expect(result).toEqual([1, 5])
    })
    it('Should return [1, 5, 6] if given [6, 5, 1]', () => {
        const result = sortNumbers([6, 5, 1]);
        expect(result).toEqual([1, 5, 6])
    })
    it('Should return [1, 5, 6] if given [6, 1, 5]', () => {
        const result = sortNumbers([6, 1, 5]);
        expect(result).toEqual([1, 5, 6])
    })
    it('Should return [9, 1, 7, 5, 0, 6] if given [0, 1, 5, 6, 7, 9]', () => {
        const result = sortNumbers([9, 1, 7, 5, 0, 6]);
        expect(result).toEqual([0, 1, 5, 6, 7, 9])
    })

})