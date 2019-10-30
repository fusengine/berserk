/** Queries */
const { createUser } = require('Model/Queries/user.queries')

/**
 * userForm
 * @route   GET /users/signup
 * @desc    Go to user subscription page
 * PUBLIC
 */
exports.userForm = (req, res, next) => {
	res.render('users/signup', { title: 'subscribe you', error: null })
}

/**
 * userForm
 * @route   POST /users/signup
 * @desc    Send form to register user
 * PUBLIC
 */
exports.userCreate = async (req, res, next) => {
	try {
		const body = req.body
		const user = await createUser(body)
		req.login(user)
		res.redirect('/users/account')
	} catch (e) {
		const err = Object.keys(e.errors).map(key => e.errors[key].message)

		res.render('users/signup', { error: err, title: 'subscribe you' })
	}
}
