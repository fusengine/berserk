const { findUserPerEmail } = require('Model/Queries/user.queries')

/**
 * signForm
 * @route   GET /auth/signin
 * @desc    Go to user login page
 * PUBLIC
 */
exports.signForm = (req, res, next) => {
	res.render('auth/signin', { title: 'Login page', error: null })
}

/**
 * signin
 * @route   POST /users/signin
 * @desc    Go to user send information to signin
 * PUBLIC
 */
exports.signin = async (req, res, next) => {
	try {
		const { email, password } = req.body
		const user = await findUserPerEmail(email)
		if (user) {
			const match = await user.comparePassword(password)
			if (match) {
				req.login(user)
				res.redirect('/protected')
			} else {
				res.render('auth/signin', { error: 'Wrong password', title: 'Login page' })
			}
		} else {
			res.render('auth/signin', { error: 'User not found', title: 'Login page' })
		}
	} catch (e) {
		next(e)
	}
}

/**
 * signin
 * @route   get /users/signout
 * @desc    Go to user déconnections
 * PUBLIC
 */
exports.signout = (req, res, next) => {
	req.logout()
	res.redirect('/')
}
