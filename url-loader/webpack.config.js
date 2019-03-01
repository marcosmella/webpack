const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin') 

const config = {
    mode: 'development',
    entry: {
        home: path.resolve(__dirname, 'src/js/index.js'),
        precios: path.resolve(__dirname, 'src/js/precios.js'),
        contacto: path.resolve(__dirname, 'src/js/contacto.js')
    },
    output :{
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].js'
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
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
                //que tipo de archivo quiero reconocer
                test: /\.(jpg|png|gif)$/,
                //que loader se va encargar del archivo
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 100000
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
                        presets: [["@babel/preset-env", { "targets": { "node": "current" } }]]
                    }
                }                
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "css/[name].css"
        })
    ]
}

module.exports = config