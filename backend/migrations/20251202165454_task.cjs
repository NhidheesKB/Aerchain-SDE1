/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
    return knex.schema.createTable('task',function(table){
        table.increments('id',{primaryKey:true})
        table.string('title',100)
        table.string('description')
        table.enu('status',['To Do','In Progress','Done'],{
            useNative:true,
            enumName:'status'
        }),
        table.enu('priority',['urgent','high','low','critical'],{
            useNative:true,
            enumName:'priority'
        })
        table.date('due_date')
        table.timestamp('created_at').defaultTo(knex.fn.now())
        table.timestamp('updated_at').defaultTo(knex.fn.now())
    })
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('task')
  
};
