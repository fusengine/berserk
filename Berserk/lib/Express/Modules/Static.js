const app = require('../../app')
const express = require('express')
const path = require('path')
const Config = require('../../../Config').assets

/** Destruturation */
const { dir, name } = Config

/** Define a static file to add css and js */
const Static = () => {
	try {
		/** if directory to put your file is define */
		if (dir) {
			app.use(`/assets`, express.static(path.join(__dirname, `../../../../${dir}`)))
		} else if (name) {
			app.use(`/${name}`, express.static(path.join(__dirname, '../../../../public/assets')))

			/** if define name to read  assets  */
		} else if (dir && name) {
			app.use(`/${name}`, express.static(path.join(__dirname, `../../../../${dir}`)))
		} else {
			app.use('/assets', express.static(path.join(__dirname, '../../../../public/assets')))
		}
	} catch (error) {
		console.error(error)
	}
}

module.exports = Static
