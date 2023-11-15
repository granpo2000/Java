import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { FuncionRioService } from "./funcionRio.service";
import { FuncionRioControllerBase } from "./base/funcionRio.controller.base";

@swagger.ApiTags("funcionRios")
@common.Controller("funcionRios")
export class FuncionRioController extends FuncionRioControllerBase {
  constructor(protected readonly service: FuncionRioService) {
    super(service);
  }
}
