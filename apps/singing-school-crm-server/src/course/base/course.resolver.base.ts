/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Course } from "./Course";
import { CourseCountArgs } from "./CourseCountArgs";
import { CourseFindManyArgs } from "./CourseFindManyArgs";
import { CourseFindUniqueArgs } from "./CourseFindUniqueArgs";
import { CreateCourseArgs } from "./CreateCourseArgs";
import { UpdateCourseArgs } from "./UpdateCourseArgs";
import { DeleteCourseArgs } from "./DeleteCourseArgs";
import { Location } from "../../location/base/Location";
import { SingingStyle } from "../../singingStyle/base/SingingStyle";
import { Student } from "../../student/base/Student";
import { Teacher } from "../../teacher/base/Teacher";
import { CourseService } from "../course.service";
@graphql.Resolver(() => Course)
export class CourseResolverBase {
  constructor(protected readonly service: CourseService) {}

  async _coursesMeta(
    @graphql.Args() args: CourseCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Course])
  async courses(@graphql.Args() args: CourseFindManyArgs): Promise<Course[]> {
    return this.service.courses(args);
  }

  @graphql.Query(() => Course, { nullable: true })
  async course(
    @graphql.Args() args: CourseFindUniqueArgs
  ): Promise<Course | null> {
    const result = await this.service.course(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Course)
  async createCourse(@graphql.Args() args: CreateCourseArgs): Promise<Course> {
    return await this.service.createCourse({
      ...args,
      data: {
        ...args.data,

        location: args.data.location
          ? {
              connect: args.data.location,
            }
          : undefined,

        singingStyle: args.data.singingStyle
          ? {
              connect: args.data.singingStyle,
            }
          : undefined,

        student: args.data.student
          ? {
              connect: args.data.student,
            }
          : undefined,

        teacher: args.data.teacher
          ? {
              connect: args.data.teacher,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => Course)
  async updateCourse(
    @graphql.Args() args: UpdateCourseArgs
  ): Promise<Course | null> {
    try {
      return await this.service.updateCourse({
        ...args,
        data: {
          ...args.data,

          location: args.data.location
            ? {
                connect: args.data.location,
              }
            : undefined,

          singingStyle: args.data.singingStyle
            ? {
                connect: args.data.singingStyle,
              }
            : undefined,

          student: args.data.student
            ? {
                connect: args.data.student,
              }
            : undefined,

          teacher: args.data.teacher
            ? {
                connect: args.data.teacher,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Course)
  async deleteCourse(
    @graphql.Args() args: DeleteCourseArgs
  ): Promise<Course | null> {
    try {
      return await this.service.deleteCourse(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => Location, {
    nullable: true,
    name: "location",
  })
  async getLocation(
    @graphql.Parent() parent: Course
  ): Promise<Location | null> {
    const result = await this.service.getLocation(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @graphql.ResolveField(() => SingingStyle, {
    nullable: true,
    name: "singingStyle",
  })
  async getSingingStyle(
    @graphql.Parent() parent: Course
  ): Promise<SingingStyle | null> {
    const result = await this.service.getSingingStyle(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @graphql.ResolveField(() => Student, {
    nullable: true,
    name: "student",
  })
  async getStudent(@graphql.Parent() parent: Course): Promise<Student | null> {
    const result = await this.service.getStudent(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @graphql.ResolveField(() => Teacher, {
    nullable: true,
    name: "teacher",
  })
  async getTeacher(@graphql.Parent() parent: Course): Promise<Teacher | null> {
    const result = await this.service.getTeacher(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
