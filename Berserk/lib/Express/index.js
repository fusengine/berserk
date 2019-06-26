const ViewEngine = require('./Middleware/ViewEngine')
const Middleware = require('./Middleware/Middleware')
const Static = require('./Middleware/Static')
const Headers = require('./Middleware/Headers')
const Morgan = require('./Middleware/Morgan')
const Route = require('./Middleware/Route')
const Host = require('./Middleware/Host')

/** Start module express js */
const Express = () => {
	console.log('Starting Express')

	/** Define To use View  */
	ViewEngine()

	/** Build Middleware Function */
	Middleware()

	/** Define add a Static file */
	Static()

	/** define to accepte Request */
	Headers()

	/** Morgan */
	Morgan()

	/** Listen api and route */
	Route()

	/** Define port Listen */
	Host()
}

module.exports = Express
