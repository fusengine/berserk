const { app } = require('../conf')
const { header } = require('../../config')

/**
 * HeaderBerserk
 * Define header request
 */
const HeaderBerserk = () => {
	try {
		if (header) {
			/** Accept request header */
			app.use((req, res, next) => {
				res.header('Access-Control-Allow-Origin', header.origine)
				res.header('Access-Control-Allow-Headers', header.headers)
				res.header('Access-Control-Allow-Methods', header.method)
				next()
			})
		} else {
			/** Accept request header */
			app.use((req, res, next) => {
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

module.exports = HeaderBerserk
