const router = require('express').Router()

/** Use Router */
router.use('/', require('../app/Controller/http/welcome'))

/** Export Module */
module.exports = router
