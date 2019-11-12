const { app, berserkUtils } = require('@fusengine/berserk-engine')

const express = require('express')
const path = require('path')

/**  */
const { directory, pathName } = require('ENV_FILE_CONF').assets

/** Directory to assets */
const assetsDir = path.join(__dirname, '../../../' + directory)

/**
 * StaticFile
 * @param {String} fileDirectory this is a directory to your assets
 * @param {String} nameAssets this is a name to your assets
 */
app.use(pathName, express.static(assetsDir))

if (process.env.NODE_ENV === 'development') {
	berserkUtils.successMessage('Static: express.static loaded in app.config.js')
}
