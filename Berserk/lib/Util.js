const util = require('util')

const Util = (value, colorTerminal) => {
	const option = { compact: false, depth: 5, breakLength: 80, colors: true }

	if (colorTerminal) {
		return (util.inspect.colors = colorTerminal)
	}

	return util.inspect(value, option)
}

module.exports = Util
