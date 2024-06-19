import { Course } from "../course/Course";

export type SingingStyle = {
  courses?: Array<Course>;
  createdAt: Date;
  description: string | null;
  id: string;
  name: string | null;
  updatedAt: Date;
};
