'use strict';

const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const Webpack = require('webpack');
const Path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const extractLess = new ExtractTextPlugin({
    filename: "bundle.css",
    publicPath: 'styles/',
});

module.exports = merge(common, {
    mode: 'production',
    devtool: 'source-map',
    stats: 'errors-only',
    optimization: {
        minimize: true
    },
    plugins: [
        new Webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        new ExtractTextPlugin({filename: 'bundle.css'}),
        // compiling mode “scope hoisting”
        new Webpack.optimize.ModuleConcatenationPlugin(),
        extractLess,
    ],
    resolve: {
        alias: {
            '~': Path.resolve(__dirname, '../src')
        }
    },
    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: /(node_modules|bower_components)/,
                use: 'babel-loader'
            },
            {
                test: /\.(less|css)$/,
                use: extractLess.extract(['css-loader?minimize=true', 'less-loader'])
            }
        ]
    }
});
