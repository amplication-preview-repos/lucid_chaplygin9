import { CourseCreateNestedManyWithoutTeachersInput } from "./CourseCreateNestedManyWithoutTeachersInput";
import { LocationWhereUniqueInput } from "../location/LocationWhereUniqueInput";

export type TeacherCreateInput = {
  courses?: CourseCreateNestedManyWithoutTeachersInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  location?: LocationWhereUniqueInput | null;
  phone?: string | null;
};
