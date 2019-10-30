const bcrypt = require('bcrypt')

/**
 * HashPassword
 * Use bcrypt to hash password
 * 
 * @param {String} pwd hash password
 * @param {Number} saltNumber length to crypt password
 */
exports.HashPassword = async (pwd, saltNumber) => {
	try {
		const salt = await bcrypt.genSalt(saltNumber)

		return bcrypt.hash(pwd, salt)
	} catch (error) {
		throw error
	}
}

/**
 * ComparePassword
 * This is compare password
 * @param {String} password password param to compare
 */
exports.ComparePassword = async password => {
	return await bcrypt.compare(password, this.local.password)
}
