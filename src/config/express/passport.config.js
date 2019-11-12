const { app, berserkUtils } = require('@fusengine/berserk-engine')
const passport = require('passport')

/** init passport */
app.use(passport.initialize())
app.use(passport.session())

if (process.env.NODE_ENV === 'development') {
	berserkUtils.successMessage('Passport: passport loaded')
}
