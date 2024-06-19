import { Location } from "../location/Location";
import { SingingStyle } from "../singingStyle/SingingStyle";
import { Student } from "../student/Student";
import { Teacher } from "../teacher/Teacher";

export type Course = {
  createdAt: Date;
  description: string | null;
  endDate: Date | null;
  id: string;
  location?: Location | null;
  singingStyle?: SingingStyle | null;
  startDate: Date | null;
  student?: Student | null;
  teacher?: Teacher | null;
  title: string | null;
  updatedAt: Date;
};
