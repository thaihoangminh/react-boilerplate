const path = require('path');
const { merge } = require('webpack-merge');

const common = require('./webpack.common.js');

const appRoot = process.env.PWD;

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: path.join(appRoot, 'public'),
    compress: true,
    port: 9000,
  },
});
