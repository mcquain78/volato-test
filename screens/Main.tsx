import { useMemo, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import DataModelPicker from '../components/DataModelPicker';
import { DataModel } from '../types';

import { dataModels } from '../config/dummy_models';

export default function Main() {
  const [dataModel, setDataModel] = useState<DataModel>(dataModels[0]);

  const dataModelOptions = useMemo(
    () =>
      dataModels.map((dm) => ({
        label: dm.label,
        value: dm,
      })),
    []
  );

  console.log(dataModel);

  return (
    <SafeAreaView>
      <DataModelPicker value={dataModel} onChange={setDataModel} options={dataModelOptions} />
    </SafeAreaView>
  );
}
