import express from "express";
import { registerTodo, getAllTodo, getSingleTodo, updateTodo, deleteTodo } from '../controller/todo';

const router = express.Router();

router.post('/register', registerTodo);
router.get('/getall', getAllTodo);
router.get('/getsingle', getSingleTodo);
router.put('/update', updateTodo);
router.delete('/delete', deleteTodo);



export default router;