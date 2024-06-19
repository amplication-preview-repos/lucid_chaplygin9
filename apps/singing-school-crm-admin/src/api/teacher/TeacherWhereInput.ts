import { CourseListRelationFilter } from "../course/CourseListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { LocationWhereUniqueInput } from "../location/LocationWhereUniqueInput";

export type TeacherWhereInput = {
  courses?: CourseListRelationFilter;
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  location?: LocationWhereUniqueInput;
  phone?: StringNullableFilter;
};
