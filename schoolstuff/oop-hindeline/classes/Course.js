class Course {
    constructor(name) {
        this.name = name
        this.studentgrades = []
    }
    addGrade(student, grade) {
        this.studentgrades.push(student, grade)
    }
    getGrades() {
        return this.studentgrades
    }
    getAverageGrade() {
        // do something
    }
    description() {
        return `Kursuse nimi on ${this.name}`
    }
}

module.exports = Course