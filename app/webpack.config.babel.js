import path from 'path';

export default {
  entry: './index.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      { test: /\.jsx?$/, use: 'babel-loader' }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
};
