const { engine, berserkPath } = require('@fusengine/berserk-engine')

engine('config', 'Route/api', 'Route/web', berserkPath('src/views'))
