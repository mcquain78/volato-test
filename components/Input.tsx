import { Text, TextInput, View } from 'react-native';
import { useFormikContext } from 'formik';
import { DataType, InputField } from '../types';

interface InputProps {
  field: InputField;
}

export default function Input(props: InputProps) {
  const { field } = props;
  const { values, setFieldValue } = useFormikContext();

  const value = values[field.name] || '';

  const handleChange = (text: string) => {
    if (field.dataType === DataType.Number) {
      setFieldValue(field.name, Number(text));
    } else {
      setFieldValue(field.name, text);
    }
  };

  return (
    <View>
      <Text>{field.label}</Text>
      <TextInput
        keyboardType={field.dataType === DataType.Number ? 'numeric' : 'default'}
        onChangeText={handleChange}
        value={value}
      />
    </View>
  );
}
