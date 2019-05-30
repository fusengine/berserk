const mongoose = require('mongoose')
const mongoURI = require('./url')
const berserkConf = require('../../../config')

/** 
 * db
 * Get parameters information in .env 
 */
const db = mongoose.connect(
	mongoURI(
		berserkConf.mongodb.host,
		berserkConf.mongodb.port,
		berserkConf.mongodb.dbname,
		berserkConf.mongodb.user,
		berserkConf.mongodb.password
	),
	{
		useNewUrlParser: berserkConf.mongodb.config.newUrlParser,
		useCreateIndex: berserkConf.mongodb.config.useCreateIndex,
		useFindAndModify: berserkConf.mongodb.config.useFindAndModify,
	}
)

/**
 * ConnectDB
 * Try to connect database.
 */
const ConnectDB = async () => {
	try {
		await db
		console.log('Berserk connected on mongodb ')
	} catch (error) {
		const err = `Berserk not connected on mongodb: ${error.message}`
		return console.log(err)

		// console.error(error.message)
		//  Sort du processus en cas d'erreur
		// process.exit(1)
	}
}

module.exports = ConnectDB
