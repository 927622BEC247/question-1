export const calculateAverage = (numbers: number[]) => {
  if (numbers.length === 0) return 0;
  const total = numbers.reduce((acc, n) => acc + n, 0);
  return total / numbers.length;
};
