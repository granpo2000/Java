import { Produto as TProduto } from "../api/produto/Produto";

export const PRODUTO_TITLE_FIELD = "id";

export const ProdutoTitle = (record: TProduto): string => {
  return record.id?.toString() || String(record.id);
};
