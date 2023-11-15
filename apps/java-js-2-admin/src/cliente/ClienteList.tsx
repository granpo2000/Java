import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const ClienteList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Clientes"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="E-mail" source="eMail" />
        <TextField label="ID" source="id" />
        <TextField label="Idade" source="idade" />
        <TextField label="Nome" source="nome" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
