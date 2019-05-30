/** Default config to berserk app */
const berserkConf = {
	/** Port to listen application default 5000 */
	portApp: '',

	/** Define path and extension to render views html default ejs*/
	view: {
		path: 'views',
		extension: 'ejs',
	},

	/** Define assets to read css, js and name path to views */
	assets: {
		dirAssets: '',
		nameAssets: '',
	},

	/** JWT Secret key */
	secretKeyJWT: '',

	/** Define route path */
	routerPath: {
		api: '/api',
		route: '/',
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
		},
	},
}

module.exports = berserkConf
