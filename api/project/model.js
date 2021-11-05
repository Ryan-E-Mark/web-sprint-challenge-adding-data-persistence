// build your `Project` model here
const db = require('../../data/dbConfig')

async function postProject(project) {
    const newProject = await db('projects').insert(project)
    return newProject
}

function getProjects() {
    return db('projects')
}

module.exports = {
    postProject,
    getProjects,
}