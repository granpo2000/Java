import { SortOrder } from "../../util/SortOrder";

export type ClienteOrderByInput = {
  createdAt?: SortOrder;
  eMail?: SortOrder;
  id?: SortOrder;
  idade?: SortOrder;
  nome?: SortOrder;
  updatedAt?: SortOrder;
};
