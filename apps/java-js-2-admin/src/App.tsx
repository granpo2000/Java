import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { ClienteList } from "./cliente/ClienteList";
import { ClienteCreate } from "./cliente/ClienteCreate";
import { ClienteEdit } from "./cliente/ClienteEdit";
import { ClienteShow } from "./cliente/ClienteShow";
import { ProdutoList } from "./produto/ProdutoList";
import { ProdutoCreate } from "./produto/ProdutoCreate";
import { ProdutoEdit } from "./produto/ProdutoEdit";
import { ProdutoShow } from "./produto/ProdutoShow";
import { FuncionRioList } from "./funcionRio/FuncionRioList";
import { FuncionRioCreate } from "./funcionRio/FuncionRioCreate";
import { FuncionRioEdit } from "./funcionRio/FuncionRioEdit";
import { FuncionRioShow } from "./funcionRio/FuncionRioShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"JavaJS2"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Cliente"
          list={ClienteList}
          edit={ClienteEdit}
          create={ClienteCreate}
          show={ClienteShow}
        />
        <Resource
          name="Produto"
          list={ProdutoList}
          edit={ProdutoEdit}
          create={ProdutoCreate}
          show={ProdutoShow}
        />
        <Resource
          name="FuncionRio"
          list={FuncionRioList}
          edit={FuncionRioEdit}
          create={FuncionRioCreate}
          show={FuncionRioShow}
        />
      </Admin>
    </div>
  );
};

export default App;
