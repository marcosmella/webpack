const path = require('path');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");//minifica
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const CleanWebPackPlugin = require('clean-webpack-plugin');//limpia la carpeta dist

let config = {
	plugins: [
		new MiniCssExtractPlugin({
	    filename: "./css/[name].[hash].css",
	    chunkFilename: "[id].[chunkhash].css"
	  })
	],
	optimization: {
		minimizer: [
			new UglifyJsPlugin(),
			new OptimizeCSSAssetsPlugin({})
		]
	},
	entry: {
		invie: path.resolve(__dirname, 'src/index.js'),
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'js/[name].[hash].js',
		publicPath: path.resolve(__dirname, 'dist')+"/", //donde lo va a buscar el navegador y donde inserta los bundles
		chunkFilename: 'js/[id].[chunkhash].js', 
	},
	module: {
		rules: [
			{
		      test: /\.(js|jsx)$/,
		      exclude: /(node_modules)/,
		      use: {
		        loader: 'babel-loader',
		        options: {
		          presets: ['env','react','stage-2']
		        }
		      }
		    },
		    {
	        test: /\.css$/,
	        use: [
	          MiniCssExtractPlugin.loader,
	          "css-loader"
	        ]
	      },
		    {
	        test: /\.(jpg|png|gif|woff|eot|ttf|svg)$/,
	        use: {
	          loader: 'url-loader',
	          options: {
	            limit: 1000000,
	            fallback: 'file-loader',
	            name: 'images/[name].[hash].[ext]',
	          }
	        },
	      }
		]
	}
}


module.exports = (env) => {
	if (env.NODE_ENV === 'production') {
		config.plugins.push(
			new CleanWebPackPlugin(['dist'], {root:__dirname}) //cuando se exporta a prod.. se utiliza este plugin para limpiar la carpeta dist
		)
	}
	return config
}