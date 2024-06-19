import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SingingStyleService } from "./singingStyle.service";
import { SingingStyleControllerBase } from "./base/singingStyle.controller.base";

@swagger.ApiTags("singingStyles")
@common.Controller("singingStyles")
export class SingingStyleController extends SingingStyleControllerBase {
  constructor(protected readonly service: SingingStyleService) {
    super(service);
  }
}
