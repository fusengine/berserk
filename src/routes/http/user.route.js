const web = require('express').Router()

/** Config Guard */
const { guardCheckIsAuthenticated } = require('Config/guard.config')

/** Controller */
const { userForm, userCreate } = require('Controller/web/user.controller')

/** 
 * @route	GET		/users/signup
 * @desc	Go to user subscription page
 * public
 */
web.get('/signup', userForm)

/** 
 * @route	POST	/users/signup
 * @desc	Send to register user
 * public
 */
web.post('/signup', userCreate)

/** 
 * @route	GET		/users/account
 * @desc	Go to user Page
 * PRIVATE
 */
web.get('/account', guardCheckIsAuthenticated, (req, res) => {
	res.render('users/index', { user: req.user, title: 'home' })
})

module.exports = web
