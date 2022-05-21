import { StudentWriteDto } from "./studentWrite";

export class Student {
    id: string;
    name: string;
    major: string;
    department: string;
    birthday: string;

    constructor(student: any) {
        this.id = student.id;
        this.name = student.name;
        this.major = student.major;
        this.department = student.department;
        this.birthday = student.birthday;
    }

    /**
     * Updates the student class with new update values
     * 
     * @param {Partial<StudentWriteDto>} args The partial student object
     */
     updateStudent(args: Partial<StudentWriteDto>) {
        if (args.name) {
            this.name = args.name;
        }
        if (args.major) {
            this.major = args.major;
        }
        if (args.department) {
            this.department = args.department;
        }
        if (args.birthday) {
            this.birthday = args.birthday;
        }
    }
}