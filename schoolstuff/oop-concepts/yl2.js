class Person {
    constructor(){
        this.firstname = ""
        this.lastname = ""
        this.age = 0
    }
}

class Student {
    constructor(firstname, lastname, age){
        this.firstname = firstname
        this.lastname = lastname
        this.age = age
    }
}

const student = new Student("John", "Doe", 18)

const person = new Person()
person.firstname = "Jane"
person.lastname = "Doe"
person.age = 18