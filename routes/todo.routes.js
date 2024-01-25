import { Router } from "express";
import todo from "../controllers/todo.controller.js";

const todoRouter = Router();
const todoR = new todo();

todoRouter.get("/getTodos", todoR.getTodos);
todoRouter.post("/createTodo", todoR.craeteTodo);
todoRouter.patch("/markTodoAsCompleted/:id", todoR.markTodoAsCompleted);
todoRouter.put("/editTodo/:id", todoR.editTodo);
todoRouter.delete("/deleteTodo/:id", todoR.deleteTodo);
todoRouter.get("/", (req, res) => { res.send("Hello World inside routeer") });


export default todoRouter;