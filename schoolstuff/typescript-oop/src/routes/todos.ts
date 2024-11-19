import { Router } from "express";
import { TodoController } from "../controllers/todos"

const router = Router()
router.post('/', TodoController.createTodo)
router.get('/', TodoController.getTodos)
router.patch('/:id', TodoController.updateTodo)
router.delete('/:id', TodoController.deleteTodo)

export default router