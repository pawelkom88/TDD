export const reversedKebabCase = (str: string): string => {
  return str
    .split(' ')
    .filter((s) => s.trim())
    .join('-')
    .toLowerCase();
};
