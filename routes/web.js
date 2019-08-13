const web = require('express').Router()

/** Controller */
const { home } = require('../app/Controller/http/home.controller')

/**
 * @route	GET	api/
 */
web.get('/', home)

/** Export Module */
module.exports = web
