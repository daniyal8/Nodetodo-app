
const express = require("express");

const { TodoControllers } = require("../controllers");
const { authMiddleware } = require("../middlewares");

const app = express();
const router = express.Router();


router.get("/", authMiddleware, TodoControllers.getTodos);
router.post("/create", authMiddleware, TodoControllers.createTodo);
router.put("/:id", authMiddleware, TodoControllers.updateTodoById);
router.delete("/:id", authMiddleware, TodoControllers.deleteTodoById);

exports.todoRouter = app.use("/Todo", router);