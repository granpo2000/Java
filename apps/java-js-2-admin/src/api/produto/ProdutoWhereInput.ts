import { StringFilter } from "../../util/StringFilter";
import { DecimalNullableFilter } from "../../util/DecimalNullableFilter";

export type ProdutoWhereInput = {
  id?: StringFilter;
  preOs?: DecimalNullableFilter;
  tipo?: "t" | "m" | "c";
};
