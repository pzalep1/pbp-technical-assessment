import { Body, Controller, Get, Param, Post, Patch, Delete } from '@nestjs/common';
import { Database } from './database/database.service';
import { Student } from './dto/student';
import { StudentWriteDto } from './dto/studentWrite';

@Controller()
export class AppController {
  constructor(private readonly database: Database) {}

  @Get()
  getHello(): string {
    return this.database.getHello();
  }

  @Get('students')
  getStudents(): Student[] {
    return this.database.getStudents();
  }

  @Get('students/:id')
  getStudent(@Param('id') id: string): Student {
    return;
  }

  @Post('students')
  createStudent(@Body('student') student: StudentWriteDto): Student {
    return;
  }

  @Patch('students/:id')
  updateStudent(@Body('student') student: Partial<StudentWriteDto>, @Param('id') id: string): void {
    return;
  }

  @Delete('students/:id')
  deleteStudent(@Param('id') id: string): void {
    return;
  }
}
