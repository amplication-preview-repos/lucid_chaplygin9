import * as graphql from "@nestjs/graphql";
import { SingingStyleResolverBase } from "./base/singingStyle.resolver.base";
import { SingingStyle } from "./base/SingingStyle";
import { SingingStyleService } from "./singingStyle.service";

@graphql.Resolver(() => SingingStyle)
export class SingingStyleResolver extends SingingStyleResolverBase {
  constructor(protected readonly service: SingingStyleService) {
    super(service);
  }
}
