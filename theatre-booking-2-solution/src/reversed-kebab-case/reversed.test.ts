// empty string untouched ✅
// single capitalized word is also untouched -> title ✅
// single lowercase word is converted to Title -> title ✅
// words separated by - are converted Paragraph title -> paragraph-title  ✅
// spaces are filtered Paragraph         Title -> paragraph-title  ✅

import { reversedKebabCase } from './reversedKebabCase';

describe('String Transformation Tests', () => {
  const testCases = [
    {
      input: '',
      expected: '',
      description: 'should leave an empty string untouched',
    },
    {
      input: 'pawel',
      expected: 'pawel',
      description: 'should leave a single capitalized word untouched: title',
    },
    {
      input: 'Pawel',
      expected: 'pawel',
      description: 'should convert a single lowercase word to Title: title',
    },
    {
      input: 'Pawel Mistrz',
      expected: 'pawel-mistrz',
      description: 'should convert words separated by space to paragraph-title',
    },
    {
      input: 'Pawel    Mistrz',
      expected: 'pawel-mistrz',
      description:
        'should filter spaces to convert Paragraph    Title to paragraph-title',
    },
  ];

  it.each(testCases)('$description', ({ input, expected }) => {
    expect(reversedKebabCase(input)).toBe(expected);
  });
});
