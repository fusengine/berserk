const jwt = require('jsonwebtoken')
const { secretKey } = require('../../config/config')

/**
 * Auth
 * Inserera et vérifiera si le token est existant.
 * Permet de protéger les routes.
 */
const Authentification = (req, res, next) => {
	// Insere le token dans le middleware
	const token = req.header('x-auth-berserk-token')

	// Verifie si on n'a pas pas de token
	if (!token) {
		return res.status(401).json({ msg: 'Authorisation Refusé.' })
	}

	// Vérifie le token
	try {
		const decoded = jwt.verify(token, secretKey.JWT)

		/**
         * La requete utilisateur decode 
         * le payload présente dans 'Route/api/users.js'
         */
		req.user = decoded.user
		next()
	} catch (error) {
		res.status(401).json({ msg: 'Authorisation invalide.' })
	}
}

module.exports = Authentification
