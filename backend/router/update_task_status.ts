import { Request, Response, Router } from "express";
import { TaskService } from "../service/task_service.js";
import { updateStatusValidator } from "../validator/validator.js";

const router = Router();
const taskservice = new TaskService();

export default router.put(
  "/update-status",
  updateStatusValidator(),
  async (req, res) => {
    try {
      const { to, taskId } = req.body;
      console.log("to", to, taskId);
      await taskservice.updateTaskStatus(to, taskId);
      return res.status(200).send("Update Sucessfully");
    } catch (error) {
      console.log("updateTaskError", error);
    }
  }
);
