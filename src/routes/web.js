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
web.use('/users', require('./http/user.route'))
web.use('/auth', require('./http/auth.route'))

/** Export Module */
module.exports = web
