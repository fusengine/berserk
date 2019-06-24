const mongoose = require('mongoose')
const mongoURI = require('./config')
const Config = require('../../../Config').mongodb

/** Destructuration */
const {
	host,
	port,
	dbname,
	user,
	password,
	config: { newUrlParser, useCreateIndex, useFindAndModify },
} = Config

/** 
 * db
 * Get parameters information in .env 
 */
const db = mongoose.connect(mongoURI(host, port, dbname, user, password), {
	useNewUrlParser: newUrlParser,
	useCreateIndex: useCreateIndex,
	useFindAndModify: useFindAndModify,
})

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
