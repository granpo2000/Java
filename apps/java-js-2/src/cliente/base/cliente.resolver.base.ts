/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { CreateClienteArgs } from "./CreateClienteArgs";
import { UpdateClienteArgs } from "./UpdateClienteArgs";
import { DeleteClienteArgs } from "./DeleteClienteArgs";
import { ClienteCountArgs } from "./ClienteCountArgs";
import { ClienteFindManyArgs } from "./ClienteFindManyArgs";
import { ClienteFindUniqueArgs } from "./ClienteFindUniqueArgs";
import { Cliente } from "./Cliente";
import { ClienteService } from "../cliente.service";
@graphql.Resolver(() => Cliente)
export class ClienteResolverBase {
  constructor(protected readonly service: ClienteService) {}

  async _clientesMeta(
    @graphql.Args() args: ClienteCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Cliente])
  async clientes(
    @graphql.Args() args: ClienteFindManyArgs
  ): Promise<Cliente[]> {
    return this.service.findMany(args);
  }

  @graphql.Query(() => Cliente, { nullable: true })
  async cliente(
    @graphql.Args() args: ClienteFindUniqueArgs
  ): Promise<Cliente | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Cliente)
  async createCliente(
    @graphql.Args() args: CreateClienteArgs
  ): Promise<Cliente> {
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Cliente)
  async updateCliente(
    @graphql.Args() args: UpdateClienteArgs
  ): Promise<Cliente | null> {
    try {
      return await this.service.update({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Cliente)
  async deleteCliente(
    @graphql.Args() args: DeleteClienteArgs
  ): Promise<Cliente | null> {
    try {
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
