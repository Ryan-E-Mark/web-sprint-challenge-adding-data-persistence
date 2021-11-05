const db = require('../../data/dbConfig')

async function postResource(resource) {
    const newResource = await db('resources').insert(resource)
    return newResource
}

function getResources() {
    return db('resources')
}

module.exports = {
    postResource,
    getResources,
}
