const { app, ENV } = require('../berserk_lib/conf')

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
const portBerserk = () => {
	try {
		// Try if port is define in file .env
		if (PORT_APP) {
			app.listen(PORT(PORT_APP), () => {
				console.log(`Le serveur démarre sur le port ${PORT_APP}`)
			})
		} else {
			// Default port listen
			app.listen(PORT(5000), () => {
				console.log(`Le serveur démarre sur le port ${5000}`)
			})
		}
	} catch (error) {
		console.log(error)
	}
}

module.exports = portBerserk
