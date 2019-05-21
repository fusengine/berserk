const path = require('path')
const express = require('express')
const {
	api,
	app,
	database,
	portBerserk,
	route,
	viewBerserkEngine,
} = require('./config/berserk_lib')

/** Connect on your database */
database()

/** Define engine use  */
viewBerserkEngine('pug')

/** Build middleware Function */
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

/** Permet d'accepter les requetes */
app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*')
	res.header(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Accept,token'
	)
	res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS')
	next()
})

/** 
 * Listen api and route 
 */
app.use('/api', api)
app.use('/', route)

/** Define port Listen */
portBerserk()
