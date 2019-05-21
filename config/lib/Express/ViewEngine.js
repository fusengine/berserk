const path = require('path')
const { app } = require('../Default')
const { view } = require('../../config')

/**
  * viewBerserkEngine
  * define to view file html 
  */
const ViewEngine = () => {
	try {
		if (view.path) {
			// Define directory views
			const pathDir = path.join(__dirname, `../../../${view.path}`)

			// Define views file
			app.set('views', pathDir)
		} else {
			// Define directory views
			const pathDir = path.join(__dirname, `../../../views`)

			// Define views file
			app.set('views', pathDir)
		}

		// Try if user add extension
		if (view.extention) {
			app.set('view engine', view.extention)
		} else {
			app.set('view engine', 'ejs')
		}
	} catch (error) {
		console.error(error)
	}
}

module.exports = ViewEngine
