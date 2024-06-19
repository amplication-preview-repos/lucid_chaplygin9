import { CourseCreateNestedManyWithoutStudentsInput } from "./CourseCreateNestedManyWithoutStudentsInput";

export type StudentCreateInput = {
  courses?: CourseCreateNestedManyWithoutStudentsInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  phone?: string | null;
};
