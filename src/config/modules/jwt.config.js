const jwt = require('jsonwebtoken')
const { app, berserkUtils } = require('@fusengine/berserk-engine')

berserkUtils.successMessage('JWT: JWT in app.config.js')

/** Secret jwt */
const SecretKeyJwt = require('../app.config').JWT.secret

/** Query */
const { findUserPerId } = require('Model/Queries/user.queries')

/**
 * createJwtToken
 * Create token per user id
 * 
 * @param {String} user define user id to sign token
 */
exports.createJwtToken = user => {
	const jwtToken = jwt.sign(
		{
			id: user._id,
			user: {
				name: user.username,
			},
			expireIn: '1h',
		},
		SecretKeyJwt
	)
	return jwtToken
}

/**
 * extractUserFromToken
 * 
 * This extract user form token
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
const extractUserFromToken = async (req, res, next) => {
	// request token jwt
	const token = req.cookies.jwt

	// if have a token
	if (token) {
		try {
			const decodedToken = jwt.verify(token, SecretKeyJwt)
			console.log(decodedToken)
			const user = await findUserPerId(decodedToken.id)
			if (user) {
				req.user = user
				next()
			} else {
				res.clearCookie('jwt')
				res.redirect('/')
			}
		} catch (e) {
			console.log(e)
			res.clearCookie('jwt')
			res.redirect('/')
		}
	} else {
		next()
	}
}

/**
 * addJwtFeatures
 * 
 * This add method helpers to request express
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
const addJwtFeatures = (req, res, next) => {
	req.isAuthenticated = () => !!req.user
	req.logout = () => res.clearCookie('jwt')
	req.login = user => {
		const token = this.createJwtToken(user)
		res.cookie('jwt', token)
	}
	next()
}

/** express use middleware */
app.use(extractUserFromToken)
app.use(addJwtFeatures)
