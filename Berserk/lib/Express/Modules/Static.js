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
			app.use(`/assets/css`, express.static(path.join(__dirname, `../../../../${dir}/css`)))
			app.use(`/assets/js`, express.static(path.join(__dirname, `../../../../${dir}/js`)))
		} else if (name) {
			app.use(
				`/${name}/css`,
				express.static(path.join(__dirname, '../../../../public/assets/css'))
			)
			app.use(
				`/${name}/js`,
				express.static(path.join(__dirname, '../../../../public/assets/js'))
			)
			/** if define name to read  assets  */
		} else if (dir && name) {
			app.use(`/${name}/css`, express.static(path.join(__dirname, `../../../../${dir}/css`)))
			app.use(`/${name}/js`, express.static(path.join(__dirname, `../../../../${dir}/js`)))
		} else {
			app.use(
				'/assets/css',
				express.static(path.join(__dirname, '../../../../public/assets/css'))
			)
			app.use(
				'/assets/js',
				express.static(path.join(__dirname, '../../../../public/assets/js'))
			)
		}
	} catch (error) {
		console.error(error)
	}
}

module.exports = Static
