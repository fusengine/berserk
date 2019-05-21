const Host = require('./Host')
const { app, ENV } = require('./Default')
const Route = require('./Route')
const Database = require('./Database/mongodb')

const Headers = require('./Express/Headers')
const ViewEngine = require('./Express/ViewEngine')
const BuildMiddleware = require('./Express/BuildMiddleware')

/** Options to export modules */
module.exports = {
	app,
	Database,
	ENV,
	Host,
	ViewEngine,
	Headers,
	BuildMiddleware,
	Route,
}
