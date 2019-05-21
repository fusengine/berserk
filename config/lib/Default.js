const dotenv = require('dotenv')
const express = require('express') /** Init express */

/** Define dotenv Config*/
dotenv.config()

/** app */
const app = express()

/** init ENV process */
const ENV = process.env

module.exports = {
	ENV,
	app,
}
