const path = require('path')
const { app } = require('../Default')
const { view } = require('../../config')

/**
  * viewBerserkEngine
  * define to view file html 
  */
const ViewEngine = async () => {
	try {
		if (view.path) {
			// Define directory views
			const pathDir = path.join(__dirname, `../../../${view.path}`)

			// Define views file
			await app.set('views', pathDir)
		} else {
			// Define directory views
			const pathDir = path.join(__dirname, `../../../views`)

			// Define views file
			await app.set('views', pathDir)
		}

		// Try if user add extension
		if (view.extention) {
			await app.set('view engine', view.extention)
		} else {
			await app.set('view engine', 'ejs')
		}
	} catch (error) {
		console.error(error)
	}
}

module.exports = ViewEngine
