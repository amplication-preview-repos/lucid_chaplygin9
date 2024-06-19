import { SortOrder } from "../../util/SortOrder";

export type CourseOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  endDate?: SortOrder;
  id?: SortOrder;
  locationId?: SortOrder;
  singingStyleId?: SortOrder;
  startDate?: SortOrder;
  studentId?: SortOrder;
  teacherId?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
