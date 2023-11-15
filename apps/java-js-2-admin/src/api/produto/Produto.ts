import { Decimal } from "decimal.js";

export type Produto = {
  createdAt: Date;
  id: string;
  preOs: Decimal | null;
  tipo?: "t" | "m" | "c" | null;
  updatedAt: Date;
};
