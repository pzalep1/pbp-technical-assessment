export class StudentWriteDto {
    name: string;
    major: string;
    department: string;
    birthday: string;

    constructor(student: any) {
        this.name = student.name;
        this.major = student.major;
        this.department = student.department;
        this.birthday = student.birthday;
    }
}