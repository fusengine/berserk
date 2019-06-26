const app = require('./app')
const MongoDB = require('./Database/mongodb')

const Express = require('./Express')

/** Options to export modules */
module.exports = {
	app,
	MongoDB,
	Express,
}
