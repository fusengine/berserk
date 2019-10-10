const api = require('express').Router()

const { home } = require('Berserk/controllers/api/home.controller')

api.get('/', home)

/** Export Module */
module.exports = api
