module.exports = {
	/**
	 * port
	 * Define port to listen app 
	 * @param {String|number} port define your custom port
	 */
	port: '',

	/** Define Header Request */
	header: {
		origine: '*',
		headers: 'Origin, X-Requested-With, Content-Type, Accept, token-berserk',
		method: 'PUT, POST, GET, DELETE, OPTIONS',
		credentials: true,
	},

	/**
	 * urlEncoded
	 * @param {Boolean} urlencoded by default false
	 */
	encoded: true,

	/**
	 * morganOption
	 * @param {String} morganOption
	 * option: dev, tiny, combined
	 * other option go to https://github.com/expressjs/morgan#readme
	 */
	morgan: '',

	/**
	 * viewExtension
	 * @param {String} viewExtension extension file ejs or pug
	 */
	viewExtension: 'ejs',

	/**
	 * assets
	 * @param {String} dir create your directory to put you js, css and image
	 * @param {String} name create name to use in your ejs and pug file
	 */
	assets: {
		directory: 'src/public/assets',
		pathName: '/assets',
	},

	/**
	 * cookieParserSecretKey
	 * @param {String} cookieParserSecretKey add secret key to signe berserk with cookie-parser
	 */
	cookieParserSecretKey: 'berserk-app-key',

	/**
	 * mongoConfig
	 *
	 * @param {String} server server mongodb
	 * @param {String} user server user mongo
	 * @param {String} password password user mongodb
	 * @param {String} host server hostname and domain to mongodb
	 * @param {String} port server port mongodb
	 * @param {String} dbname server database name mongodb
	 * @param {Boolean} newUrlParser options mongodb
	 * @param {Boolean} useUnifiedTopology options mongodb
	 * @param {Boolean} useCreateIndex options mongodb
	 * @param {Boolean} useFindAndModify options mongodb
	 * @param {Integer} tryReconnectMongo options mongodb
	 * @param {Integer} intervalReconnectMongo options mongodb
	 */
	mongodb: {
		server: 'mongodb',
		user: '',
		password: '',
		host: 'localhost',
		port: '207',
		dbname: 'berserk-db',
		options: 'retryWrites=true',
		newUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true,
		useFindAndModify: false,
		// tryReconnectMongo: 5,
		// intervalReconnectMongo: 500,
	},

	/**
	 * Json web token Secret
	 */
	JWT: {
		secret: 'a2463421-b798-470a-b4ee-fd23783ec69d',
	},

	/**
	 * sessionOption
	 */
	sessionOption: {
		secret: 'berserk-Key-app',
		resave: false,
		name: '',
		saveUninitialized: true,
		cookie: {
			httpOnly: true,
			maxAge: 60000,
		},
	},

	/**
	 * Configuration to send email
	 * @param {String} from add email sender
	 * @param {String} host add email hosting
	 * @param {String|Number} port add port host to send email
	 * @param {Boolean} secure define if host is secure true and false
	 * @param {String} user add email user to authenticate on your hosting
	 * @param {String} password add password user email to authenticate on your host
	 */
	mailer: {
		from: 'Berserk Mail <hello@exemple.com>',
		host: 'smtp.exemple.com',
		port: 587,
		secure: false,
		auth: {
			user: 'hello@exemple.com',
			password: 'my password',
		},
	},
}
