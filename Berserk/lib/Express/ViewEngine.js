const app = require('../app')
const Config = require('../../Config').view
const engine = require('ejs-mate')
const path = require('path')

const { pathBerserk, extension } = Config
/**
  * viewBerserkEngine
  * define to view file html 
  */
const ViewEngine = () => {
	try {
		if (pathBerserk) {
			// Define directory views
			const pathDir = path.join(__dirname, `../../../${pathBerserk}`)

			// Define views file
			app.set('views', pathDir)
		} else {
			// Define directory views
			const pathDir = path.join(__dirname, `../../../views`)

			// Define views file
			app.set('views', pathDir)
		}

		// Try if user add extension
		if (extension) {
			// Define layout to pug
			if (extension === 'pug') {
				app.set('view engine', extension)
			}
			// Define layout to ejs
			if (extension === 'ejs') {
				app.engine('ejs', engine)
				app.set('view engine', extension)
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
