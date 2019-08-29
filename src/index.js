const { engine, berserkPath } = require('@fusengine/berserk-engine')

engine('config', 'route-api', 'route-http', berserkPath('src/views'))
