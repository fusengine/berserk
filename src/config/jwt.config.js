const jwt = require('jsonwebtoken')
const { app, berserkUtils } = require('@fusengine/berserk-engine')

berserkUtils.successMessage('Jwt: Loaded')

/** Secret jwt */
const SecretKeyJwt = require('./app.config').JWT.secret

/** Query */
const { findUserPerId } = require('Model/Queries/user.queries')

/**
 * createJwtToken
 * Create token per user id
 * 
 * @param {String} user define user id to sign token
 */
exports.createJwtToken = user => {
	const jwtToken = jwt.sign({ sub: user._id.toString() }, SecretKeyJwt)
	console.log('create token:', jwtToken)
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
			const user = await findUserPerId(decodedToken.sub)
			if (user) {
				req.user = user
				next()
			} else {
				res.clearCookie('jwt')
				res.redirect('/')
			}
		} catch (e) {
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
		const token = createJwtToken(user)
		res.cookie('jwt', token)
	}
	next()
}

/** express use middleware */
app.use(extractUserFromToken)
app.use(addJwtFeatures)
