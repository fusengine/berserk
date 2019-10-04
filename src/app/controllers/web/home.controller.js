/**
 * @route	GET	/
 * @desc	Go to home page
 * @access	PUBLIC
 */
exports.home = router = (req, res) => {
	const title = 'Berserk'

	res.cookie('key', 'berserk-app', { signed: true })

	console.log(req.signedCookies)
	// passing data to view
	res.render('index', { title })
}
