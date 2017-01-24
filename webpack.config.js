
const debug = process.env.NODE_ENV !== 'production';
const path = require('path');
const webpack = require('webpack');
const CleanPlugin = require('clean-webpack-plugin');
const appDir = __dirname;
const assetsPath = path.resolve(appDir, 'dist');

module.exports = {
  context: appDir,

  devtool: debug ? 'inline-sourcemap' : false,

  entry: path.resolve(appDir, 'app/lib/index.js'),

  output: {
    path: assetsPath,
    filename: 'final.js'
  },

  module: {
    loaders: [
      {
        test: /\.js?$/,
        include: path.resolve(appDir, 'app'),
        exclude: /node_modules/,
        loaders: ['babel-loader']
      },
      {
        test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
        include: path.resolve(appDir, 'app'),
        loader: 'file-loader',
        query: {
          name: debug ? '[path][name].[ext]?[hash:8]' : '[hash:8].[ext]'
        },
        exclude: /node_modules/
      },
      {
        test: /\.html?$/,
        loader: 'html-loader',
        include: path.resolve(appDir, 'app'),
        exclude: /node_modules/
      },
      { test: /\.css$/, loader: 'style!css' }
    ]
  },

  plugins: debug ? [] : [
    new CleanPlugin([assetsPath], { root: appDir }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false })
  ]

  /***
   devServer: {
    host: '192.168.1.195',
    contentBase: assetsPath,
    compress: true,
    inline: false,
    hot: true,
    port: 9000
  }
  */
};
