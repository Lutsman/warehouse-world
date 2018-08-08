'use strict';

const Path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const Webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const dest = Path.join(__dirname, '../dist');

module.exports = {
    entry: Path.resolve(__dirname, '../src/scripts/index'),
    output: {
        path: dest,
        filename: 'scripts/bundle.[hash].js'
    },
    plugins: [
        new CleanWebpackPlugin(
            [dest],
            { root: Path.join(__dirname, '../') }),
        new CopyWebpackPlugin([
            {from: Path.resolve(__dirname, '../public'), to: 'public'}
        ]),
        new HtmlWebpackPlugin({
            template: Path.resolve(__dirname, '../src/notices.html')
        }),
    ],
    resolve: {
        alias: {
            '~': Path.resolve(__dirname, '../src')
        }
    },
    module: {
        rules: [
            {
                test: /\.(ico|jpg|jpeg|png|gif|webp)(\?.*$|$)?$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: 'fonts/[name].[ext]',
                        publicPath: 'images/',
                    }
                }
            },
            {
                test: /\.(eot|otf|svg|ttf|woff|woff2)(\?.*$|$)?$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: 'fonts/[name].[ext]',
                        publicPath: 'fonts/',
                    }
                }
            },
        ]
    }
};
