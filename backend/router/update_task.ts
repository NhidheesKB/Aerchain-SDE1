import { Router } from "express";
import { TaskService } from "../service/task_service.js";
import { taskValidator } from "../validator/validator.js";

const router = Router();
const taskService = new TaskService();
export default router.put("/update", taskValidator(), async (req, res) => {
  try {
    const task = req.body;
    console.log("upadte", task);
    await taskService.updateTask(task);
    return res.status(200).send("Update Sucessfully");
  } catch (error) {
    console.log("update TAsk error", error);
  }
});
