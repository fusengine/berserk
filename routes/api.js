const api = require('express').Router()

/** Use Router */
api.use('/', require('../app/controller/users'))

/** Export Module */
module.exports = api
