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
app.use(express.json({ extended: false }))

/** 
 * Listen api and route 
 */
app.use('/api', api)
app.use('/', route)

/** Define port Listen */
portBerserk()
