class Person {
    constructor(name) {
        this.name = name
        this.dateofbirth = NaN
    }
    setDateOfBirth(year) {
        if (typeof year === 'number') {
            this.dateofbirth = year
        }
    }
    getDateOfBirth() {
        return this.dateofbirth
    }
    age() {
        if (this.dateofbirth !== NaN) {
            return new Date().getFullYear() - this.dateofbirth
        }
    }
    getName() {
        return this.name
    }
    description() {
        return `${this.name} on isik.`
    }
}

module.exports = Person