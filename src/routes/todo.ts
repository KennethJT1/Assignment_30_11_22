import express from "express";
import { registerTodo, getAllTodo, getSingleTodo, updateTodo, deleteTodo } from '../controller/todo';

const router = express.Router();

router.post('/register', registerTodo);
router.get('/getall', getAllTodo);
router.get('/getsingle/:_id', getSingleTodo);
router.put('/update/:_id', updateTodo);
router.delete('/delete/:_id', deleteTodo);



export default router;