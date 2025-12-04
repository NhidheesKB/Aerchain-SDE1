import { Router } from "express";
import { TaskService } from "../service/task_service.js";
const router = Router();
const taskService = new TaskService();
export default router.get("/task", async (req, res) => {
  try {
    const data = await taskService.getTask();
    return res.status(200).json({ data });
  } catch (error) {
    console.log("getdataError", error);
    return res.status(500).send("Internal Server Error");
  }
});
