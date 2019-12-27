const { app, berserkUtils } = require('@fusengine/berserk-engine')
const session = require('express-session')

/** config file */
const { sessionOption } = require('ENV_FILE')

/**
 * Cookie
 *  define signed cookie application
 */
app.use(session(sessionOption))

if (process.env.NODE_ENV === 'development') {
	berserkUtils.successMessage('Session: session loaded')
}
