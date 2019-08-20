/**
 * @route	GET	api/
 * @desc	Go to home page
 * @access	PUBLIC
 */
exports.home = (req, res) => {
	res.json({ name: 'Api Berserk 😊' })
}
