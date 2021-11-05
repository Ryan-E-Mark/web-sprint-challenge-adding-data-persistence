const db = require('../../data/dbConfig')

async function postTask(task) {
    const newTaskId = await db('tasks').insert(task)
    return db('tasks').where('task_id', newTaskId).first()
}

function getTasks() {
    return db('tasks')
}

module.exports = {
    postTask,
    getTasks,
}
