/**
 * Define Header request to api
 */
const header = {
	origine: '*',
	headers: 'Origin, X-Requested-With, Content-Type, Accept, token',
	method: 'PUT, POST, GET, DELETE, OPTIONS',
	credentials: true,
}

/**
 * Route define path to route 
 */
const routerPath = {
	api: '/api',
	route: '/',
}

/**
 * Define path and extension to render views thml
 */
const view = {
	path: 'views',
	extention: 'ejs',
}

module.exports = {
	header,
	view,
	routerPath,
}
