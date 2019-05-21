const express = require('express')
const { app } = require('../conf')

/** Build middleware express */
const BuildExpressMiddleware = () => {
	try {
		/** Build middleware Function */
		app.use(express.urlencoded({ extended: true }))
		app.use(express.json())
	} catch (error) {
		console.error(error)
	}
}

module.exports = BuildExpressMiddleware
