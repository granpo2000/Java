import { Module } from "@nestjs/common";
import { FuncionRioModuleBase } from "./base/funcionRio.module.base";
import { FuncionRioService } from "./funcionRio.service";
import { FuncionRioController } from "./funcionRio.controller";
import { FuncionRioResolver } from "./funcionRio.resolver";

@Module({
  imports: [FuncionRioModuleBase],
  controllers: [FuncionRioController],
  providers: [FuncionRioService, FuncionRioResolver],
  exports: [FuncionRioService],
})
export class FuncionRioModule {}
