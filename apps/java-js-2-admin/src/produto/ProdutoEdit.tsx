import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  SelectInput,
} from "react-admin";

export const ProdutoEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="Preços" source="preOs" />
        <SelectInput
          source="tipo"
          label="Tipo"
          choices={[
            { label: "Tenis", value: "t" },
            { label: "Camiseta", value: "m" },
            { label: "Calça", value: "c" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
      </SimpleForm>
    </Edit>
  );
};
