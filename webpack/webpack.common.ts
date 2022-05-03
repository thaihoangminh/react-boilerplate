import HtmlWebpackPlugin from 'html-webpack-plugin';
import { WebpackManifestPlugin } from 'webpack-manifest-plugin';
import { Configuration } from 'webpack';

import path from 'path';

const appRoot = process.env.PWD as string;
const config: Configuration = {
  entry: {
    app: './src/index.tsx',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.ico/,
        type: 'asset/resource',
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new WebpackManifestPlugin({}),
    new HtmlWebpackPlugin({
      title: 'React App Boilerplate',
      template: './public/index.html',
      favicon: './public/favicon.ico',
    }),
  ],
  resolve: {
    alias: {
      components: path.resolve(appRoot, 'src/components/'),
    },
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(appRoot, 'dist'),
    clean: true,
  },
};

export default config;
