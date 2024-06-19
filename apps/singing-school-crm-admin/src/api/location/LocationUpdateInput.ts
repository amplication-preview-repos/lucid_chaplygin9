import { CourseUpdateManyWithoutLocationsInput } from "./CourseUpdateManyWithoutLocationsInput";
import { TeacherUpdateManyWithoutLocationsInput } from "./TeacherUpdateManyWithoutLocationsInput";

export type LocationUpdateInput = {
  address?: string | null;
  courses?: CourseUpdateManyWithoutLocationsInput;
  name?: string | null;
  phone?: string | null;
  teachers?: TeacherUpdateManyWithoutLocationsInput;
};
