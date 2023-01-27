const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { webpack } = require('webpack');
const autoprefixer = require('autoprefixer');
const isProduction = process.env.NODE_ENV == 'production';

const stylesHandler = 'style-loader';

const config = {
	entry: './src/index.tsx',
	output: {
		path: path.resolve(__dirname, './build'),
		filename: 'bundle.js',
		clean: true
	},
	devServer: {
		open: true,
		host: 'localhost'
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, './src/index.html')
		}),
		new MiniCssExtractPlugin({})
	],
	module: {
		rules: [
			{
				test: /\.(ts|tsx)$/i,
				exclude: ['/node_modules/'],
				use: [
					{
						loader: 'babel-loader'
					}
				]
			},
			{
				test: /\.((c|sa|sc)ss)$/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					'postcss-loader',
					'sass-loader'
				]
			},
			{
				test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
				type: 'asset'
			}
		]
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.jsx', '.js', '...']
	}
};

module.exports = () => {
	if (isProduction) {
		config.mode = 'production';

		config.plugins.push(new WorkboxWebpackPlugin.GenerateSW());
	} else {
		config.mode = 'development';
	}
	return config;
};
