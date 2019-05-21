const { app } = require('./conf')
const api = require('../../routes/api')
const route = require('../../routes/route')
const { routerPath } = require('../config.js')

/**
 * Define initial route to run api 
 * and default route
 */
const RouteBerserk = () => {
	try {
		app.use(routerPath.api, api)
		app.use(routerPath.route, route)
	} catch (error) {
		console.error(error)
	}
}

module.exports = RouteBerserk
