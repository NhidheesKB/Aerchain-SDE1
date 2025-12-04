import { Router } from "express";
import { generateTaskValidator } from "../validator/validator.js";
import { GenerateTaskService } from "../service/generate_task_service.js";
const router=Router()
const generateTaskService=new GenerateTaskService()
export default router.post('/generate',generateTaskValidator(),async(req,res)=>{

    try {
        const {content}=req.body
        const field=await generateTaskService.generateField(content)
        console.log("fields",field?.toString())
        return res.status(200).json({field:field?.toString()})
    } catch (error) {
        console.log("GenerateTaskError",error)
        
    }

})