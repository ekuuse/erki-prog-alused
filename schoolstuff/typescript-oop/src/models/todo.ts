const todos: Todo[] = [] // data is here

export class Todo {
    constructor(public id: string, public task: string){}

    static async getAllTodos(){
        console.log(todos)
        return todos
    }
    static async createTodo(task: string){
        const newTodo = new Todo(Math.random().toString(), task)
        todos.push(newTodo)
        console.log(newTodo)
        return newTodo
    }
    static async updateTodo(todoId: string, updatedTask: string){
        const todoIndex = todos.findIndex(todo => todo.id === todoId)

        if(todoIndex < 0) {
            return new Error('Could not find todo with such id, oh no!!!!!')
        }

        const updatedTodo = todos[todoIndex] = new Todo(todos[todoIndex].id, updatedTask)
        return updatedTodo
    }
    static async deleteTodo(todoId: string){
        const todoIndex = todos.findIndex(todo => todo.id === todoId)

        if(todoIndex < 0) {
            return new Error('Could not find todo with such id, oh no!!!!!')
        }

        todos.splice(todoIndex, 1)
    }
}

exports.Todo = Todo