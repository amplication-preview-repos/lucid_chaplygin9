import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SingingStyleServiceBase } from "./base/singingStyle.service.base";

@Injectable()
export class SingingStyleService extends SingingStyleServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
