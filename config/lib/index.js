const Host = require('./Host')
const app = require('./Default')
const Route = require('./Route')
const Database = require('./Database/mongodb')

const Static = require('../lib/Express/Static')
const Headers = require('./Express/Headers')
const ViewEngine = require('./Express/ViewEngine')
const Middleware = require('./Express/Middleware')

const Morgan = require('./Express/Morgan')

/** Options to export modules */
module.exports = {
	app,
	Database,
	Host,
	ViewEngine,
	Static,
	Headers,
	Middleware,
	Morgan,
	Route,
}
