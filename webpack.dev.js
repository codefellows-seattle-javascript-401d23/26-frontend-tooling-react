'use strict';

const merge = require('webpack-merge');
const commonConfig = require('./webpack.common');
const { HotModuleReplacementPlugin } = require('webpack');

const webpackDevConfig = {};

webpackDevConfig.mode = 'development';
webpackDevConfig.devtool = 'inline-source-map';  // check out the DOC's on this tool.

webpackDevConfig.devServer = {
  contentBase: './build',
  open: true,
  hot: true,  //allows you to see changes in real time
  historyApiFallback: true,  //this saves the illution of website routes
};

webpackDevConfig.plugins = [
    new HotModuleReplacementPlugin(),
];

webpackDevConfig.module = {};
webpackDevConfig.module.rules = [
  {
    test: /\.scss$/,
    use:[
        'style-loader',
        'css-loader',
        'sass-loader',  //this allows you to change the css in real time.
    ],
  },
];

module.exports = merge(commonConfig, webpackDevConfig);