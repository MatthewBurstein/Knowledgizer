import webpack from 'webpack';
import path from 'path';

export default {
  devtool: 'inline-source-map',
  entry: [
    'babel-polyfill',
    path.resolve(__dirname, 'src/index.js')
  ],
  output: {
    path: path.resolve(__dirname, 'src'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        exclude: "/node_modules/",
        loader: "babel-loader",
        options: {
          presets: ["es2015", "react", "stage-2"]
        },
        test: /\.jsx?$/
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
}
