import { Router } from "express";
const router = Router();
export default router.post("/create", async (req, res) => {
    try {
        const {title,description,status,priority,due_date}=req.body
        console.log("body",req.body)
        
    } catch (error) {
        console.error("Create task Error",error)
        
    }
});
