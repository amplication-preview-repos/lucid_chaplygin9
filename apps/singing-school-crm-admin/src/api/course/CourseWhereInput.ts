import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { LocationWhereUniqueInput } from "../location/LocationWhereUniqueInput";
import { SingingStyleWhereUniqueInput } from "../singingStyle/SingingStyleWhereUniqueInput";
import { StudentWhereUniqueInput } from "../student/StudentWhereUniqueInput";
import { TeacherWhereUniqueInput } from "../teacher/TeacherWhereUniqueInput";

export type CourseWhereInput = {
  description?: StringNullableFilter;
  endDate?: DateTimeNullableFilter;
  id?: StringFilter;
  location?: LocationWhereUniqueInput;
  singingStyle?: SingingStyleWhereUniqueInput;
  startDate?: DateTimeNullableFilter;
  student?: StudentWhereUniqueInput;
  teacher?: TeacherWhereUniqueInput;
  title?: StringNullableFilter;
};
