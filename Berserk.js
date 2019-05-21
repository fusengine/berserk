const { Database, BuildMiddleware, Headers, Host, ViewEngine, Route } = require('./config/lib')

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
BuildMiddleware()

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
