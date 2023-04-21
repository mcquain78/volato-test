import { calculateMean } from './calculateMean';

export function calculateStandardDeviation(numbers: number[]): number {
  const n = numbers.length;
  const mean = calculateMean(numbers);
  const variance = numbers.reduce((acc, curr) => acc + Math.pow(curr - mean, 2), 0) / n;
  const standardDeviation = Math.sqrt(variance);
  return standardDeviation;
}
