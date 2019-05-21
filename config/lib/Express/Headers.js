const { app } = require('../Default')
const { header } = require('../../config')

/**
 * Header
 * Define header request
 */
const Headers = async () => {
	try {
		if (header) {
			/** Accept request header */
			await app.use((req, res, next) => {
				res.header('Access-Control-Allow-Origin', header.origine)
				res.header('Access-Control-Allow-Headers', header.headers)
				res.header('Access-Control-Allow-Methods', header.method)
				next()
			})
		} else {
			/** Accept request header */
			await app.use((req, res, next) => {
				res.header('Access-Control-Allow-Origin', '*')
				res.header(
					'Access-Control-Allow-Headers',
					'Origin, X-Requested-With, Content-Type, Accept, token'
				)
				res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS')
				next()
			})
		}
	} catch (error) {
		console.error(error)
	}
}

module.exports = Headers
