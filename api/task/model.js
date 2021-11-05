const db = require('../../data/dbConfig')

async function postTask(task) {
    const newTask = await db('tasks').insert(task)
    return newTask
}

function getTasks() {
    return db('tasks')
}

module.exports = {
    postTask,
    getTasks,
}
