const { User } = require('../Database/index')

/**
 * createUser
 * this create user
 * @param {String} body
 */
exports.createUser = async body => {
	try {
		const hashedPassword = await User.hashPassword(body.password)
		console.log(hashedPassword)
		const user = new User({
			username: body.username,
			local: {
				email: body.email,
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
