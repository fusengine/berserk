/**
 * @route	GET	/
 * @desc	Go to home page
 * @access	PUBLIC
 */
exports.home = router = (req, res) => {
	const title = 'Berserk'

	// passing data to view
	res.render('index', { title })
}
