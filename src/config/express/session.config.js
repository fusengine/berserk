/**
 * This add Session to berserk
 */
let app
let session
let utils

/** 
 * Session berserk
 * @param _app express 
 * @param _utils Berserk utils
 * @param _session use express-session
 */
module.exports = (_app, _utils, _session) => {
	app = _app
	session = _session
	utils = _utils

	// Return Const
	return Session
}

const Session = () => {
	/** config file */
	const { sessionOption } = require('ENV_FILE')

	/**
	* Cookie
	* Define signed cookie application
	*/
	app.use(session(sessionOption))

	if (process.env.NODE_ENV === 'development') {
		utils.successMessage('Session: session loaded')
	}
}
