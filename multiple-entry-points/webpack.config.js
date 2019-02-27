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