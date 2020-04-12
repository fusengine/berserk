/**
 * This add cookie to berserk
 */
let App
let CookieParser
let Utils

/** 
 * Cookie berserk
 * @param _app express 
 * @param _utils Berserk utils
 * @param _cookieParser use cookie-parser
 */
module.exports = (_app, _utils, _cookieParser) => {
	App = _app
	CookieParser = _cookieParser
	Utils = _utils

	// Return Const
	return Cookie
}

const Cookie = () => {
	if (process.env.NODE_ENV === 'development') {
		Utils.successMessage('Cookie: cookie-parser loaded in app.config.js')
	}

	/** config files */
	const { cookieParserSecretKey } = require('ENV_FILE')

	/**
	* CookieParser
	* @param {String} secretCookie define signed cookie application
	*/
	App.use(CookieParser(cookieParserSecretKey))
}
