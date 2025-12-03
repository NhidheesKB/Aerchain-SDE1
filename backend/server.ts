import express, { urlencoded } from 'express'
import create_task from './router/create_task.js'
import get_task from './router/get_task.js'
import update_task from './router/update_task.js'
const port =3000
const app =express()
app.use(express.json())
app.use(urlencoded({extended:true}))


app.use('/api',create_task)
app.use('/api',get_task)
app.use('/api',update_task)
app.listen(port,()=>{console.log("Backend running sucessfully")})