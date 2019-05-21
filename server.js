const {
	database,
	BuildExpressMiddleware,
	HeaderBerserk,
	PortBerserk,
	ViewBerserkEngine,
	RouteBerserk,
} = require('./config/berserk_lib')

/** 
 * Connect on your database 
 */
database()

/** 
 * Define engine use 
 */
ViewBerserkEngine()

/** 
 * Build middleware Function 
 */
BuildExpressMiddleware()

/** 
 * define to accepte Request 
 */
HeaderBerserk()

/** 
 * Listen api and route 
 */
RouteBerserk()

/** Define port Listen */
PortBerserk()
