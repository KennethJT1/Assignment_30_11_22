import express, { Request, Response } from "express";
import logger from "morgan";
import mongoose from 'mongoose';
import dotenv from "dotenv";
import todoRouter from "./routes/todo";
 


const app = express();

//env variable
dotenv.config();

//Connect to mongoDB
mongoose.connect(process.env.MONGO_URI!)  
.then(()=> console.log('Database is connected to mongoDB...'))
.catch((err) => console.log('DB ERROR =>', err))


app.use(express.json());
app.use(logger("dev"));


//Router middleware
app.use("/todo", todoRouter);

const port = process.env.PORT || 4040;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
    
export default app;
  