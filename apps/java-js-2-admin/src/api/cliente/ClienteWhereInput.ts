import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type ClienteWhereInput = {
  eMail?: StringNullableFilter;
  id?: StringFilter;
  idade?: IntNullableFilter;
  nome?: StringFilter;
};
