import { Course } from "../course/Course";
import { Location } from "../location/Location";

export type Teacher = {
  courses?: Array<Course>;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  location?: Location | null;
  phone: string | null;
  updatedAt: Date;
};
