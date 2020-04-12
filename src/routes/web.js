const web = require('express').Router()

/**
 * @route	GET	api/
 * @desc	Home page
 * PUBLIC
 */
web.get('/', (req, res) => {
	res.render('home', { user: req.user, title: 'home' })
})

/** Groupe Route */
web.use('/users', require('./web/user.route'))
web.use('/auth', require('./web/auth.route'))

/** Export Module */
module.exports = web
