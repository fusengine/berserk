const web = require('express').Router()

web.get('/', (req, res) => {
	res.json({ name: 'hello this is api uri' })
})

module.exports = web
