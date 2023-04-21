import { useEffect, useState } from 'react';
import { Text } from 'react-native';
import { useFormikContext } from 'formik';
import { OutputField } from '../types';
import { calculateOutput } from '../utils/calculateOutput';

interface OutputProps {
  field: OutputField;
}

export default function Output(props: OutputProps) {
  const { field } = props;
  const { values } = useFormikContext();

  const [value, setValue] = useState<string | number>();

  useEffect(() => {
    calculateOutput(field, values).then(setValue);
  }, [field, values]);

  return (
    <Text>
      {field.label}: {value}
    </Text>
  );
}
