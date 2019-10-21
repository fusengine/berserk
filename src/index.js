const { engine } = require('@fusengine/berserk-engine')

/** start berserk engine */
engine(require('Config/app.config'), require('Route/api'), require('Route/web'), [
	require('Config/express/cookie.config'),
	require('Config/express/session.config'),
	require('Config/express/passport.config'),
	require('Config/express/static.config'),
	require('Config/express/view.config'),
	// require('config/upload.config'),
])
