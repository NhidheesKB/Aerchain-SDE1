import express, { urlencoded } from 'express'
import create_task from './router/create_task.js'
import get_task from './router/get_task.js'
import update_task_status from './router/update_task_status.js'
import update_task from './router/update_task.js'
import delete_task from './router/delete_task.js'
import generate_task from './router/generate_task.js'
const port =3000
const app =express()
const routes=[create_task,get_task,update_task,update_task_status,delete_task,generate_task]
app.use(express.json())
app.use(urlencoded({extended:true}))
routes.forEach(route=>
    app.use('/api',route)
)
app.listen(port,()=>{console.log("Backend running sucessfully")})