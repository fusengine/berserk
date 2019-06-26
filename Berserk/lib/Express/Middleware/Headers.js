const app = require('../../app')
const Config = require('../../../Config').header

/** Destruturation */
const { origine, headers, method, credentials } = Config
/**
 * Header
 * Define header request
 */
const Headers = () => {
	try {
		/** Accept request header */
		app.use((req, res, next) => {
			res.header('Access-Control-Allow-Origin', origine)
			res.header('Access-Control-Allow-Headers', headers)
			res.header('Access-Control-Allow-Methods', method)
			res.header('Access-Control-Allow-Credentials', credentials)
			next()
		})
	} catch (error) {
		console.error(error)
	}
}

module.exports = Headers
