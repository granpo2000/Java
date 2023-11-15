import { FuncionRio as TFuncionRio } from "../api/funcionRio/FuncionRio";

export const FUNCIONRIO_TITLE_FIELD = "id";

export const FuncionRioTitle = (record: TFuncionRio): string => {
  return record.id?.toString() || String(record.id);
};
