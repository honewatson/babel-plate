var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var htmlPluginConfig = require('./pluginConfig/htmlPluginConfig');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var extractedStylesFile = 'assets/css/styles.css';

module.exports = {
  entry: './src/index',
  output: {
      filename: 'assets/js/bundle.min.js',
      path: path.join(__dirname, '..', '/lib/'),
      publicPath: '/'
  },
  plugins: [  
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': '"production"'
      }
    }),
    new webpack.ProvidePlugin({
      'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
          warnings: false
      }
    }),
    new HtmlWebpackPlugin(htmlPluginConfig),
    new ExtractTextPlugin(extractedStylesFile)
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
        exclude: /node_modules/,
      }, {
        test: /\.json$/,
        loader: 'json',
      }, {
        test: /\.(jpg)$/,
        loader: 'file?name=assets/images/[name].[ext]'
      }, {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'file?name=assets/fonts/[name].[ext]'
      }
    ]
  }
};
