const router = require('express').Router()

router.get('/', (req, res) => {
	res.json({ name: 'hello api' })
})

module.exports = router
