import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  PasswordInput,
  TextInput,
} from "react-admin";

export const FuncionRioCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <PasswordInput label="Senha" source="senha" />
        <TextInput label="Usuário" source="usuRio" />
      </SimpleForm>
    </Create>
  );
};
