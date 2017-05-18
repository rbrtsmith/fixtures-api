import path from 'path';

export default {
  context: path.resolve(__dirname, './src'),
  entry: './index.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      { test: /\.jsx?$/, use: 'babel-loader' }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true
  }
};
