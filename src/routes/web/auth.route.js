const web = require('express').Router()

const { signForm, signin, signout } = require('Controller/http/auth.controller')

/** 
 * @route	GET		/auth/signin
 * @desc	Go to user Page login page
 * PUBLIC
 */
web.get('/signin', signForm)

/** 
 * @route	POST	/auth/signin
 * @desc	Go to signin send information
 * PUBLIC
 */
web.post('/signin', signin)

/** 
 * @route	GET		/auth/signout
 * @desc	Go to user déconnexion
 * PUBLIC
 */
web.get('/signout', signout)

module.exports = web
