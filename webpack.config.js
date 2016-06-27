/*
 * Webpack development server configuration
 *
 * This file is set up for serving the webpack-dev-server, which will watch for changes and recompile as required if
 * the subfolder /webpack-dev-server/ is visited. Visiting the root will not automatically reload.
 */
'use strict';
const webpack = require('webpack');
const path = require('path');

const join    = path.join;
const resolve = path.resolve;

const root    = resolve(__dirname);
const src     = join(root, 'src');

const ExtractTextPlugin = require('extract-text-webpack-plugin')



module.exports = {
  context:__dirname,
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'main.js',
    publicPath: '/assets/'
  },

  cache: true,
  debug: true,
  devtool: false,
  entry: [
    'webpack-dev-server/client?http://localhost:8000', // WebpackDevServer host and port
      'webpack/hot/only-dev-server',
      './src/scripts/main.js'
  ],

  resolve:{
    root: root,
    extensions: ['', '.js', '.jsx'],
    alias:{
      'actions'   : join(root, './src/scripts/actions'),
      'constants' : join(root, './src/scripts/constants'),
      'components': join(root, './src/scripts/components'),
      'containers': join(root, './src/scripts/containers'),
      'config'    : join(root, './src/scripts/config'),
      'reducers'  : join(root, './src/scripts/reducers'),
      'utils'     : join(root, './src/scripts/utils'),
      'UI'        : join(root, './src/scripts/components/UI')

    }
  },
  module: {
    loaders: [
      {
      test: /\.js$/,
      loaders: ['react-hot', 'babel','eslint'],
      include: path.join(__dirname, 'src')
      },
      {
        test: /\.scss/,
        loader:ExtractTextPlugin.extract("style", "css!sass")
      },
      {
          test: /\.(eot|svg|ttf|woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
          loader: 'url'
      },
      { test: /\.(png|jpg)$/, loader: 'file-loader' }

   ]
 },
 plugins: [
   new webpack.HotModuleReplacementPlugin(),
   new webpack.NoErrorsPlugin(),
   new webpack.DefinePlugin({
     'process.env': {
       NODE_ENV: '"development"'
     }
   }),
   new ExtractTextPlugin("styles.css")

  ]

};
