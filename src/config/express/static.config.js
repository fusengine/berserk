/**
 * This add Static file  to berserk
 */
let app
let path
let express
let utils

/** 
 * Static berserk
 * @param _app express 
 * @param _express use express globaly
 * @param _utils Berserk utils
 * @param _path use path
 */
module.exports = (_app, _utils, _express, _path) => {
	app = _app
	express = _express
	utils = _utils
	path = _path

	// Return Const
	return Static
}

const Static = () => {
	if (process.env.NODE_ENV === 'development') {
		utils.successMessage('Static: express.static loaded in app.config.js')
	}

	/**  Env Files*/
	const { directory, pathName } = require('ENV_FILE').assets

	/** Directory to assets */
	const assetsDir = path.join(__dirname, '../../../' + directory)

	/**
	 * StaticFile
	 * @param {String} fileDirectory this is a directory to your assets
	 *  @param {String} nameAssets this is a name to your assets
	 */
	app.use(pathName, express.static(assetsDir))
}
