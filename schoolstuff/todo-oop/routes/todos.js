import express, { Router } from 'express'
import { todoController } from '../controllers/todos.js'

const router = Router()
router.post('/new-todo', (req,res) => todoController.createTodo(req,res))

export default router