const db = require('../../data/dbConfig')

async function postProject(project) {
    const newProjectId = await db('projects').insert(project)
    return db('projects').where('project_id', newProjectId).first()
}

function getProjects() {
    return db('projects')
}

module.exports = {
    postProject,
    getProjects,
}
