import { Decimal } from "decimal.js";

export type ProdutoUpdateInput = {
  preOs?: Decimal | null;
  tipo?: "t" | "m" | "c" | null;
};
