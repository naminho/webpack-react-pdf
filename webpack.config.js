const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'file-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'fonts/*',
          to: 'dist',
        },
      ],
    }),
  ],
  devServer: {
    open: true,
  },
  // Some libraries import Node modules but don't use them in the browser.
  // Tell Webpack to provide empty mocks for them so importing them works.
  resolve: {
    fallback: {
      fs: false,
      net: false,
      tls: false,
    },
    alias: {
      stream: 'stream-browserify',
      zlib: 'browserify-zlib',
    },
  },
  // Disable size warnings.
  performance: {
    hints: false,
  },
}
