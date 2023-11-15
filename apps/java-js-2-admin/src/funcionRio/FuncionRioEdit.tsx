import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  PasswordInput,
  TextInput,
} from "react-admin";

export const FuncionRioEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <PasswordInput label="Senha" source="senha" />
        <TextInput label="Usuário" source="usuRio" />
      </SimpleForm>
    </Edit>
  );
};
