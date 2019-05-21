const { app } = require('../Default')
const { header } = require('../../config')

/**
 * Header
 * Define header request
 */
const Headers = () => {
	try {
		/** Accept request header */
		app.use((req, res, next) => {
			res.header('Access-Control-Allow-Origin', header.origine)
			res.header('Access-Control-Allow-Headers', header.headers)
			res.header('Access-Control-Allow-Methods', header.method)
			res.header('Access-Control-Allow-Credentials', header.credentials)
			next()
		})
	} catch (error) {
		console.error(error)
	}
}

module.exports = Headers
