import { Request, Response } from "express";
import Todo from "../models/todo";
import { registerSchema, option } from '../utils/utils'

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

export const getAllTodo = async (req: Request, res: Response) => {
  try {
    const todo = await Todo.find();

    return res.status(200).json({
      message:
        "These are the todos",
        Todo
    }); 
    
  } catch (error) {
    console.log(error);
  }
};
export const getSingleTodo = async (req: Request, res: Response) => {
  try {
    const validateResult = registerSchema.validate(req.body, option);
    if (validateResult.error) {
      return res.status(400).json({
        Error: validateResult.error.details[0].message,
      });
    }
    const { description,status } = validateResult.value;
    const todo = new Todo({
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
export const updateTodo = async (req: Request, res: Response) => {
  try {
    const validateResult = registerSchema.validate(req.body, option);
    if (validateResult.error) {
      return res.status(400).json({
        Error: validateResult.error.details[0].message,
      });
    }
    const { description,status } = validateResult.value;
    const todo = new Todo({
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
export const deleteTodo = async (req: Request, res: Response) => {
  try {
    const validateResult = registerSchema.validate(req.body, option);
    if (validateResult.error) {
      return res.status(400).json({
        Error: validateResult.error.details[0].message,
      });
    }
    const { description,status } = validateResult.value;
    const todo = new Todo({
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
