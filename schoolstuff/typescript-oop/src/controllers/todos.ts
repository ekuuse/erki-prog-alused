import { Request, Response, NextFunction } from 'express'
import { Todo } from '../models/todo'

export class TodoController {
    constructor(public id: string, public task: string){

    }
    static async createTodo(req: Request, res:Response, next:NextFunction) {
        try{
            const task = (req.body as {task: string}).task
            const newTodo = await Todo.createTodo(task)
            res.status(201).json({
                message: 'Created new todo',
                createdTask: newTodo
            })
        } catch(error) {
            console.log(error)
        }
    }
    
    static async getTodos(req: Request, res:Response, next:NextFunction) {
        try{
            const tasks = await Todo.getAllTodos()
            res.status(201).json({
                tasks: tasks
            })
        } catch(error) {
            console.log(error)
        }
    }
    
    static async updateTodo(req: Request, res:Response, next:NextFunction) {
        try{
            const todoId = req.params.id
            const updatedTask = (req.body as {task: string}).task
            const updatedTodo = await Todo.updateTodo(todoId, updatedTask)
    
            res.status(201).json({
                message: 'Todo is updated!',
                updatedTask: updatedTodo
            })
        } catch(error) {
            console.log(error)
        }
    }
    
    static async deleteTodo(req: Request, res:Response, next:NextFunction) {
        try{
            const todoId = req.params.id
            await Todo.deleteTodo(todoId)
    
            res.status(201).json({
                message: 'Todo is deleted, you will never get it back!'
            })
        } catch(error) {
            console.log(error)
        }
    }
}

exports.TodoController = TodoController