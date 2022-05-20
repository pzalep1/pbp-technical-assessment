class Student {
    id: string;
    name: string;
    major: string;
    department: string;
    birthday: Date;

    constructor(student: any) {
        this.id = student.id;
        this.name = student.name;
        this.major = student.major;
        this.department = student.department;
        this.birthday = student.birthday;
    }
}