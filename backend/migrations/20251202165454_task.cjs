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
        table.enu('priority',['ugent','high priority','low priority','critical'],{
            useNative:true,
            enumName:'priority'
        })
        table.dateTime('created_at').defaultTo(knex.fn.now())
        table.dateTime('updated_at').defaultTo(knex.fn.now())
    })
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  
};
