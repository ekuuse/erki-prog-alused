const Person = require('./Person')

class Student extends Person {
    constructor(name) {
        super(name)
        this.id = "NONE"
        this.grades = []
    }
    setId(id) {
        if (this.id === "NONE") {
            this.id = id
        }
    }
    getId() {
        return this.id
    }
    addGrade(course, grade) {
        this.grades.push({course, grade})
    }
    getGrades() {
        return this.grades
    }
    getAverageGrade() {
        const totalGrades = this.grades.reduce((sum, item) => sum + item.grade, 0)
        return totalGrades / this.grades.length;
    }
    description() {
        return `${this.name} on opilane.`
    }
}

module.exports = Student