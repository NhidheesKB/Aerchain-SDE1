import db from "../config/database.js";
export class TaskService {
  private generatField(task:Record<string,string|number|Date>){
    return{
      description:task.description,
      status: task.status,
      priority: task.priority,
      due_date: task.due_date,
      title: task.title,
    }
  }
  async createTask(task:Record<string,string|number|Date>){
    const field=this.generatField(task)
    await db('task').insert(field)
  }
  async getTask() {
    const tasks = await db.select("*").from("task");
    return tasks;
  }
  async updateTaskStatus(status: string, taskid: number) {
    await db("task").where({ id: taskid }).update({ status });
  }
  async updateTask(task:Record<string,string|number|Date>) {
    const field = this.generatField(task)
    await db("task").where({ id: task.id }).update(field);
  }
  async deleteTask(id:number){
    await db('task').where({id}).del()
  }
}
