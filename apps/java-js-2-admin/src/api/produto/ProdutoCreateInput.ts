import { Decimal } from "decimal.js";

export type ProdutoCreateInput = {
  preOs?: Decimal | null;
  tipo?: "t" | "m" | "c" | null;
};
