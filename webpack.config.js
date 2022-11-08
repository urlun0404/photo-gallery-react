const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    bundle: path.resolve(__dirname, 'src/index.js'),
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].[contenthash].js',
    assetModuleFilename: '[name][ext]',
    clean: true,
  },
  devServer: {
    static: { directory: path.resolve(__dirname, 'build') },
    hot: true,
    port: 3000,
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './public/index.html',
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
        use: ["style-loader", "css-loader"],
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
      },
      {
        test: /\.svg$/,
        type: 'asset/inline',
        generator: {
          publicPath: 'assets/images/',
          outputPath: 'assets/images/',
        },
      },
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
      styles: path.resolve(__dirname, './src/styles'),
      components: path.resolve(__dirname, './src/components'),
    },
  },

  // Set up for styled-components
};
