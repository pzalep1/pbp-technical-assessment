import { Injectable } from '@nestjs/common';
import { MockStudent } from '../mocks/student';
import { Student } from '../dto/student';

@Injectable()
export class Database {
  students = [];
  
  constructor() {
    this.students.push(MockStudent);
  }
  
  getHello(): string {
    return 'Welcome to the pbp-technical-assessment!';
  }

  /**
  * Gets all students in the database
  * 
  * @returns {Student[]} An array of students
  */
  getStudents(): Student[] {
    return this.students;
  }

  /**
  * Gets a student with a specific id
  * 
  * @param {string} id 
  * @returns {Student} A student with the specified id
  */
  getStudent(id: string): Student {
    return this.students.find(student => student.id === id);
  }

  /**
  * Adds a hero to the database
  * 
  * @param {Student} student The student to add to the database
  */
  createStudent(student): Student {
    student.id = this.students.length.toString();
    this.students.push(student);
    return student;
  }

  /**
  * Updates a student by id in the database
  * 
  * @param {string} id The id of the student to update
  * @param {Partial<Student>} studentUpdates A partial student object
  */
  updateStudent(id, studentUpdates): void {
    const student = new Student(this.getStudent(id));
    this.deleteStudent(id);
    student.updateStudent(studentUpdates);
    this.createStudent(student);
  }

  /**
  * Deletes a student by id in the database
  * 
  * @param {string} id The id of the student to delete
  */
  deleteStudent(id) {
    const index = this.students.findIndex(student => student.id === id);
    if (index >= 0) {
        this.students.splice(index, 1);
    }
  }
}
