const router = require('express').Router()

router.get('/', (req, res) => {
	res.json({ name: 'hello this is api uri' })
})

module.exports = router
