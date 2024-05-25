import {filterArray} from '../filterArray';
import {basketWithNoQuantity, filteredBasketWithQuantityOnly} from "../__mocks__/basket.mock";

const cb = jest.fn();
const logSpy = jest.spyOn(console, 'log');

describe('filterArray', () => {
    afterEach(() => {
        jest.clearAllMocks()
    })
    it('should not invoke callback when an array is empty', () => {
        filterArray([], cb);
        expect(cb).not.toHaveBeenCalled();
    })
    it('should invoke provided function as many times as the length of array ', () => {
        const array = [1, 2, 3];
        filterArray(array, cb);
        expect(cb).toHaveBeenCalledTimes(array.length);
    })
    it('should filter an array using provided predicate', () => {
        const hasQuantity = (item) => item.quantity > 0;
        const filtered = filterArray(basketWithNoQuantity, hasQuantity);
        expect(filtered).toEqual(filteredBasketWithQuantityOnly);
    })
    it('should not invoke callback when an array is empty', () => {
        filterArray([], cb);
        expect(cb).not.toHaveBeenCalled();
        expect(logSpy).not.toHaveBeenCalled();
    })
    it('should filter an array using provided predicate', () => {
        const hasQuantity = (item) => item.quantity > 0;
        const filtered = filterArray(basketWithNoQuantity, hasQuantity);
        expect(filtered).toEqual(filteredBasketWithQuantityOnly);
        expect(logSpy).toHaveBeenCalledTimes(basketWithNoQuantity.length)
    })
})