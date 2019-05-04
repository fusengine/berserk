const router = require('express').Router()

/** Use Router */
router.use('/', require('../app/controller/welcome'))

/** Export Module */
module.exports = router
