// empty string untouched ✅
// single capitalized word is also untouched -> title ✅
// single lowercase word is converted to Title -> title ✅
// words separated by - are converted Paragraph title -> paragraph-title  ✅
// spaces are filtered Paragraph         Title -> paragraph-title  ✅

import { reversedKebabCase } from './reversedKebabCase';

describe('String Transformation Tests', () => {
  it('should leave an empty string untouched', () => {
    expect(reversedKebabCase('')).toBe('');
  });

  it('should leave a single capitalized word untouched: title', () => {
    expect(reversedKebabCase('pawel')).toBe('pawel');
  });

  it('should convert a single lowercase word to Title: title', () => {
    expect(reversedKebabCase('Pawel')).toBe('pawel');
  });

  it('should convert words separated by space to paragraph-title', () => {
    expect(reversedKebabCase('Pawel Mistrz')).toBe('pawel-mistrz');
  });

  it('should filter spaces to convert Paragraph    Title to paragraph-title', () => {
    expect(reversedKebabCase('Pawel    Mistrz')).toBe('pawel-mistrz');
  });
});
