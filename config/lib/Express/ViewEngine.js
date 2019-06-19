const path = require('path')
const app = require('../Default')
const berserkConf = require('../../config')
const engine = require('ejs-mate')

/**
  * viewBerserkEngine
  * define to view file html 
  */
const ViewEngine = () => {
	try {
		if (berserkConf.view.path) {
			// Define directory views
			const pathDir = path.join(__dirname, `../../../${berserkConf.view.path}`)

			// Define views file
			app.set('views', pathDir)
		} else {
			// Define directory views
			const pathDir = path.join(__dirname, `../../../views`)

			// Define views file
			app.set('views', pathDir)
		}

		// Try if user add extension
		if (berserkConf.view.extension) {
			// Define layout to pug
			if (berserkConf.view.extension === 'pug') {
				app.set('view engine', berserkConf.view.extension)
			}
			// Define layout to ejs
			if (berserkConf.view.extension === 'ejs') {
				app.engine('ejs', engine)
				app.set('view engine', berserkConf.view.extension)
			}
		} else {
			app.engine('ejs', engine)
			app.set('view engine', 'ejs')
		}
	} catch (error) {
		console.error(error)
	}
}

module.exports = ViewEngine
