const express = require('express')
const { app } = require('../Default')

/** Build middleware express */
const BuildMiddleware = async () => {
	try {
		/** Build middleware Function */
		await app.use(express.urlencoded({ extended: true }))
		await app.use(express.json())
	} catch (error) {
		console.error(error)
	}
}

module.exports = BuildMiddleware
