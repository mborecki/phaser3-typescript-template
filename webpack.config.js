'use strict';

const env = process.env.NODE_ENV

var path = require('path')
var webpack = require('webpack')

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: env || 'development',
    entry: {
        app: [
            path.resolve(__dirname, 'src/index.ts')
        ]
    },
    // devtool: 'cheap-source-map',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
        clean: true
    },

    resolve: {
        extensions: ['.ts', '.js']
    },

    plugins: [
        new HtmlWebpackPlugin({
            filename: `index.html`,
            template: path.join(__dirname, 'src/', `index.html`)
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: './assets',
                    to: 'assets'
                }
            ]
        }),
        new webpack.DefinePlugin({
            'CANVAS_RENDERER': JSON.stringify(true),
            'WEBGL_RENDERER': JSON.stringify(true)
        })
    ],

    module: {

        rules: [
            {
                test: /\.ts$/,
                loader: 'ts-loader'
            },
            {
                test: [/\.vert$/, /\.frag$/],
                use: 'raw-loader'
            }
        ]
    },

    devServer: {
        // contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000
    }
};
