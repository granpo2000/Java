/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { StringFilter } from "../../util/StringFilter";
import { Type } from "class-transformer";
import { IsOptional, IsEnum } from "class-validator";
import { DecimalNullableFilter } from "../../util/DecimalNullableFilter";
import { EnumProdutoTipo } from "./EnumProdutoTipo";

@InputType()
class ProdutoWhereInput {
  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: DecimalNullableFilter,
  })
  @Type(() => DecimalNullableFilter)
  @IsOptional()
  @Field(() => DecimalNullableFilter, {
    nullable: true,
  })
  preOs?: DecimalNullableFilter;

  @ApiProperty({
    required: false,
    enum: EnumProdutoTipo,
  })
  @IsEnum(EnumProdutoTipo)
  @IsOptional()
  @Field(() => EnumProdutoTipo, {
    nullable: true,
  })
  tipo?: "t" | "m" | "c";
}

export { ProdutoWhereInput as ProdutoWhereInput };
