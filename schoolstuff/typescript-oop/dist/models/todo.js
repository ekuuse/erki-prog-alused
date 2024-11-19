"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Todo = void 0;
const todos = []; // data is here
class Todo {
    constructor(id, task) {
        this.id = id;
        this.task = task;
    }
    static async getAllTodos() {
        console.log(todos);
        return todos;
    }
    static async createTodo(task) {
        const newTodo = new Todo(Math.random().toString(), task);
        todos.push(newTodo);
        console.log(newTodo);
        return newTodo;
    }
    static async updateTodo(todoId, updatedTask) {
        const todoIndex = todos.findIndex(todo => todo.id === todoId);
        if (todoIndex < 0) {
            return new Error('Could not find todo with such id, oh no!!!!!');
        }
        const updatedTodo = todos[todoIndex] = new Todo(todos[todoIndex].id, updatedTask);
        return updatedTodo;
    }
    static async deleteTodo(todoId) {
        const todoIndex = todos.findIndex(todo => todo.id === todoId);
        if (todoIndex < 0) {
            return new Error('Could not find todo with such id, oh no!!!!!');
        }
        todos.splice(todoIndex, 1);
    }
}
exports.Todo = Todo;
exports.Todo = Todo;
