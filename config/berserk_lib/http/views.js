const { app } = require('../conf')
const path = require('path')

/**
  * viewBerserkEngine
  * define to view file html 
  * 
  * @param {String} extension File Extension eg. 'pug' or 'ejs' or other ....
  * @param {String} viewDir View folder directory
  */
const viewBerserkEngine = (extension, viewDir) => {
	try {
		if (viewDir) {
			// Define directory views
			const pathDir = path.join(__dirname, `../../../${viewDir}`)

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
			app.set('view engine', extension)
		} else {
			app.set('view engine', 'ejs')
		}
	} catch (error) {
		console.error(error)
	}
}

module.exports = viewBerserkEngine
