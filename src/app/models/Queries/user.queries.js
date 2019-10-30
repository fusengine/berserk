const { User } = require('../index')

/**
 * createUser
 * this create user
 * @param {String} body
 */
exports.createUser = async body => {
	try {
		const { username, password, email } = body
		const hashedPassword = await User.hashPassword(password)
		const user = new User({
			username: username,
			local: {
				email: email,
				password: hashedPassword,
			},
		})
		console.log(user)
		return user.save()
	} catch (e) {
		throw e
	}
}

/**
 * findUserPerEmail
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
