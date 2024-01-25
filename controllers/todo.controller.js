import {Todo} from "../db/models/todo.models.js";
import {ApiError , asyncHandler, ApiResponse} from "../utils/index.js"

class todo  {
    // Users should be able to create tasks with a title and description.
    craeteTodo  = asyncHandler(async (req, res) => {
        const {title, description, category} = req.body;
        if(!title){
            throw new ApiError(400, "Title is required")
        }
        if(!category){
            category = "";
        }
        const todo = await Todo.create({title, description,category, status: "incomplete"});
        return res.status(200).json(
            new ApiResponse(200, {}, "todo added Successfully")
        )
    });

    // Users should be able to view a list of all tasks.
    getTodos = asyncHandler(async (req, res) => {
        let filter = {};
        if (req.query.category) {
            filter.category = req.query.category;
        }
        const todos = await Todo.find(filter);
        return res.status(200).json(
            new ApiResponse(200, todos, "todo fetched Successfully")
        )
    });

    // Users should be able to mark tasks as completed.
    markTodoAsCompleted = asyncHandler(async (req, res) => {
        const {id} = req.params;
        const todo = await Todo.findById(id);
        if(!todo){
            throw new ApiError(404, "Todo not found")
        }
        if(todo.status == "completed"){
            throw new ApiError(400, "Todo already completed")
        }
        todo.status = "completed";
        await todo.save();
        res.status(200).json(
            new ApiResponse(200, {}, "Todo updated Successfully")
        )
    });

    // Users should be able to edit task details.
    editTodo = asyncHandler(async (req, res) => {
        const { id } = req.params;
        let todo = await Todo.findById(id);
        if (!todo) {
            throw new ApiError(404, "Todo could not be edited as todo not found");
        }
        const {title, description,category} = req.body;
        todo.title = title;
        todo.description = description;
        todo.category = category;
        todo.status = "incomplete";
        await todo.save();
        res.status(200).json(
            new ApiResponse(200, {}, "Todo updated successfully")
        );
    });

    // Users should be able to delete tasks.
    deleteTodo = asyncHandler(async (req, res) => {
        const { id } = req.params;
        let todo = await Todo.findByIdAndDelete(id);
        if (!todo) {
            throw new ApiError(404, "todo could not be deleted as todo not found");
        }
        res.status(200).json(
            new ApiResponse(200, {}, "Todo deleted successfully")
        );
    })
}

export default todo;