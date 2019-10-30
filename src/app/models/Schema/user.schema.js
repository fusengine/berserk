const bcrypt = require('bcrypt')
const schema = require('mongoose').Schema

/** Utils */
const { HashPassword, ComparePassword } = require('Config/bin/utils.config')

const UserSchema = schema({
	local: {
		email: { type: String, required: true, unique: true },
		password: { type: String, required: true },
	},
	username: { type: String },
})

/** hashPassword */
UserSchema.statics.hashPassword = async password => {
	await HashPassword(password, 10)
}

/** comparePassword with connexion */
UserSchema.methods.comparePassword = password => {
	ComparePassword(password)
}

module.exports = UserSchema
