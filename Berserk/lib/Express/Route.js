const app = require('../app')
const apiBerserk = require('../../../routes/api')
const webBerserk = require('../../../routes/web')
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
		app.use(route, webBerserk)
	} catch (error) {
		console.error(error)
	}
}

module.exports = Route
