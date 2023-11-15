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
import { EmailWhereUniqueInput } from "../../email/base/EmailWhereUniqueInput";
import { ValidateNested, IsOptional, IsString } from "class-validator";
import { Type } from "class-transformer";
import { PedidoUpdateManyWithoutClientesInput } from "./PedidoUpdateManyWithoutClientesInput";

@InputType()
class ClienteUpdateInput {
  @ApiProperty({
    required: false,
    type: () => EmailWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => EmailWhereUniqueInput)
  @IsOptional()
  @Field(() => EmailWhereUniqueInput, {
    nullable: true,
  })
  address?: EmailWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  email?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  firstName?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  lastName?: string | null;

  @ApiProperty({
    required: false,
    type: () => PedidoUpdateManyWithoutClientesInput,
  })
  @ValidateNested()
  @Type(() => PedidoUpdateManyWithoutClientesInput)
  @IsOptional()
  @Field(() => PedidoUpdateManyWithoutClientesInput, {
    nullable: true,
  })
  orders?: PedidoUpdateManyWithoutClientesInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  phone?: string | null;
}

export { ClienteUpdateInput as ClienteUpdateInput };
