/** Start module express js */
module.exports = Express = () => {
	console.log('Starting Express')

	/** Define To use View  */
	require('./Modules').ViewEngine()

	/** Build Middleware Function */
	require('./Modules').Middleware()

	/** Define add a Static file */
	require('./Modules').Static()

	/** define to accepte Request */
	require('./Modules').Headers()

	/** Morgan */
	require('./Modules').Morgan()

	/** Listen api and route */
	require('./Modules').Route()

	/** Define port Listen */
	require('./Modules').Host()
}
