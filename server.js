const { app, portBerserk, database } = require('./config')

/** Connect on your database */
database()

/** Lecture de l'api */
app.get('/', (req, res) => {
	res.send('Api En marche!')
})

/** Define port Listen */
portBerserk()
