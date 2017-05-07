// var path = require('path');
// var buildPath = path.resolve(__dirname, './build');
// var webpack = require('webpack');

// module.exports = {
//   context: path.resolve(__dirname, './src'),
//   entry: {
//     app: './app.js'
//   },
//   output: {
//     filename: '[name].bundle.js',
//     path: buildPath
//   },
//   module: {
//     rules: [
//       {
//         test: /\.js$/,
//         exclude: [/node_modules/],
//         use: [{
//           loader: 'babel-loader',
//           options: { presets: ['es2015'] },
//         }],
//       }
//     ]
//   }
// }