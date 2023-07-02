const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WebpackBar = require('webpackbar');
const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
// const glob = require('glob');
module.exports = {
  entry: './src/index.js',
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].[fullhash:8].js',
  },
  module: {
    rules: [
      {
        test: /\.template$/,
        use: {
          loader: path.resolve(__dirname, './loaders/template.js'),
        },
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },

      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'less-loader',
        ],
      },
      {
        test: /\.(woff | eot | ttf | otf | svg)$/,
        type: 'asset/resource',
      },
    ],
  },
  mode: process.env.NODE_ENV,
  // resolve: {
  //   alias: {
  //     '@': path.resolve(__dirname, '../src'),
  //   },
  // },
  externals: {
    jquery: 'jQuery',
    lodash: '_',
  },
  devServer: {
    open: true,
    // 配置前端请求代理
    proxy: {
      '^/api': {
        target: 'https://www.starbucks.com.cn/',
      },
      '^/bff': {
        target: 'https://bff.starbucks.com.cn/',
        pathRewrite: { '/api1': '' },
      },
    },
    client: {
      overlay: false,
    },
  },
  plugins: [
    new WebpackBar(),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash:8].css',
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      cdn: {
        script: [
          'https://cdn.bootcdn.net/ajax/libs/jquery/3.6.4/jquery.min.js',
          'https://cdn.bootcdn.net/ajax/libs/lodash.js/4.17.21/lodash.core.min.js',
        ],
        style: [],
      },
    }),
    // 请确保引入这个插件！
    new VueLoaderPlugin(),
  ],
};
