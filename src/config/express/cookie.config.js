const { app, berserkUtils } = require('@fusengine/berserk-engine')
const cookieParser = require('cookie-parser')

/** config files */
const { cookieParserSecretKey } = require('ENV_FILE_CONF')

/**
 * CookieParser
 * @param {String} secretCookie define signed cookie application
 */

app.use(cookieParser(cookieParserSecretKey))

if (process.env.NODE_ENV === 'development') {
	berserkUtils.successMessage('Cookie: cookie-parser loaded in app.config.js')
}
