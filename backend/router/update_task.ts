import { Router } from "express";
import { TaskService } from "../service/task_service.js";

const router =Router()
const taskservice=new TaskService()

export default router.put('/update',async(req,res)=>{
    try {
        const {to,taskId}=req.body
        await taskservice.updateTask(to,taskId)
        return res.status(200).send("Update Sucessfully")
    } catch (error) {
        console.log("updateTaskError",error)
        
    }
})