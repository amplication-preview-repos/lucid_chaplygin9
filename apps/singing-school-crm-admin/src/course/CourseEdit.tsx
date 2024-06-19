import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { LocationTitle } from "../location/LocationTitle";
import { SingingStyleTitle } from "../singingStyle/SingingStyleTitle";
import { StudentTitle } from "../student/StudentTitle";
import { TeacherTitle } from "../teacher/TeacherTitle";

export const CourseEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Description" multiline source="description" />
        <DateTimeInput label="EndDate" source="endDate" />
        <ReferenceInput
          source="location.id"
          reference="Location"
          label="Location"
        >
          <SelectInput optionText={LocationTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="singingStyle.id"
          reference="SingingStyle"
          label="SingingStyle"
        >
          <SelectInput optionText={SingingStyleTitle} />
        </ReferenceInput>
        <DateTimeInput label="StartDate" source="startDate" />
        <ReferenceInput source="student.id" reference="Student" label="Student">
          <SelectInput optionText={StudentTitle} />
        </ReferenceInput>
        <ReferenceInput source="teacher.id" reference="Teacher" label="Teacher">
          <SelectInput optionText={TeacherTitle} />
        </ReferenceInput>
        <TextInput label="Title" source="title" />
      </SimpleForm>
    </Edit>
  );
};
