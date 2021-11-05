const express = require('express')

const router = express.Router()

router.get('/', async (req, res, next) => {
    try {
        res.send('GET REQUEST for api/resources connected')
    } catch (err) {
        next(err)
    }
})

router.post('/', async (req, res, next) => {
    try {
        res.send('POST REQUEST for api/resources connected')
    } catch (err) {
        next(err)
    }
})

module.exports = router
