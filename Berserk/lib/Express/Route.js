const app = require('../app')
const apiBerserk = require('../../../routes/api')
const routeBerserk = require('../../../routes/route')
const Config = require('../../Config.js').routerPath

/** Destruturation */
const { api, route } = Config

/**
 * Define initial route to run api 
 * and default route
 */
const Route = () => {
	try {
		app.use(api, apiBerserk)
		app.use(route, routeBerserk)
	} catch (error) {
		console.error(error)
	}
}

module.exports = Route
