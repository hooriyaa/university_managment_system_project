class Person {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
class Student extends Person {
    rollNumber;
    courses;
    constructor(name, age, rollNumber) {
        super(name, age);
        this.rollNumber = rollNumber;
        this.courses = [];
    }
    registerForCourse(course) {
        this.courses.push(course);
    }
}
class Instructor extends Person {
    salary;
    courses;
    constructor(name, age, salary) {
        super(name, age);
        this.salary = salary;
        this.courses = [];
    }
    assignCourse(course) {
        this.courses.push(course);
    }
}
class Course {
    id;
    name;
    students = [];
    instructor;
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    addStudent(student) {
        this.students.push(student);
    }
    setInstructor(instructor) {
        this.instructor = instructor;
    }
}
class Department {
    name;
    courses;
    constructor(name) {
        this.name = name;
        this.courses = [];
    }
    addCourse(course) {
        this.courses.push(course);
    }
}
const std1 = new Student("hooriya", 17, 12345);
const std2 = new Student("Mahnoor", 19, 23456);
const std3 = new Student("Malahim", 19, 17649);
let instructor1 = new Instructor("Hamzah", 22, "$90000");
let instructor2 = new Instructor("Ali", 22, "$70000");
let instructor3 = new Instructor("Asharib", 22, "$80000");
const course1 = new Course(1, "Typescript");
const course2 = new Course(2, "Inorganic Chemistry");
const course3 = new Course(3, "literature And linguistic");
const department1 = new Department("Computer Science");
const department2 = new Department("Chemistry");
const department3 = new Department("English Literature");
std1.registerForCourse(course1);
std2.registerForCourse(course2);
std2.registerForCourse(course3);
std3.registerForCourse(course3);
department1.addCourse(course1);
department2.addCourse(course2);
department3.addCourse(course3);
course1.addStudent(std1);
course2.addStudent(std2);
course3.addStudent(std3);
course3.addStudent(std2);
course1.setInstructor(instructor1);
course2.setInstructor(instructor2);
course3.setInstructor(instructor3);
console.log(department3.courses[0]);
console.log(instructor1.courses);
console.log(std1.courses[0]);
console.log(course3.students);
console.log(std1.courses);
console.log(department1.courses);
export {};
