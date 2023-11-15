/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { PedidoWhereUniqueInput } from "./PedidoWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { PedidoUpdateInput } from "./PedidoUpdateInput";

@ArgsType()
class UpdatePedidoArgs {
  @ApiProperty({
    required: true,
    type: () => PedidoWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => PedidoWhereUniqueInput)
  @Field(() => PedidoWhereUniqueInput, { nullable: false })
  where!: PedidoWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => PedidoUpdateInput,
  })
  @ValidateNested()
  @Type(() => PedidoUpdateInput)
  @Field(() => PedidoUpdateInput, { nullable: false })
  data!: PedidoUpdateInput;
}

export { UpdatePedidoArgs as UpdatePedidoArgs };
