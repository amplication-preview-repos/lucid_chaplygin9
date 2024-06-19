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
import { SingingStyleWhereUniqueInput } from "./SingingStyleWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { SingingStyleUpdateInput } from "./SingingStyleUpdateInput";

@ArgsType()
class UpdateSingingStyleArgs {
  @ApiProperty({
    required: true,
    type: () => SingingStyleWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => SingingStyleWhereUniqueInput)
  @Field(() => SingingStyleWhereUniqueInput, { nullable: false })
  where!: SingingStyleWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => SingingStyleUpdateInput,
  })
  @ValidateNested()
  @Type(() => SingingStyleUpdateInput)
  @Field(() => SingingStyleUpdateInput, { nullable: false })
  data!: SingingStyleUpdateInput;
}

export { UpdateSingingStyleArgs as UpdateSingingStyleArgs };
