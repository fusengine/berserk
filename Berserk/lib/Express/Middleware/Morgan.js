const app = require('../../app')
const morgan = require('morgan')
const Config = require('../../../Config').morgan.conf

/** Listen to app request url */
const Morgan = () => {
	app.use(morgan(Config))
}

module.exports = Morgan
