const api = require('express').Router()

api.use('/', require('../app/Controller/api/welcome'))

/** Export Module */
module.exports = api
