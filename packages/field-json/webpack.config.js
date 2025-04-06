const path = require('path');

module.exports = {
  mode: process.env.NODE_ENV || 'development',
  entry: './client/index.tsx',
  output: {
    path: path.resolve(__dirname, 'build/public'),
    filename: 'app.js'
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.css']
  },
  externals: {
    react: 'window.React'
  }
}; 
