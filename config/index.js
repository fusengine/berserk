const portBerserk = require('./host')
const database = require('./database')
const app = require('./app')
const ENV = require('./dotenv')

/** Options to export modules */
module.exports = {
	app,
	database,
	portBerserk,
	ENV
}
