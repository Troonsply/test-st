import {multiply} from './multiply';


test('multiply', () => {
    const result = multiply(2, 2);
    expect(result).toBe(4);
})