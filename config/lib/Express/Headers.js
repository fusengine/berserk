const app = require('../Default')
const berserkConf = require('../../config')

/**
 * Header
 * Define header request
 */
const Headers = () => {
	try {
		/** Accept request header */
		app.use((req, res, next) => {
			res.header('Access-Control-Allow-Origin', berserkConf.header.origine)
			res.header('Access-Control-Allow-Headers', berserkConf.header.headers)
			res.header('Access-Control-Allow-Methods', berserkConf.header.method)
			res.header('Access-Control-Allow-Credentials', berserkConf.header.credentials)
			next()
		})
	} catch (error) {
		console.error(error)
	}
}

module.exports = Headers
