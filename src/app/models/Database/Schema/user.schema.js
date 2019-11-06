const schema = require('mongoose').Schema
const { berserkUtils } = require('@fusengine/berserk-engine')

const UserSchema = schema({
	local: {
		email: {
			type: String,
			required: [true, 'Email required'],
			unique: [true, 'Email must be unique'],
		},
		password: { type: String, required: [true, 'Password required'] },
	},
	username: { type: String },
})

/** 
 * hashPassword 
 * @param {String} password hash password
 */
UserSchema.statics.HashPassword = password => {
	return berserkUtils.hashPassword(password, 10)
}

/** 
 * comparePWD with connexion 
 * @param {String} password user enter password
 * @param {String} userPassword compare password
 */
UserSchema.methods.ComparePassword = (password, fieldUser) => {
	return berserkUtils.comparePassword(password, fieldUser)
}

module.exports = UserSchema
