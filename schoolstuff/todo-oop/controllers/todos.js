import { Todo } from '../models/todo.js'

class TodoController {
    constructor(){
        this.TODOS = []
    }

    createTodo(req,res){
        const task = req.body.task
        const newTodo = new Todo(Math.random().toString(), task)
        this.TODOS.push(newTodo)
        res.json({
            message: 'created new todo object',
            newTask: newTodo
        })
    }

    getTodos(req, res){
        res.json({tasks: this.TODOS})
    }
}

export const todoController = new TodoController()