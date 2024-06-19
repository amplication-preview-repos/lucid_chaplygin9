import { CourseCreateNestedManyWithoutLocationsInput } from "./CourseCreateNestedManyWithoutLocationsInput";
import { TeacherCreateNestedManyWithoutLocationsInput } from "./TeacherCreateNestedManyWithoutLocationsInput";

export type LocationCreateInput = {
  address?: string | null;
  courses?: CourseCreateNestedManyWithoutLocationsInput;
  name?: string | null;
  phone?: string | null;
  teachers?: TeacherCreateNestedManyWithoutLocationsInput;
};
