export const reversedKebabCase = (str: string): string => {
  return str.toLowerCase().split(' ').filter(Boolean).join('-');
};
