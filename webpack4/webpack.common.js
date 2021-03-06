const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: {
        app:'./src/index.js',
    },
    plugins:[
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
        title:'output management'
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
    ],
    output: {
        filename: '[name].main.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    module:{
        rules:[
        {
            test: /\.css$/,
            use: [
            'style-loader',
            'css-loader'
            ]
        },
        {
            test: /\.(png|svg|jpg|gif)$/,
            use:[
            'file-loader']
        },
        {
            test: /\.(woff|woff2|eot|ttf|otf)$/,
            use:[
            'file-loader']
        },
        {
            test: /\.(csv|tsv)$/,
            use:[
            'csv-loader']
        },
        {
            test: /\.xml$/,
            use:[
            'xml-loader']
        }
        ]
    }
};