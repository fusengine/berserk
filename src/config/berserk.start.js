const Berserk = require('@fusengine/berserk-engine')

/** start berserk engine */
Berserk.engine(
	require('ENV_FILE_CONF'),
	[
		require('Config/express/cookie.config'),
		require('Config/express/session.config'),
		require('Config/modules/jwt.config'),
		//require('Config/express/passport.config'),
		require('Config/express/static.config'),
		require('Config/express/view.config'),
	],
	require('Route/api.routeBase'),
	require('Route/http.routeBase')
)
