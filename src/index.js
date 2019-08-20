const { engine, berserkPath } = require('@fusengine/berserk-engine')

engine('config', 'Api', 'Web', berserkPath('src/views'))
