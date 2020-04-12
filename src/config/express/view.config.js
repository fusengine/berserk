/**
 * This Define View to read page  to berserk
 */
let app
let path
let engine
let utils

/** 
 * View berserk
 * @param _app express 
 * @param _engine use ejs-mate
 * @param _utils Berserk utils
 * @param _path use path
 */
module.exports = (_app, _utils, _engine, _path) => {
	app = _app
	engine = _engine
	utils = _utils
	path = _path

	// Return Const
	return View
}

const View = () => {
	if (process.env.NODE_ENV === 'development') {
		utils.successMessage('View: views loaded in app.config.js')
	}

	/** config files */
	const { viewExtension } = require('ENV_FILE')

	/** define directory */
	const joinDir = path.join(__dirname, '../../views')

	/** Set file to views folder */
	app.set('views', joinDir)

	/** Go use pug or ejs */
	if (viewExtension === 'pug') {
		app.set('view engine', viewExtension)
	}
	else {
		app.engine('ejs', engine)
		app.set('view engine', viewExtension)
	}
}
