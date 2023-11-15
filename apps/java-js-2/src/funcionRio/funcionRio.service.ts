import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FuncionRioServiceBase } from "./base/funcionRio.service.base";

@Injectable()
export class FuncionRioService extends FuncionRioServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
