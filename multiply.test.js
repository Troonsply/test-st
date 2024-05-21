import {multiply} from './multiply';

describe('multiply', () => {
    it('should multiply positive numbers', () => {
        //AAA - arrange, act, assert
        const expectedResult = 4;
        const actualResult = multiply(2, 2);
        expect(actualResult).toBe(expectedResult);
    });

    it('should multiply negative numbers', () => {
        const result = multiply(-2, -2);
        expect(result).toBe(4);
    })

    it('should multiply negative and positive numbers', () => {
        const result = multiply(-2, 2);
        expect(result).toBe(-4);
    })
})
