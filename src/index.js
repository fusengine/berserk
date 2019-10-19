const { engine } = require('@fusengine/berserk-engine')

/** Config files Berserk */
const config = require('Config/app.config')
const cookie = require('Config/express/cookie.config')
const passport = require('Config/express/passport.config')
const session = require('Config/express/session.config')
const view = require('Config/express/view.config')
const static = require('Config/express/static.config')
const multer = require('config/upload.config')

/** start berserk engine */
engine(config, 'Route/api', 'Route/web', [cookie, session, passport, view, static, multer])
