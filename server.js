const { app, portBerserk, database } = require('./config')
const { api } = require('./routes/')

/** Connect on your database */
database()

/** Read base File */
app.get('/', (req, res) => {
	res.send('Api En marche!')
})

/** Listen api file */
app.use('/api', api)

/** Define port Listen */
portBerserk()
