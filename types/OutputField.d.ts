import { DataType } from './DataType';
import { Operation } from './Operation';

export type OutputField = {
  dataType: DataType;
  inputs: Array<string>; // Array of InputField names
  label: string;
  name: string;
  operation: Operation;
};
