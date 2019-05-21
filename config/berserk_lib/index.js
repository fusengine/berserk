const PortBerserk = require('./host')
const { app, ENV } = require('./conf')
const HeaderBerserk = require('./http/header')
const RouteBerserk = require('./RouteBerserk')
const database = require('./database/mongodb')
const ViewBerserkEngine = require('./http/views')
const BuildExpressMiddleware = require('./http/BuildExpressMiddleware')

/** Options to export modules */
module.exports = {
	app,
	database,
	ENV,
	PortBerserk,
	ViewBerserkEngine,
	HeaderBerserk,
	BuildExpressMiddleware,
	RouteBerserk,
}
