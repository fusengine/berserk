const app = require('../../app')
const apiBerserk = require('../../../../routes/api')
const webBerserk = require('../../../../routes/web')
const Config = require('../../../Config.js').router

/** Destruturation */
const { api, web } = Config

/**
 * Define initial route to run api 
 * and default route
 */
const Route = () => {
	try {
		app.use(api, apiBerserk)
		app.use(web, webBerserk)
	} catch (error) {
		console.error(error)
	}
}

module.exports = Route
