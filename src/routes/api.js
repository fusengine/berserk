const api = require('express').Router()

const { home } = require('controller/api/home.controller')

api.get('/', home)

/** Export Module */
module.exports = api
