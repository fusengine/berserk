const app = require('../../../app')

/**
 * Define error middleware
 */
const Errors = () => {
	/** Custom page 404 */
	app.use(function(req, res, next) {
		res.status(404)

		if (req.accepts('html')) {
			res.render('errors/404', { url: req.url })
			return
		}

		// respond with json
		if (req.accepts('json')) {
			res.send({ error: 'Not found' })
			return
		}

		return
	})

	/** Define if is Production or dev to look error page */
	app.use((err, req, res, next) => {
		const env = process.env.NODE_ENV

		if (env === 'production') {
			console.log(env)
			res.status(500).render('errors/500', {
				error: {
					code: err.code || 500,
					message: err.message,
				},
			})
		} else {
			res.status(500).render('errors/500', {
				error: {
					code: err.code || 500,
					message: err.message,
					stack: err.stack,
				},
			})
		}
	})
}

module.exports = Errors
