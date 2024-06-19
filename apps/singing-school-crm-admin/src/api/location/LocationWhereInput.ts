import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CourseListRelationFilter } from "../course/CourseListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { TeacherListRelationFilter } from "../teacher/TeacherListRelationFilter";

export type LocationWhereInput = {
  address?: StringNullableFilter;
  courses?: CourseListRelationFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  phone?: StringNullableFilter;
  teachers?: TeacherListRelationFilter;
};
