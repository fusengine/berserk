const { app, ENV } = require('./Default')

/**
 * PORT Definit le port a utiliser
 * @param {Number} port Number port
 */
const PORT = portNb => ENV.PORT || portNb

/**
 * Port Define
 */
const PORT_APP = ENV.APP_PORT_LISTEN

/**
 * portBerserk 
 * Define port to listen your app
 * @param {Number} portListen Enter your port listen
 */
const Host = async () => {
	try {
		// Try if port is define in file .env
		if (PORT_APP) {
			await app.listen(PORT(PORT_APP), () => {
				console.log(`Berserk is listening port ${PORT_APP}`)
			})
		} else {
			// Default port listen
			await app.listen(PORT(5000), () => {
				console.log(`Berserk is listening port ${5000}`)
			})
		}
	} catch (error) {
		console.log(error)
	}
}

module.exports = Host
