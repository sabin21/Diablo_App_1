const MiniCssExtractPlugin = require('mini-css-extract-plugin').default;
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const { merge } = require('webpack-merge');

const paths = require('./paths');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'production',
  devtool: false,
  output: {
    path: paths.build,
    publicPath: '',
    filename: './js/[name].[contenthash].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(sass|scss|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              sourceMap: false,
              modules: false,
            },
          },
          'postcss-loader',
          'sass-loader',
          //-----
          //'webfonts-loader'
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      //filename: './styles/[name].[contenthash].css',
      filename: '[name].[contenthash].css',
      chunkFilename: '[id].css',
    }),
  ],
  optimization: {
    /*
    minimize: true,
    minimizer: [new CssMinimizerPlugin(), '...'],
    
    runtimeChunk: {
      name: 'runtime',
    },
    */
    splitChunks: {
      chunks: "all",
    },
    
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
})
