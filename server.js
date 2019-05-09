const path = require('path')
const express = require('express')
const { api, app, database, portBerserk, route } = require('./config')

/** Connect on your database */
database()

// set the view engine to ejs
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

/** Build middleware Function */
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

/** Permet d'accepter les requetes */
app.use(function (req, res, next) {
	res.header('Access-Control-Allow-Origin', '*')
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept,token')
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
