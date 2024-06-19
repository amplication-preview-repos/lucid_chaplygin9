import { Course } from "../course/Course";
import { Teacher } from "../teacher/Teacher";

export type Location = {
  address: string | null;
  courses?: Array<Course>;
  createdAt: Date;
  id: string;
  name: string | null;
  phone: string | null;
  teachers?: Array<Teacher>;
  updatedAt: Date;
};
