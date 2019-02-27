const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin') 

const config = {
    mode: 'development',
    entry: {
        home: path.resolve(__dirname, 'index.js'),
        precios: path.resolve(__dirname, 'precios.js'),
        contacto: path.resolve(__dirname, 'contacto.js')
    },
    output :{
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            //Aquí van los loaders
            {
                //que tipo de archivo quiero reconocer
                test: /\.css$/,
                //que loader se va encargar del archivo
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
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