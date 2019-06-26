const app = require('../../app')
const Config = require('../../../Config').portApp

/**
 * PORT define to use
 * @param {Number} portNb Number port
 */
const PORT = portNb => process.env.PORT || portNb

/**
 * Port Define
 */
const PORT_APP = Config

/**
 * portBerserk 
 * Define port to listen your app
 * @param {Number} portListen Enter your port listen
 */
const Host = () => {
	try {
		// Try if port is define in file .env
		if (PORT_APP) {
			app.listen(PORT(PORT_APP), () => {
				console.log(`Berserk is listening port ${PORT_APP}`)
			})
		} else {
			// Default port listen
			app.listen(PORT(5000), () => {
				console.log(`Berserk is listening : 'http://localhost:${5000}'`)
			})
		}
	} catch (error) {
		console.log(error)
	}
}

module.exports = Host
