module.exports = {

	/**
	 * Create a string that represents a complete function
	 *
	 * @param  {String} spec
	 * @param  {String} code
	 * @return {String}
	 */
	createFunctionString : function (spec, code) {

		if (typeof spec !== "string") {
			console.log("bad spec");
			return null;
		}
		if (typeof code !== "string") {
			console.log("bad code");
			return null;
		}

		return spec + code;
	},

}