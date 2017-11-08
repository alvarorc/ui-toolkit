const path = require('path');
const postcss = require('../config/postcss');

module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          require.resolve('style-loader'),
          {
            loader: require.resolve('css-loader'),
            options: {
              importLoaders: 1,
              modules: true,
              localIdentName: '[name]__[local]___[hash:base64:5]',
              camelCase: true,
            },
          },
          postcss,
        ],
      },
    ],
  },
};
