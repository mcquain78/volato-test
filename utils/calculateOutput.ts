import { Operation, OutputField } from '../types';
import { calculateMean } from './calculateMean';
import { calculateMedian } from './calculateMedian';
import { calculateStandardDeviation } from './calculateStandardDevision';
import { uniqueHash } from './uniqueHash';

export async function calculateOutput(field: OutputField, values: any) {
  const { inputs, operation } = field;

  switch (operation) {
    case Operation.Median:
      return calculateMedian(inputs.map((input) => Number(values[input])));
    case Operation.Mean:
      return calculateMean(inputs.map((input) => Number(values[input])));
    case Operation.SHA256_Hash:
      return await uniqueHash(values[inputs[0]], values[inputs[1]]);
    case Operation.StandardDevision:
      return calculateStandardDeviation(inputs.map((input) => Number(values[input])));
    default:
      return 'Not Implemented';
  }
}
