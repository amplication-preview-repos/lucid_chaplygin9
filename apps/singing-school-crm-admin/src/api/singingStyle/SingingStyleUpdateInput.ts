import { CourseUpdateManyWithoutSingingStylesInput } from "./CourseUpdateManyWithoutSingingStylesInput";

export type SingingStyleUpdateInput = {
  courses?: CourseUpdateManyWithoutSingingStylesInput;
  description?: string | null;
  name?: string | null;
};
