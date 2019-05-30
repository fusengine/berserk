const api = require('../../routes/api')
const app = require('./Default')
const route = require('../../routes/route')
const berserkConf = require('../config.js')

/**
 * Define initial route to run api 
 * and default route
 */
const Route = () => {
	try {
		app.use(berserkConf.routerPath.api, api)
		app.use(berserkConf.routerPath.route, route)
	} catch (error) {
		console.error(error)
	}
}

module.exports = Route
