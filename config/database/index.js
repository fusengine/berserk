const mongoose = require('mongoose')
const mongoURI = require('./url')
const ENV = require('../dotenv')

/** 
 * db
 * Get paramaters information in .env 
 */
const db = mongoose.connect(
	mongoURI(
		ENV.MONGODB_USER,
		ENV.MONGODB_PASS,
		ENV.MONGODB_HOST,
		ENV.MONGODB_PORT,
		ENV.MONGODB_NAME
	),
	{
		useNewUrlParser: true,
		useCreateIndex: true,
		useFindAndModify: false
	}
)

/**
 * ConnectDB
 * Try to connect database.
 */
const ConnectDB = async () => {
	try {
		await db
		console.log('MONGODB connected')
	} catch (error) {
		const err = `MONGODB no connected: ${error.message}`
		return console.log(err)

		// console.error(error.message)
		//  Sort du prossecus en cas d'erreur
		// process.exit(1)
	}
}

module.exports = ConnectDB
