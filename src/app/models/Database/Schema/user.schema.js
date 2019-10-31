const schema = require('mongoose').Schema
const bcrypt = require('bcrypt')

/** Utils */
const { HashPassword, ComparePassword } = require('Config/utils.config')

const UserSchema = schema({
	local: {
		email: { type: String, required: true, unique: true },
		password: { type: String, required: true },
	},
	username: { type: String },
})

/** 
 * hashPassword 
 * @param {String} password hash password
 */

UserSchema.statics.hashPassword = password => {
	return HashPassword(password, 10)
}

/** 
 * comparePWD with connexion 
 * @param {String} password user enter password
 * @param {String} userPassword compare password
 */
UserSchema.methods.comparePassword = (password, userPassword) => {
	return ComparePassword(password, userPassword)
}

module.exports = UserSchema
