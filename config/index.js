const portBerserk = require('./host')
const database = require('./database')
const app = require('./app')
const ENV = require('./dotenv')
const api = require('../routes/api')
const route = require('../routes/route')

/** Options to export modules */
module.exports = {
	api,
	app,
	database,
	ENV,
	portBerserk,
	route
}
