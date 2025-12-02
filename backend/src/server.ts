import express from 'express'
import create_task from './router/create_task.js';
import { urlencoded } from 'body-parser';
const port =3000
const app =express()
app.use(express.json())
app.use(urlencoded({extended:true}))


app.use('/api',create_task)
app.listen(port,()=>{console.log("Backend running sucessfully")})