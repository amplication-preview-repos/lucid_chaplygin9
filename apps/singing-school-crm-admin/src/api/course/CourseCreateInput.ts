import { LocationWhereUniqueInput } from "../location/LocationWhereUniqueInput";
import { SingingStyleWhereUniqueInput } from "../singingStyle/SingingStyleWhereUniqueInput";
import { StudentWhereUniqueInput } from "../student/StudentWhereUniqueInput";
import { TeacherWhereUniqueInput } from "../teacher/TeacherWhereUniqueInput";

export type CourseCreateInput = {
  description?: string | null;
  endDate?: Date | null;
  location?: LocationWhereUniqueInput | null;
  singingStyle?: SingingStyleWhereUniqueInput | null;
  startDate?: Date | null;
  student?: StudentWhereUniqueInput | null;
  teacher?: TeacherWhereUniqueInput | null;
  title?: string | null;
};
