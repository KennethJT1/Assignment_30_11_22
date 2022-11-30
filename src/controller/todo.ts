import { Request, Response } from "express";
import Todo from "../models/todo";
import { registerSchema, option } from '../utils/utils'

//Register todo
export const registerTodo = async (req: Request, res: Response) => {
  try {
    const validateResult = registerSchema.validate(req.body, option);
    if (validateResult.error) {
      return res.status(400).json({
        Error: validateResult.error.details[0].message,
      });
    }
    const { description,status } = validateResult.value;
    const todo = await new Todo({
      description,
      status
    }).save()
    return res.status(201).json({
      message:
        "Todo created successfully"
    });
    
  } catch (error) {
    console.log(error);
  }
};

//Get all todo
export const getAllTodo = async (req: Request, res: Response) => {
  try {
    const todo = await Todo.find();
    return res.status(200).json({
      message:
        "These are the todos",
        Count: todo.length,
        todo
    });
    
  } catch (error) {
    console.log(error);
  }
 
  
};

//Get single todo
export const getSingleTodo = async (req: Request, res: Response) => {
  try {
    const { _id } = req.params;
    const todo = await Todo.findById({_id});
    if(!todo) {
      return res.status(400).json({
        msh: "You have inserted the wrong id"
      })
    }

    return res.status(200).json({
      message:
        "This is the todos  you asked for",
        todo
    }); 
    
  } catch (error) {
    console.log(error);
  }
};

//Update a todo
export const updateTodo = async (req: Request, res: Response) => {
  try {
    const { _id } = req.params;
    const todo = await Todo.findByIdAndUpdate({_id});
    if(!todo) {
      return res.status(400).json({
        msh: "You have inserted the wrong id"
      })
    }

    return res.status(200).json({
      message:
        "This is the todos  you update",
        todo
    }); 
    
  } catch (error) {
    console.log(error);
  }
};

//Delete a todo
export const deleteTodo = async (req: Request, res: Response) => {
  try {
    const { _id } = req.params;
    const todo = await Todo.findByIdAndDelete({_id});
    if(!todo) {
      return res.status(400).json({
        msh: "You have inserted the wrong id"
      })
    }

    return res.status(200).json({
      message:
        "This is the todos  has been deleted"
    }); 
    
  } catch (error) {
    console.log(error);
  }
  };
