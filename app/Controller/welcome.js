const router = require('express').Router()

router.get('/', (req, res) => {
	const name = 'World'
	const title = 'welcome'

	// passing data to view
	res.render('index', { name, title })
})

module.exports = router
