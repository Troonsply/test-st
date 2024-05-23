import {toUpper, toLower, len} from './strings';

describe('toUpper', () => {
  it('should convert to upper case', () => {
    expect(toUpper('hello')).toBe('HELLO')
  })
})
describe('toLower', () => {
  it('should convert to lower case', () => {
    expect(toLower('HELLO')).toBe('hello')
  })
})
describe('len', () => {
  it('should len case', () => {
    expect(len('hello')).toBe(5)
  })
})