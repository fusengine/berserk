/**
 * This add JWT token to login app
 */
let app
let jwt
let utils

/** 
 * Jwt Berserk
 * @param _app express 
 * @param _utils Berserk utils
 * @param _jwt use jwt
 */
module.exports = (_app, _utils, _jwt) => {
	app = _app
	jwt = _jwt
	utils = _utils

	// Return Const
	return Jwt
}

const Jwt = () => {
	utils.successMessage('JWT: JWT loaded')

	/** Secret jwt */
	const SecretKeyJwt = require('../../env').JWT.secret

	/** Query */
	const { findUserPerId } = require('Berserk/queries/user.queries')

	/**
 * createJwtToken
 * Create token per user id
 * 
 * @param {String} user define user id to sign token
 */
	exports.createJwtToken = ({ user = null, id = null }) => {
		const jwtToken = jwt.sign(
			{
				id: id || user._id.toString(),

				exp: Math.floor(Date.now() / 1000) + 5,
			},
			SecretKeyJwt
			// { expiresIn: '5' }
		)
		return jwtToken
	}

	/**
 * checkExpireToken
 * this refresh token
 * @param {*} token 
 * @param {*} res 
 */
	const checkExpireToken = (token, res) => {
		const tokenExp = token.exp
		const nowInSec = Math.floor(Date.now() / 1000)

		if (nowInSec <= tokenExp) {
			return token
		}
		else if (nowInSec > tokenExp && nowInSec - tokenExp < 60 * 60 * 24) {
			const refreshToken = this.createJwtToken({ id: token.id })
			res.cookie('jwt', refreshToken)
			return jwt.verify(refreshToken, SecretKeyJwt)
		}
		else {
			throw new Error('Token expire')
		}
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
				let decodedToken = jwt.verify(token, SecretKeyJwt, { ignoreExpiration: true })
				// auto refresh token
				decodedToken = checkExpireToken(decodedToken, res)
				const user = await findUserPerId(decodedToken.id)
				if (user) {
					req.user = user
					next()
				}
				else {
					res.clearCookie('jwt')
					res.redirect('/')
				}
			} catch (e) {
				console.log(e)
				res.clearCookie('jwt')
				res.redirect('/')
			}
		}
		else {
			next()
		}
	}

	/**
 * addJwtFeatures
 * 
 * This add method helpers to access express
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
	const addJwtFeatures = (req, res, next) => {
		req.isAuthenticated = () => !!req.user
		req.logout = () => res.clearCookie('jwt')
		req.login = (user, callback = null) => {
			if (callback) {
				const token = this.createJwtToken({ user })
				callback
				res.cookie('jwt', token)
			}
			else {
				const token = this.createJwtToken({ user })
				res.cookie('jwt', token)
			}
		}
		next()
	}

	/** express use middleware */
	app.use(extractUserFromToken)
	app.use(addJwtFeatures)
}
