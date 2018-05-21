const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const { HotModuleReplacementPlugin } = require('webpack'); // this is really cool, but it's CPU intensive so if your machine is slow, maybe don't use it.

const webpackDevConfig = {};

webpackDevConfig.mode = 'development';

webpackDevConfig.devtool = 'inline-source-map';

webpackDevConfig.devServer = {
  contentBase: './build',
  open: true,
  hot: true,
  historyApiFallback: true,
};

webpackDevConfig.plugins = [
  new HotModuleReplacementPlugin(),
];

webpackDevConfig.module = {};
webpackDevConfig.module.rules = [
  {
    test: /\.scss$/,
    use: [
      'style-loader',
      'css-loader',
      'sass-loader',
    ],
  },
];

module.exports = merge(common, webpackDevConfig);
