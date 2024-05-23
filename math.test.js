import {divide, sum, multiply} from './math';

describe('math', () => {
    describe.skip('divide', () => {
        it.each([
            {inputA: 4, inputB:2, exepted: 2},
            {inputA: 4, inputB: 0, exepted: Infinity},
            {inputA: 4, inputB: -2, exepted: -2}
        ])('should $inputA divide to inputB equal to $exepted', ({inputA, inputB, exepted}) => {
            //AAA - arrange, act, assert
            const actualResult = divide(inputA, inputB);
            expect(actualResult).toBe(exepted);
        });
    });
    describe.skip('multiply', () => {
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
    });
    describe.skip('sum', () => {
        it('should add sum positive numbers', () => {
            //AAA - arrange, act, assert
            const expectedResult = 4;
            const actualResult = sum(2, 2);
            expect(actualResult).toBe(expectedResult);
        });
    });
})
