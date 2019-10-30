const Model = require('mongoose').model

/** Schema  */
const UserSchema = require('./Schema/user.schema')

/** Define your model */
exports.User = Model('user', UserSchema)
