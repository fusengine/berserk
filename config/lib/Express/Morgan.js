const app = require('../Default')
const morgan = require('morgan')

const Morgan = () => {
	app.use(morgan('dev'))
}

module.exports = Morgan
