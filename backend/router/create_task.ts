import { Router } from "express";
import { TaskService } from "../service/task_service.js";
import { taskValidator } from "../validator/validator.js";
const router = Router();
const taskservice = new TaskService();
export default router.post("/create",taskValidator(), async (req, res) => {
  try {
    const task = req.body;
    await taskservice.createTask(task);
    res.status(200).send("Task Created Sucessfully");
  } catch (error) {
    console.error("Create task Error", error);
  }
});
