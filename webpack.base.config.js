'use strict';

const path = require('path');
const copyPlugins = require('copy-webpack-plugin');

module.exports = {
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    node: {
        __dirname: false,
        __filename: false
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.json'],
        alias: {
            '@app': path.resolve(__dirname, 'src/')
        }

    },
    devtool: 'source-map',
    plugins: [
        // new copyPlugins({
        //     patterns: [{ from: 'src/main/preloads/*.js', to: 'preloads/', flatten: true }],   
        // })
    ]
};
