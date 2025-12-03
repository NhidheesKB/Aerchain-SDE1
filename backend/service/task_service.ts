import knex from "knex";
import db from '../config/database.js'
export class TaskService{


    async getTask(){
        const tasks=await db.select('*').from('task');
        return tasks
    }
    async updateTask(status:string,taskid:number){
        await db('task').where({id:taskid}).update({status})
    }
}