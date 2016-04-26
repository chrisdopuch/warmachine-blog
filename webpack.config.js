const validate = require('webpack-validator');
module.exports = validate({
	entry: "./client/index.js",
	output: {
		path: __dirname,
		filename: "./server/public/bundle.js"
	},
	module: {
		loaders: [
			{
				test: /\.css$/,
				loader: "style!css"
			}
		]
	}
});
