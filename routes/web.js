const web = require('express').Router()

/** Use Router */
web.use('/', require('../app/Controller/http/welcome'))

/** Export Module */
module.exports = web
