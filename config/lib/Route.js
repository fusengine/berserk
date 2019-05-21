const api = require('../../routes/api')
const route = require('../../routes/route')
const { app } = require('./Default')
const { routerPath } = require('../config.js')

/**
 * Define initial route to run api 
 * and default route
 */
const Route = async () => {
	try {
		await app.use(routerPath.api, api)
		await app.use(routerPath.route, route)
	} catch (error) {
		console.error(error)
	}
}

module.exports = Route
