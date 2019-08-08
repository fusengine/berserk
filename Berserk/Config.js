/** Default config to berserk app */
module.exports = {
	/** Port to listen application default 5000 */
	portApp: '',

	/** Define path and extension to render views html default ejs*/
	view: {
		pathBerserk: 'views',
		extension: 'ejs',
	},

	/** Define assets to read css, js and name path to views */
	assets: {
		dir: '',
		name: '',
	},

	/** Define morgan */
	morgan: {
		conf: 'dev',
	},

	/** JWT Secret key */
	secret: {
		jwtKey: '',
	},

	/** Define route path */
	router: {
		api: '/api',
		web: '/',
	},

	/** Define Header Request */
	header: {
		origine: '*',
		headers: 'Origin, X-Requested-With, Content-Type, Accept, token',
		method: 'PUT, POST, GET, DELETE, OPTIONS',
		credentials: true,
	},

	/** Mongo db */
	mongodb: {
		host: '',
		port: '',
		dbname: '',
		user: '',
		password: '',

		/** Config Mongo */
		config: {
			newUrlParser: true,
			useCreateIndex: true,
			useFindAndModify: false,
			tryReconnectMongo: 5,
			intervalReconnectMongo: 500,
		},
	},
}
