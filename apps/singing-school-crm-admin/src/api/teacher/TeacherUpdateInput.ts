import { CourseUpdateManyWithoutTeachersInput } from "./CourseUpdateManyWithoutTeachersInput";
import { LocationWhereUniqueInput } from "../location/LocationWhereUniqueInput";

export type TeacherUpdateInput = {
  courses?: CourseUpdateManyWithoutTeachersInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  location?: LocationWhereUniqueInput | null;
  phone?: string | null;
};
