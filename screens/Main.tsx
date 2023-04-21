import { useMemo, useState } from 'react';
import { ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Formik, Form } from 'formik';

import DataModelPicker from '../components/DataModelPicker';
import Input from '../components/Input';
import Output from '../components/Output';

import { DataModel } from '../types';
import { dataModels } from '../config/dummy_models';

export default function Main() {
  const [dataModel, setDataModel] = useState<DataModel>(dataModels[0]);

  const dataModelOptions = useMemo(
    () =>
      dataModels.map((dm) => ({
        label: dm.label,
        value: dm.name,
      })),
    []
  );

  const handleDataModelChange = (name: string) => {
    const newModel = dataModels.find((dm) => dm.name === name);
    if (newModel) {
      setDataModel(newModel);
    }
  };

  return (
    <SafeAreaView>
      <DataModelPicker value={dataModel.name} onChange={handleDataModelChange} options={dataModelOptions} />
      <ScrollView>
        <Formik initialValues={{}} onSubmit={() => {}}>
          <View>
            {dataModel.inputs.map((input) => (
              <Input key={input.name} field={input} />
            ))}
            {dataModel.outputs.map((output) => (
              <Output key={output.name} field={output} />
            ))}
          </View>
        </Formik>
      </ScrollView>
    </SafeAreaView>
  );
}
