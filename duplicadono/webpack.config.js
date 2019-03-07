const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin') 
const webpack = require('webpack')

const config = {
    mode: 'development',
    entry: {
        home: path.resolve(__dirname, 'src/js/index.js'),
        precios: path.resolve(__dirname, 'src/js/precios.js'),
        contacto: path.resolve(__dirname, 'src/js/contacto.js')
    },
    output :{
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].js',
        publicPath: './dist/'
    },
    devServer:{
        port:8080
    },
    module: {
        rules: [
            //Aquí van los loaders
            {
                //que tipo de archivo quiero reconocer
                test: /\.css$/,
                //que loader se va encargar del archivo
                use: [MiniCssExtractPlugin.loader, 
                    {
                        loader:"css-loader",
                        options:{
                          modules: true,
                          importLoaders:1
                        }
                      },
                      "postcss-loader"
                    ]
            },
            {
                //que tipo de archivo quiero reconocer
                test: /\.scss$/,
                //que loader se va encargar del archivo
                use: [MiniCssExtractPlugin.loader, 'css-loader','sass-loader'],
            },
            {
                //que tipo de archivo quiero reconocer
                test: /\.(jpg|png|gif|woff|eot|ttf|svg)$/,
                //que loader se va encargar del archivo
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 100000
                    }
                }
            },
            {               
                test: /\.(webm|mp4)$/,                
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 100000,
                        name: 'videos/[name].[hash].[ext]'
                    }
                }
            },          
            {
                //que tipo de archivo quiero reconocer
                test: /\.js$/,
                //que loader se va encargar del archivo
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ["@babel/preset-env", "@babel/react"]
                    }
                }                
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "css/[name].css"
        })        
    ],
    optimization: {
        splitChunks: {
            name: "common",
            chunks: "initial"
        }
    }
}

module.exports = config