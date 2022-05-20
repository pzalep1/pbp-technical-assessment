import { Injectable } from '@nestjs/common';
import { students } from './database/database';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Welcome to the pbp-technical-assessment!';
  }

  getStudents(): any {
    return students;
  }

  createStudent(student: Student): any {
    return;
  }
}
