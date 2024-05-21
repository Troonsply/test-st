import {multiply} from './multiply';

describe('multiply', () => {
    it('should multiply positive numbers', () => {
        //AAA - arrange, act, assert
        const expectedResult = 4;
        const actualResult = multiply(2, 2);
        expect(actualResult).toBe(expectedResult);
        expect({a:1}).toEqual({a:1});
        expect([1,2,3]).toHaveLength(3);
        expect([1,2,3]).toContain(3);
        expect([1,2,3]).not.toContain(10);
        expect(undefined).toBeUndefined();
        expect(null).toBeNull();
        expect(null).toBeFalsy();
        expect(actualResult).toBeDefined();
        expect(actualResult).toBeTruthy();
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
