const express = require('express')
const app = require('../../../app')

/** Build middleware express */
const Middleware = () => {
	try {
		/** Build middleware Function */
		app.use(express.urlencoded({ extended: true }))
		app.use(express.json())
	} catch (error) {
		console.error(error)
	}
}

module.exports = Middleware
