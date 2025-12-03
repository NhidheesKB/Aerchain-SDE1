/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  // await knex('task').del()
  await knex('task').insert([
    {
      title: "Create Dashboard UI",
      description: "Design and develop the task dashboard layout.",
      status: "To Do",
      priority: "urgent",
      due_date: "2025-12-08"
    },
    {
      title: "Improve Mobile UI",
      description: "Enhance responsiveness for mobile devices.",
      status: "To Do",
      priority: "low",
      due_date: "2025-12-15"
    },
    {
    title: "Fix Login Issue",
    description: "Resolve the login API failure on production.",
    status: "In Progress",
    priority: "critical",
    due_date: "2025-12-10"
  },
  {
    title: "Add Notifications",
    description: "Implement email notifications for task updates.",
    status: "In Progress",
    priority: "high",
    due_date: "2025-12-12"
  },
  {
    title: "Database Cleanup",
    description: "Remove unused tables and optimize indexes.",
    status: "Done",
    priority: "low",
    due_date: "2025-12-05"

  }

  ]);
};
