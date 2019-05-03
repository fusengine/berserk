const router = require('express').Router()

/** Import Controller */
const user = require('../app/Controller/users')

/** Use Router */
router.use('/users', user)
router.use('/exemple', (req, res) => {
	res.send('My exemple')
})

/** Export Module */
module.exports = router
