const uuid = require('uuid')
const moment = require('moment')

/** Queries */
const { registerUser, findUserPerEmail, findUserPerId } = require('Berserk/queries/user.queries')

/** Model */
const { User } = require('Database')

/** email */
const EmailFactory = require('Berserk/email/EmailFactory')

/**
 * @route   GET /users/signup
 * @desc    Go to user subscription page
 * PUBLIC
 */
exports.userForm = (req, res, next) => {
	if (req.isAuthenticated()) {
		res.redirect('/users/account')
	} else {
		res.render('users/signup', { title: 'Register user', error: null })
	}
}

/**
 * @route   POST /users/signup
 * @desc    Send form to register user
 * PUBLIC
 */
exports.userCreate = async (req, res, next) => {
	try {
		const body = req.body
		let user = await findUserPerEmail(body.email)

		if (user) {
			res.status(402)
			res.render('users/signup', {
				title: 'Register user',
				error: {
					user: ' User exist!',
					password: 'Password required',
					email: 'Email required',
				},
			})
		} else {
			if (body.password.length === 0 || body.password.email) {
				res.status(402)
				res.render('users/signup', {
					title: 'Register user',
					error: { password: 'Password required', email: 'Email required' },
				})
			} else {
				user = await registerUser(body)

				EmailFactory.welcome({
					subject: 'Subscription to Berserk',
					to: user.local.email,
					username: user.username,
					message: `Welcome to berserk framework ${user.username}`,
				})

				req.login(user)

				res.redirect('/users/account')
			}
		}
	} catch (error) {
		console.log(error.user)
		res.render('users/signup', { error, title: 'Register user' })
	}
}

/** 
 * @route	POST	/forget-password
 * @desc	Send email link to change password
 * PUBLIC
 */
exports.initResetPassword = async (req, res, next) => {
	try {
		const { email } = req.body

		if (email) {
			const user = await findUserPerEmail(email)

			if (user) {
				user.local.passwordToken = uuid()
				user.local.passwordTokenExpiration = moment()
					.add(2, 'hours')
					.toDate()

				await user.save()

				EmailFactory.resetLinkPassword({
					subject: 'Reset password Berserk',
					to: user.local.email,
					host: req.headers.host,
					username: user.username,
					userId: user._id,
					token: user.local.passwordToken,
					message: `Do you request reset password on ${user.local.email}`,
				})

				return res.status(200).end()
			}
			return res.status(400).json('User not exist!')
		}
	} catch (error) {
		next(error)
	}
}

/** 
 * @route	GET	/users/forget-password/:userId/:token
 * @desc	Render form to reset password
 * PUBLIC
 */
exports.resetPasswordForm = async (req, res, next) => {
	try {
		const { userId, token } = req.params
		const user = await findUserPerId(userId)

		if (user && user.local.passwordToken === token) {
			return res.render('auth/reset-password', {
				title: 'Change password',
				error: null,
				user: user,
				url: `http://${req.headers.host}/users/forget-password/${user._id}/${user.local
					.passwordToken}`,
			})
		} else {
			return res.status(400).json(`Reset password expired.`)
		}
	} catch (error) {
		next(error)
	}
}

/** 
 * @route	POST	/users/forget-password/:userId/:token
 * @desc	Change password and send on database
 * PUBLIC
 */
exports.sendNewPassword = async (req, res, next) => {
	try {
		const { password } = req.body
		const { userId, token } = req.params
		const user = await findUserPerId(userId)

		if (
			password &&
			user &&
			user.local.passwordToken === token &&
			moment() < moment(user.local.passwordTokenExpiration)
		) {
			user.local.password = await User.HashPassword(password)
			user.local.passwordToken = null
			user.local.passwordTokenExpiration = null
			await user.save()
			req.login(user)
			return res.redirect('/')
		} else {
			return res.render('auth/reset-password', {
				title: 'Change password',
				error: 'Password require!',
				user: user,
				url: `http://${req.headers.host}/users/forget-password/${user._id}/${user.local
					.passwordToken}`,
			})
		}
	} catch (error) {
		next(error)
	}
}
