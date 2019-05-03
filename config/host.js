const app = require('./app')
const ENV = require('./dotenv')

/**
 * PORT Definit le port a utiliser
 * @param {Number} port Number port
 */
const PORT = (portNb) => ENV.PORT || portNb
const ip = '0.0.0.0'
const PORT_APP = ENV.APP_PORT_LISTEN

/**
 * portBerserk 
 * Define port to listen your app
 * @param {Number} portListen Enter your port listen
 */
const portBerserk = () => {
	try {
		if (PORT_APP) {
			app.listen(PORT(PORT_APP), ip, () => {
				console.log(`Le serveur démarre sur le port ${PORT_APP}`)
			})
		} else {
			app.listen(PORT(5000), ip, () => {
				console.log(`Le serveur démarre sur le port ${5000}`)
			})
		}
	} catch (error) {
		console.log(error)
	}
}

module.exports = portBerserk
