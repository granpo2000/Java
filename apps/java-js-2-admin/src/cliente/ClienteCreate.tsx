import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const ClienteCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="E-mail" source="eMail" type="email" />
        <NumberInput step={1} label="Idade" source="idade" />
        <TextInput label="Nome" source="nome" />
      </SimpleForm>
    </Create>
  );
};
