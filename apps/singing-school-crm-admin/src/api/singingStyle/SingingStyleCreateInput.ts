import { CourseCreateNestedManyWithoutSingingStylesInput } from "./CourseCreateNestedManyWithoutSingingStylesInput";

export type SingingStyleCreateInput = {
  courses?: CourseCreateNestedManyWithoutSingingStylesInput;
  description?: string | null;
  name?: string | null;
};
