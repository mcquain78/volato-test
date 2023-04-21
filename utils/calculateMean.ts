export function calculateMean(numbers: number[]): number {
  if (numbers.length === 0) {
    throw new Error('Cannot calculate mean of an empty array.');
  }
  const sum = numbers.reduce((acc, num) => acc + num, 0);
  const mean = sum / numbers.length;
  return mean;
}
