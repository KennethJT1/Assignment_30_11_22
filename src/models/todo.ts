import mongoose, { Schema, model } from 'mongoose'

export interface todoAttributes {
  _id: string;
  description: string;
  status: boolean;
}

const todoSchema = new Schema({
    description:{
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        required: true
    }
},
{
    timestamps: true
});
const Todo = model<todoAttributes>("User", todoSchema);
export default Todo;

