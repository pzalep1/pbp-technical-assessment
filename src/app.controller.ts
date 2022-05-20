import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('students')
  getStudents(): any {
    return this.appService.getStudents();
  }

  @Post('students')
  createStudent(@Body('student') student: any) {
    return this.appService.createStudent(student);
  }
}
