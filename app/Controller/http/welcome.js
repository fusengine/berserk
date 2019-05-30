const router = require('express').Router()

router.get('/', (req, res) => {
	const name = 'Berserk use'
	const title = 'Berserk'

	// passing data to view
	res.render('index', { name, title })
})

module.exports = router
