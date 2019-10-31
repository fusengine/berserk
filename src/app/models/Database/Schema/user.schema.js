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

/** hashPassword */
UserSchema.statics.hashPWD = password => {
	return HashPassword(password, 10)
}
console.log(this.local)
/** comparePassword with connexion */
UserSchema.methods.comparePWD = (password, userPassword) => {
	return ComparePassword(password, userPassword)
}

module.exports = UserSchema
