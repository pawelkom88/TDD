// empty string untouched ✅
// single capitalized word is also untouched -> Title ✅
// single lowercase word is converted to title title -> Title ✅
// words separated by - are converted paragraph-title -> Paragraph title ✅
// spaces are filtered paragraph - title -> Paragraph Title ✅
// what if input is not a string ? or is it string number ?

import { toKebabCase } from './kebab-case';

describe('toKebabCase function', () => {
  it.each([
    ['', ''],
    ['Warsaw', 'Warsaw'],
    ['warsaw', 'Warsaw'],
    ['paragraph-title', 'Paragraph Title'],
    ['paragraph - title', 'Paragraph Title'],
    [1, ''],
    ['1', '']
  ])('should transform "%s" to "%s"', (input, expected) => {
    // @ts-ignore
    expect(toKebabCase(input)).toBe(expected);
  });
});
