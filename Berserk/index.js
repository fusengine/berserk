const { Headers, Host, MongoDB, Morgan, Middleware, ViewEngine, Route, Static } = require('./lib')

/** 
 * Connect on your database 
 */
MongoDB()

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

/** Morgan */
Morgan()

/** 
 * Listen api and route 
 */
Route()

/** Define port Listen */
Host()