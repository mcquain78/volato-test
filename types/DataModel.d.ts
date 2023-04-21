import type { Field } from './Field';
import type { InputField } from './InputField';
import type { OutputField } from './OutputField';

export type DataModel = {
  label: string;
  name: string; // TODO: use name to reference DataModel result in other DataModel
  inputs: Array<InputField>;
  outputs: Array<OutputField>;
};
