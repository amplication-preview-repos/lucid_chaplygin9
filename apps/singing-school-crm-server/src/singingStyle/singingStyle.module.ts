import { Module } from "@nestjs/common";
import { SingingStyleModuleBase } from "./base/singingStyle.module.base";
import { SingingStyleService } from "./singingStyle.service";
import { SingingStyleController } from "./singingStyle.controller";
import { SingingStyleResolver } from "./singingStyle.resolver";

@Module({
  imports: [SingingStyleModuleBase],
  controllers: [SingingStyleController],
  providers: [SingingStyleService, SingingStyleResolver],
  exports: [SingingStyleService],
})
export class SingingStyleModule {}
