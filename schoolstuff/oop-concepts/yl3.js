class Student {
    constructor(name){
        this.name = name
        this.id = Math.random()
        this.status = "Active"
    }
    getId() {
        return this.id
    }
    setName(name) {
        this.name = name
    } 
    getName() {
        return this.name
    }
    setStatus(status) {
        if (status === "Active" || status === "Expelled" || status === "Finished" || status === "Inactive") {
            this.status = status
        }
    }
    getStatus() {
        return this.status
    }
}

const student = new Student("John")
console.log(student.name)