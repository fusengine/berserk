const { check } = require('express-validator/check')

/**
 * checkName
 * 
 * Vérifie si un est remplis
 * sinon envoie un message
 * @param {String} name Entrer le nom de correspondant a la database.
 * @param {String} message Entrer le message de validation a afficher.
 */
const checkName = (name, message) =>
	check(name, message)
		.not()
		.isEmpty()

/**
 * checkEmail
 * 
 * Vérifie si un est remplis est une adresse email
 * sinon envoie un message
 * @param {String} email Entrer le nom de correspondant a la database.
 * @param {String} message Entrer le message de validation a afficher.
 */
const checkEmail = (email, message) => check(email, message).isEmail()

/**
 * checkLength
 * 
 * Vérifie si un est remplis est une adresse email
 * sinon envoie un message
 * @param {String} email Entrer le nom de correspondant a la database.
 * @param {String} message Entrer le message de validation a afficher.
 * @param {Number} min valeur minimum a définir
 * @param {Number} max valeur Maximum a définir
 */
const checkLength = (name, message, min, max) =>
	check(name, message).isLength({ min: min, max: max })

/**
 * checkExist
 * 
 * Vérifie si un est remplis est déja existant
 * sinon envoie un message
 * @param {String} name Entrer le nom de correspondant a la database.
 * @param {String} message Entrer le message de validation a afficher.
 */
const checkExist = (name, message) => check(name, message).exists()

module.exports = {
	checkName,
	checkEmail,
	checkLength,
	checkExist,
}
