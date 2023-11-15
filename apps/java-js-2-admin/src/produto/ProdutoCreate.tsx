import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  SelectInput,
} from "react-admin";

export const ProdutoCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
