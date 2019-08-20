const web = require('express').Router()

/** Controller */
const { home } = require('controller/web/home.controller')

/**
 * @route	GET	api/
 */
web.get('/', home)

/** Export Module */
module.exports = web
