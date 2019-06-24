const app = require('./app')
const MongoDB = require('./Database/mongodb')

const { Headers, Host, Middleware, Morgan, Route, Static, ViewEngine } = require('./Express')

/** Options to export modules */
module.exports = {
	app,
	MongoDB,
	Host,
	ViewEngine,
	Static,
	Headers,
	Middleware,
	Morgan,
	Route,
}
