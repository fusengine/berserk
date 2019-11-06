const path = require('path')
const engine = require('ejs-mate')
const { app, berserkUtils } = require('@fusengine/berserk-engine')

/** config files */
const { viewExtension } = require('Config/app.config')

/** define directory */
const joinDir = path.join(__dirname, '../../views')

/** Set file to views folder */
app.set('views', joinDir)

/** Go use pug or ejs */
if (viewExtension === 'pug') {
	app.set('view engine', viewExtension)
} else {
	app.engine('ejs', engine)
	app.set('view engine', viewExtension)
}

if (process.env.NODE_ENV === 'development') {
	berserkUtils.successMessage('View: views loaded in app.config.js')
}
