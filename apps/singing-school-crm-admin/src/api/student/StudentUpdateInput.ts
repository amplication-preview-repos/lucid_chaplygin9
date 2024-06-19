import { CourseUpdateManyWithoutStudentsInput } from "./CourseUpdateManyWithoutStudentsInput";

export type StudentUpdateInput = {
  courses?: CourseUpdateManyWithoutStudentsInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  phone?: string | null;
};
