import { Picker } from '@react-native-picker/picker';

interface DataModelPickerProps {
  options: Array<{ label: string; value: string }>;
  value: string;
  onChange: (name: string) => void;
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
