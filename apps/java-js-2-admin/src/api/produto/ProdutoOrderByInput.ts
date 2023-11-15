import { SortOrder } from "../../util/SortOrder";

export type ProdutoOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  preOs?: SortOrder;
  tipo?: SortOrder;
  updatedAt?: SortOrder;
};
