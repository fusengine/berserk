/** Queries */
const { createUser, findUserPerEmail } = require('Model/Queries/user.queries')

/**
 * userForm
 * @route   GET /users/signup
 * @desc    Go to user subscription page
 * PUBLIC
 */
exports.userForm = (req, res, next) => {
	if (req.isAuthenticated()) {
		res.redirect('/users/account')
	} else {
		res.render('users/signup', { title: 'subscribe you', error: null })
	}
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
		const userExist = await findUserPerEmail(body.email)

		if (userExist) {
			res.render('users/signup', { title: 'subscribe you', error: ' User exist!' })
		} else {
			const user = await createUser(body)
			req.login(user)
			res.redirect('/users/account')
		}
	} catch (e) {
		const err = Object.keys(e.errors).map(key => e.errors[key].message)
		console.log(e)

		res.render('users/signup', { error: err, title: 'subscribe you', errorMessage: null })
	}
}
