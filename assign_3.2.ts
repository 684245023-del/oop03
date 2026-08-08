enum CourseStatus {
  Open = "Open",
  Closed = "Closed",
  Full = "Full"
}
interface Student {
  id: number | string;
  name: string;
}
interface Course {
  title: string;
  code: string;
  status: CourseStatus;
  students: Student[];
}
function enroll(student: Student, course: Course): void {
  if (course.status === CourseStatus.Open) {
    course.students.push(student);
    console.log(`Successfully enrolled ${student.name} in course "${course.title}".`);
  } else {
    console.log(`Cannot enroll ${student.name}. Course "${course.title}" is currently ${course.status}.`);
  }
}
const student1: Student = { id: "S65001", name: "Somchai" };
const student2: Student = { id: "S65002", name: "Somsri" };
const tsCourse: Course = {
  title: "TypeScript Essentials",
  code: "CS101",
  status: CourseStatus.Open,
  students: []
};

const pythonCourse: Course = {
  title: "Advanced Python",
  code: "CS102",
  status: CourseStatus.Full,
  students: []
};
enroll(student1, tsCourse);
enroll(student2, pythonCourse);
console.log("TS Course Enrolled Students:", tsCourse.students);