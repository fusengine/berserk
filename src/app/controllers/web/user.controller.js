/** Queries */
const { registerUser, findUserPerEmail } = require('Model/Queries/user.queries')

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
				req.login(user)
				res.redirect('/users/account')
			}
		}
	} catch (error) {
		console.log(error.user)
		res.render('users/signup', { error, title: 'Register user' })
	}
}
