import express, { urlencoded } from 'express'
import create_task from './router/create_task.ts'
import get_task from './router/get_task.ts'
const port =3000
const app =express()
app.use(express.json())
app.use(urlencoded({extended:true}))


app.use('/api',create_task)
app.use('/api',get_task)
app.listen(port,()=>{console.log("Backend running sucessfully")})