const path = require("path");
const ESLintPlugin = require("eslint-webpack-plugin");

module.exports = {
	plugins: [new ESLintPlugin()],
	entry: "./client/index.js",
	mode: "development",
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "dist"),
	},

	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /(node_modules)/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-react", "@babel/preset-env"],
					},
				},
			},
			{
				test: /\.css$/i,
				use: ["style-loader", "css-loader"],
			},
		],
	},
};
