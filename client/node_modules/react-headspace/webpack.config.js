const path = require('path');

module.exports = {
  entry: './lib/Headspace.js',
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'index.js',
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      }
    ]
  },
};
