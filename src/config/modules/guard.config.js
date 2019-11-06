/**
 * guardian
 * this check if user authenticated
 * 
 * @param {*} req request
 * @param {*} res response
 * @param {*} next next execution
 */
exports.guardian = (req, res, next) => {
	if (req.isAuthenticated()) {
		next()
	} else {
		res.redirect('/auth/signin')
	}
}
