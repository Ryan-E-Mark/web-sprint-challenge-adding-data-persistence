const db = require('../../data/dbConfig')

async function postTask(task) {
    const newTaskId = await db('tasks').insert(task)
    const newTask = await db('tasks').where('task_id', newTaskId).first()

    if (newTask.task_completed === 0) {
        newTask.task_completed = false
    } else {
        newTask.task_completed = true
    }
    return newTask
}

async function getTasks() {
    const tasks = await db('tasks as t')
        .join('projects as p', 'p.project_id', 't.project_id')
        .select('t.task_id', 't.task_description', 't.task_notes', 't.task_completed', 'p.project_name', 'p.project_description')

    tasks.map(task => {
        if (task.task_completed === 0) {
            task.task_completed = false
        } else {
            task.task_completed = true
        }
    })
    return tasks
}

module.exports = {
    postTask,
    getTasks,
}
