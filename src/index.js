const Berserk = require('@fusengine/berserk-engine')

/** start berserk engine */
Berserk.engine(
	require('Config/app.config'),
	[
		require('Config/express/cookie.config'),
		require('Config/express/session.config'),
		require('Config/modules/jwt.config'),
		//require('Config/express/passport.config'),
		require('Config/express/static.config'),
		require('Config/express/view.config'),
	],
	require('Route/api'),
	require('Route/web')
)
