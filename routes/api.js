const api = require('express').Router()

/** Controller */
const { home } = require('../app/Controller/api/home.controller')

/**
 * @route	GET	api/
 */
api.get('/', home)

/** Export Module */
module.exports = api
