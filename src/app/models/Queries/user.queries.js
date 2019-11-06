const { User } = require('../Database/index')

/**
 * Register user
 * @param {String} body
 */
exports.registerUser = async body => {
	try {
		const { username, email, password } = body

		const user = new User({
			username,
			local: { email, password },
		})

		user.local.password = await User.HashPassword(password)

		return await user.save()
	} catch (error) {
		throw error
	}
}

/**
 * Search user per email
 * @param {String} email
 */
exports.findUserPerEmail = email => {
	return User.findOne({ 'local.email': email }).exec()
}

/**
 * findUserPerEmail
 * Search user per id
 * @param {String|Number} id
 */
exports.findUserPerId = id => {
	return User.findOne({ _id: id }).exec()
}
