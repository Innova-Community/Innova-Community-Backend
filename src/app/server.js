const express = require('express')

const { errorResponse, Status } = require('../utils/baseResponse')

const routes = express.Router()

routes.use('/api-location', require('../routes/locations'))

routes.use((req, res, next) => {
    res.status(400).json(
        errorResponse(
            status = Status.Failed,
            code = 400,
            message = "Bad Request"
        )
    )
})

module.exports = routes