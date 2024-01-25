import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    description: String,
    status: {
        type: String,
        enum: ["completed", "incomplete"],
    },
    category: String,
}, { timestamps: true });

export const Todo = mongoose.model("Todo", todoSchema);
