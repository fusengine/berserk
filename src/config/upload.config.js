const multer = require('multer')
const path = require('path')

const filters = (req, file, cb) => {
	cb(null, true)
}

const upload = multer({
	dest: './src/storages',

	// destination disk storage
	storage: multer.diskStorage({
		dest: (req, file, cb) => {
			cb(null, '/storages')
		},
		// original name to file upload
		filename: (req, file, cb) => {
			cb(null, `${Date.now()} file.originalname`)
		},
	}),
	limits: { fieldSize: 10000 },
	fileFilter: filters,
})
