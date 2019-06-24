const jwt = require('jsonwebtoken')
const secret = require('../../Berserk/config').secret
const JWTMessage = require('../../Berserk/Messages').JWT

const { errorAccess, errorInvalide } = JWTMessage
/**
 * Auth
 * Insérera et vérifiera si le token est existant.
 * Permet de protéger les routes.
 */
const Authentification = (req, res, next) => {
	// Insère le token dans le middleware
	const token = req.header('x-auth-berserk-token')

	// Vérifie si on n'a pas pas de token
	if (!token) {
		return res.status(401).json({ msg: errorAccess })
	}

	// Vérifie le token
	try {
		const decoded = jwt.verify(token, secret.jwtKey)

		/**
         * La requête utilisateur decode 
         * le payload présente dans 'Route/api/users.js'
         */
		req.user = decoded.user
		next()
	} catch (error) {
		res.status(401).json({ msg: errorInvalide })
	}
}

module.exports = Authentification
