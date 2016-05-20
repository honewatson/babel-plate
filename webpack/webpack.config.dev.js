var path = require('path');
var webpack = require('webpack');

var host = process.env.HOST || 'localhost';
var port = process.env.PORT || '8080';
var HtmlWebpackPlugin = require('html-webpack-plugin');
var htmlPluginConfig = require('./pluginConfig/htmlPluginConfig');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://'+host+':'+port,
    'webpack/hot/only-dev-server',
    './src/index'
  ],
  output: {
      filename: 'bundle.js',
      path: path.join(__dirname, '..', '/dist/'),
      publicPath: '/'
  },
  plugins: [  
      new webpack.ProvidePlugin({
        'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
      }),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin(),
      new HtmlWebpackPlugin(htmlPluginConfig),
      new ExtractTextPlugin('styles.css')
  ],
  resolve: {
    extensions: ['', '.jsx', '.js', '.json'],
    modulesDirectories: ['node_modules', 'src'],
  },
  module: {
    loaders: [{
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract("style", "css!sass")
      }, {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }, {
        test: /\.(jpg)$/,
        loader: 'file'
      }, {
        test: /\.(otf|eot|svg|ttf|woff|woff2)$/,
        loader: 'file'
      }
    ]
  },
  devtool: 'source-map'
};
