import { DataModel, DataType, Operation } from '../types';

export const dataModels: Array<DataModel> = [
  {
    label: 'Data Model 1',
    name: 'dataModel1',
    inputs: [
      {
        label: 'Field 1',
        name: 'field1',
        dataType: DataType.Text,
      },
      {
        label: 'Field 2',
        name: 'field2',
        dataType: DataType.Text,
      },
    ],
    outputs: [
      {
        dataType: DataType.Text,
        inputs: ['field1', 'field2'],
        label: 'SHA256 Hash',
        name: 'sha256Hash',
        operation: Operation.SHA256_Hash,
      },
    ],
  },
  {
    label: 'Data Model 2',
    name: 'dataModel2',
    inputs: [
      {
        label: 'Field 1',
        name: 'field1',
        dataType: DataType.Number,
      },
      {
        label: 'Field 2',
        name: 'field2',
        dataType: DataType.Number,
      },
      {
        label: 'Field 3',
        name: 'field3',
        dataType: DataType.Number,
      },
      {
        label: 'Field 4',
        name: 'field4',
        dataType: DataType.Number,
      },
      {
        label: 'Field 5',
        name: 'field5',
        dataType: DataType.Number,
      },
      {
        label: 'Field 6',
        name: 'field6',
        dataType: DataType.Number,
      },
      {
        label: 'Field 7',
        name: 'field7',
        dataType: DataType.Number,
      },
      {
        label: 'Field 8',
        name: 'field8',
        dataType: DataType.Number,
      },
      {
        label: 'Field 9',
        name: 'field9',
        dataType: DataType.Number,
      },
      {
        label: 'Field 10',
        name: 'field10',
        dataType: DataType.Number,
      },
    ],
    outputs: [
      {
        label: 'Mean',
        name: 'mean',
        dataType: DataType.Text,
        inputs: ['field1', 'field2', 'field3', 'field4', 'field5', 'field6', 'field7', 'field8', 'field9', 'field10'],
        operation: Operation.Mean,
      },
      {
        label: 'Median',
        name: 'median',
        dataType: DataType.Text,
        inputs: ['field1', 'field2', 'field3', 'field4', 'field5', 'field6', 'field7', 'field8', 'field9', 'field10'],
        operation: Operation.Median,
      },
      {
        label: 'Standard Devision',
        name: 'standardDevision',
        dataType: DataType.Text,
        inputs: ['field1', 'field2', 'field3', 'field4', 'field5', 'field6', 'field7', 'field8', 'field9', 'field10'],
        operation: Operation.StandardDevision,
      },
    ],
  },
];
