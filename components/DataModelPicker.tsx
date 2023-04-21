import { Picker } from '@react-native-picker/picker';
import { DataModel } from '../types';

interface DataModelPickerProps {
  options: Array<{ label: string; value: DataModel }>;
  value: DataModel;
  onChange: (value: DataModel) => void;
}

export default function DataModelPicker(props: DataModelPickerProps) {
  const { options, value, onChange } = props;

  return (
    <Picker selectedValue={value} onValueChange={onChange}>
      {options.map((option) => (
        <Picker.Item key={option.label} label={option.label} value={option.value} />
      ))}
    </Picker>
  );
}
