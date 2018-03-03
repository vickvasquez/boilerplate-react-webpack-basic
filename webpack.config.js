const path = require('path')
const devServer = require('webpack-dev-server')

const config = {
    entry: './client/index.js',
    output: {
        filename: 'index_bundle.js',
        path: path.resolve(__dirname, './', 'client','dist')
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        }, {
            test: /\.jsx$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        }]
    },

    devServer: {
        contentBase: path.join(__dirname, "client"),
        compress: true,
        port: 9000
    }
}


module.exports = config