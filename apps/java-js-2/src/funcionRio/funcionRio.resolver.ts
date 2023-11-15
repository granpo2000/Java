import * as graphql from "@nestjs/graphql";
import { FuncionRioResolverBase } from "./base/funcionRio.resolver.base";
import { FuncionRio } from "./base/FuncionRio";
import { FuncionRioService } from "./funcionRio.service";

@graphql.Resolver(() => FuncionRio)
export class FuncionRioResolver extends FuncionRioResolverBase {
  constructor(protected readonly service: FuncionRioService) {
    super(service);
  }
}
