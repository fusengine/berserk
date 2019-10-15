const Berserk = require('@fusengine/berserk-engine')

Berserk(
	'Config/app.config',
	'Route/api',
	'Route/web',
	'src/views',
	'src/config/auth/Passport.config.js'
)
