/**
 * @package Berserk Framework init app
 */
const express = require('express')
const ejsMate = require('ejs-mate')
const jwt = require('jsonwebtoken')
const passport = require('passport')
const path = require('path')
const cookieParser = require('cookie-parser')
const sessionExpress = require('express-session')
const { engine, app, berserkUtils } = require('@fusengine/berserk-engine')

/**
 * Berserk Config
 */
const Cookie = require('Config/express/cookie.config')(app, berserkUtils, cookieParser)
const Session = require('Config/express/session.config')(app, berserkUtils, sessionExpress)
const Static = require('Config/express/static.config')(app, berserkUtils, express, path)
const View = require('Config/express/view.config')(app, berserkUtils, ejsMate, path)
const Passport = require('Config/express/passport.config')(app, passport, berserkUtils)
const Jwt = require('Config/modules/jwt.config')(app, berserkUtils, jwt)

/** start berserk engine */
engine(
	require('ENV_FILE'),
	[ Cookie(), Session(), Jwt(), Passport(), Static(), View() ],
	require('Route/api'),
	require('Route/web')
)
