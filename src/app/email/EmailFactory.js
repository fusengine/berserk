const path = require('path')
const pug = require('pug')
const nodemailer = require('nodemailer')

/** Link to config */
const { mailer } = require('ENV_FILE_CONF')

class EmailFactory {
	constructor() {
		this.from = mailer.from
		this.transporter = nodemailer.createTransport({
			host: mailer.host,
			port: mailer.port,
			secure: mailer.secure,
			auth: {
				user: mailer.auth.user,
				pass: mailer.auth.password,
			},
		})
	}

	/** Send message welcome user */
	async welcome(options) {
		try {
			const email = {
				from: this.from,
				subject: options.subject,
				to: options.to,
				html: pug.renderFile(path.join(__dirname, 'templates/welcome.pug'), {
					username: options.username,
					message: options.message,
				}),
			}
			const response = await this.transporter.sendMail(email)
			if (process.env.NODE_ENV === 'development') {
				console.log(response)
			}
		} catch (error) {
			throw error
		}
	}

	async resetLinkPassword(options) {
		try {
			const email = {
				from: this.from,
				subject: options.subject,
				to: options.to,
				html: pug.renderFile(path.join(__dirname, 'templates/reset-password.pug'), {
					url: `http://${options.host}/users/forget-password/${options.userId}/${options.token}`,
					username: options.username,
					message: options.message,
				}),
			}
			const response = await this.transporter.sendMail(email)
			if (process.env.NODE_ENV === 'development') {
				console.log(response)
			}
		} catch (error) {
			throw error
		}
	}
}

module.exports = new EmailFactory()
