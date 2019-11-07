const web = require('express').Router()

/** Config Guard */
const { guardian } = require('Config/modules/guard.config')

/** Controller */
const {
	userForm,
	userCreate,
	initResetPassword,
	resetPasswordForm,
	sendNewPassword,
} = require('Controller/web/user.controller')

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
web.get('/account', guardian, (req, res) => {
	const user = req.user
	res.render('users/index', { user: req.user, title: 'home', user })
})

/** 
 * @route	Post	/users/forget-password
 * @desc	Send email link to change password
 * PUBLIC
 */
web.post('/forget-password', initResetPassword)

/** 
 * @route	get	/users/forget-password/:userId/:token
 * @desc	Render view form to reset password
 * PUBLIC
 */
web.get('/forget-password/:userId/:token', resetPasswordForm)

/** 
 * @route	POST	/users/forget-password/:userId/:token
 * @desc	Change password and send on database
 * PUBLIC
 */
web.post('/forget-password/:userId/:token', sendNewPassword)

module.exports = web
