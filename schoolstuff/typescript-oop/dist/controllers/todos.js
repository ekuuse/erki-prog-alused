"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoController = void 0;
const todo_1 = require("../models/todo");
class TodoController {
    constructor(id, task) {
        this.id = id;
        this.task = task;
    }
    static async createTodo(req, res, next) {
        try {
            const task = req.body.task;
            const newTodo = await todo_1.Todo.createTodo(task);
            res.status(201).json({
                message: 'Created new todo',
                createdTask: newTodo
            });
        }
        catch (error) {
            console.log(error);
        }
    }
    static async getTodos(req, res, next) {
        try {
            const tasks = await todo_1.Todo.getAllTodos();
            res.status(201).json({
                tasks: tasks
            });
        }
        catch (error) {
            console.log(error);
        }
    }
    static async updateTodo(req, res, next) {
        try {
            const todoId = req.params.id;
            const updatedTask = req.body.task;
            const updatedTodo = await todo_1.Todo.updateTodo(todoId, updatedTask);
            res.status(201).json({
                message: 'Todo is updated!',
                updatedTask: updatedTodo
            });
        }
        catch (error) {
            console.log(error);
        }
    }
    static async deleteTodo(req, res, next) {
        try {
            const todoId = req.params.id;
            await todo_1.Todo.deleteTodo(todoId);
            res.status(201).json({
                message: 'Todo is deleted, you will never get it back!'
            });
        }
        catch (error) {
            console.log(error);
        }
    }
}
exports.TodoController = TodoController;
exports.TodoController = TodoController;
