'use strict';

require('dotenv').config();

// this file holds all of the common rules for webpack also it needs to be in ES5 this does not
// transpile!!!!
const HTMLWebpackPlugin = require('html-webpack-plugin');

const webpackConfig = module.exports = {};

webpackConfig.entry = `${__dirname}/src/main.js`;

webpackConfig.output = {
  filename:'[name].[hash].js',
  path: `{__dirname}/build`,
  publicPath: process.env.CDN_URL,
};

webpackConfig.plugins = [
    new HTMLWebpackPlugin({
      title: '401d23. this will be the title of the HTML file',
    }),
];

webpackConfig.module = {};
webpackConfig.module.rules = [
  {
    test: /\.(png|svg|jpg|gif)$/,
    use: [
        'file-loader',
    ],
  },{
    test: /\.js$/,
    use: {
      loader: 'babel-loader',  // this is transpiling the app!
      options: {
        presets: ['env', 'stage-o', 'react'],
        plugins: ['transform-react-jsx-source'],
        cacheDirectory: true,
      }
    }
    //object are used to config a process vs. an array
  },
];

