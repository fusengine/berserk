const portBerserk = require('./host')
const database = require('./database/mongodb')
const { app, ENV } = require('./conf')
const api = require('../../routes/api')
const viewBerserkEngine = require('./http/views')
const route = require('../../routes/route')

/** Options to export modules */
module.exports = {
	api,
	app,
	database,
	ENV,
	portBerserk,
	route,
	viewBerserkEngine,
}
