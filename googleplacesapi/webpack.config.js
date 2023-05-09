const webpack = require('webpack');
require('dotenv').config();

module.exports = {
  // Your webpack configuration...
  plugins: [
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(process.env)
    })
  ]
};
