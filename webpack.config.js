const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: {
    bundle: path.resolve(__dirname, 'src/index.js'),
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].[contenthash].js',
    assetModuleFilename: '[name][ext]',
    clean: true,
    publicPath: '/',
  },
  devServer: {
    static: { directory: path.resolve(__dirname, 'public') },
    hot: true,
    proxy: {
      '/api': {
        target: {
          host: '0.0.0.0',
          protocol: 'https:',
          port: 8080,
        },
        pathRewrite: {
          '^/api': '',
        },
      },
    },
    historyApiFallback: true,
  },
  plugins: [
    new Dotenv({
      path: './.env',
      systemvars: true,
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './index.html',
      inject: 'body',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/,
        exclude: ['/node_modules/'],
        use: ['babel-loader'],
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(?:ico|jpe?g|png|gif)$/,
        type: 'asset/resource',
        generator: {
          publicPath: 'assets/images/',
          outputPath: 'assets/images/',
        },
        dependency: { not: ['url'] },
      },
      {
        test: /\.svg$/,
        type: 'asset/resource',
        generator: {
          publicPath: 'assets/images/',
          outputPath: 'assets/images/',
        },
      },
      // {
      //   test: /\.svg$/i,
      //   type: 'asset',
      //   resourceQuery: /url/, // *.svg?url
      // },
      // {
      //   test: /\.svg$/,
      //   use: ['@svgr/webpack'],
      // },
      {
        test: /\.(wott(2)?|eot|ttf|otf)$/,
        type: 'asset/inline',
        generator: {
          publicPath: 'assets/fonts/',
          outputPath: 'assets/fonts/',
        },
      },
    ],
  },

  // Pass all files through Babel
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    alias: {
      components: path.resolve(__dirname, './src/components'),
      constants: path.resolve(__dirname, './src/constants.js'),
      hooks: path.resolve(__dirname, './src/hooks'),
      images: path.resolve(__dirname, './src/assets/images'),
      pages: path.resolve(__dirname, './src/pages'),
      store: path.resolve(__dirname, './src/store'),
      styles: path.resolve(__dirname, './src/styles'),
    },
  },

  // Set up for styled-components (broken)
  // externals: {
  //   'styled-components': {
  //     commonjs: 'styled-components',
  //     commonjs2: 'styled-components',
  //     amd: 'styled-components',
  //   },
  // },
};
