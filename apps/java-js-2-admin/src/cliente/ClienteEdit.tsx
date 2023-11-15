import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const ClienteEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="E-mail" source="eMail" type="email" />
        <NumberInput step={1} label="Idade" source="idade" />
        <TextInput label="Nome" source="nome" />
      </SimpleForm>
    </Edit>
  );
};
