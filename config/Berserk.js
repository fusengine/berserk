const { Database, Middleware, Headers, Host, ViewEngine, Route, Static } = require('./lib')

/** 
 * Connect on your database 
 */
Database()

/** 
 * Define engine use 
 */
ViewEngine()

/** 
 * Build middleware Function 
 */
Middleware()

/** 
 * Define add a Static file
 */
Static()

/** 
 * define to accepte Request 
 */
Headers()

/** 
 * Listen api and route 
 */
Route()

/** Define port Listen */
Host()
