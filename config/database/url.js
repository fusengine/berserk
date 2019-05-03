// Define mongo
const mongoSRV = 'mongodb'

// Retry write is true
const mongoOption = 'retryWrites=true'

/**
 * mongoURI defin url to connect in your app
 * @param {String} user User database
 * @param {String} pass Password database
 * @param {String} host Url database
 * @param {Number} port Port database   
 * @param {String} dbname Name database
 */
const mongoURI = (user, pass, host, port, dbname) => {
	const withUserPass = `${mongoSRV}://${user}:${pass}@${host}:${port}/${dbname}?${mongoOption}`
	const withOutUserPAss = `${mongoSRV}://${host}:${port}/${dbname}?${mongoOption}`
	// Check is user enter password and username
	if (user && pass) {
		return withUserPass
	} else {
		return withOutUserPAss
	}
}

module.exports = mongoURI
