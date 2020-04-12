/**
 * This Define View to read page  to berserk
 */
let app
let passport
let utils

/** 
 * View berserk
 * @param _app express 
 * @param _passport use passport
 * @param _utils Berserk utils
 */
module.exports = (_app, _passport, _utils) => {
	app = _app
	passport = _passport
	utils = _utils

	// Return Const
	return Passport
}
const Passport = () => {
	if (process.env.NODE_ENV === 'development') {
		utils.successMessage('Passport: passport loaded')
	}

	/** init passport */
	app.use(passport.initialize())
	app.use(passport.session())
}
