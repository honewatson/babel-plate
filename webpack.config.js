var path = require('path');
var webpack = require('webpack');

var host = process.env.HOST || 'localhost';
var port = process.env.PORT || '8081';

module.exports = {
  entry: [
    'webpack-dev-server/client?http://'+host+':'+port,
    './src/index'
  ],
  output: {
      filename: 'bundle.js',
      path: path.join(__dirname, '/dist/'),
      publicPath: '/dist/'
  },
  resolve: {
    extensions: ['', '.jsx', '.js', '.json'],
    modulesDirectories: ['node_modules', 'src'],
  },
  module: {
    loaders: [{
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      }
    ]
  },
  devtool: 'source-map'
};
