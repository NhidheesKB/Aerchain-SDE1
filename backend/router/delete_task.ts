import { Router } from "express";
import { TaskService } from "../service/task_service.js";
import { deleteTaskValidator } from "../validator/validator.js";

const router = Router();
const taskservice = new TaskService();

export default router.delete("/delete",deleteTaskValidator(), async (req, res) => {
  try {
    const { id } = req.body;
    await taskservice.deleteTask(id);
    return res.status(200).send("delete Sucessfully");
  } catch (error) {
    console.log("DeleteTask Error", error);
  }
});
