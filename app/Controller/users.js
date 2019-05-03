const router = require('express').Router()

router.get('/', (req, res) => {
	res.send('Hello page user')
})

module.exports = router
