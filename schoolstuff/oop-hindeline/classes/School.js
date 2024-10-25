const Person = require('./Person')
const Student = require('./Student')
const Course = require('./Course')

class School {
    constructor(name) {
        this.name = name
        this.students = []
        this.courses = []
    }
    addCourse(course) {
        this.courses.push(new Course(course))
    }
    addStudent(student) {
        let tempStudent = new Student(student)
        if (tempStudent.dateofbirth >= 5 && tempStudent.dateofbirth <= 25) {
            tempStudent.setId(Math.floor(Math.random() * (9999 - 1111 + 1)) + 1111)
            this.students.push(tempStudent)
        }
    }
    addStudentGrade(student, course, grade) {
        if (student in this.students) {
            student.addGrade(course, grade)
            course.addGrade(student, grade)
        }
    }
    getStudents() {
        return this.students
    }
    getCourses() {
        return this.courses
    }
    getStudentsOrderedByAverageGrade() {
        return this.students.sort((a, b) => b.getAverageGrade() - a.getAverageGrade())
    }
}

module.exports = School