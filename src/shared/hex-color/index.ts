export const hexadecimalColor = () => {
  const randomNumber = Math.random();
  const hex = 0xffffff;
  const code = parseInt(String(randomNumber * hex))
    .toString(16)
    .padStart(6, '0');

  return `#${code}`;
};
