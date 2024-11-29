const capitalize = (input: string): string =>
  input[0].toUpperCase() + input.slice(1);

const isInvalidInput = (str: any): boolean => {
  const isNumeric = /^\d+$/;
  return typeof str !== 'string' || str === '' || isNumeric.test(str);

};
const transformHyphenSeparated = (str: string): string => {
  const wordsArray = str.split('-');
  if (wordsArray.length === 1) return capitalize(str);
  return wordsArray.map((word) => capitalize(word.trim())).join(' ');
};

export const toKebabCase = (input: string): string => {
  if (isInvalidInput(input)) return '';
  return capitalize(input) === input ? input : transformHyphenSeparated(input);
};


// REVERSED VERSION