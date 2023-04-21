export function calculateMedian(numbers: number[]): number {
  const sortedNumbers = numbers.sort((a, b) => a - b);
  const middleIndex = Math.floor(numbers.length / 2);

  if (numbers.length % 2 === 0) {
    const left = sortedNumbers[middleIndex - 1];
    const right = sortedNumbers[middleIndex];
    return (left + right) / 2;
  } else {
    return sortedNumbers[middleIndex];
  }
}
