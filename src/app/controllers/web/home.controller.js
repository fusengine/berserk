/**
 * @route	GET	/
 * @desc	Go to home page
 * @access	PUBLIC
 */
exports.home = router = (req, res) => {
	const title = 'Berserk'

	if (req.session.views) {
		req.session.views += 1
	} else {
		req.session.views = 1
	}

	console.log(req.session)
	// passing data to view
	res.render('index', { title })
}
