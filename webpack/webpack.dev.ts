import merge from 'webpack-merge';
import { Configuration } from 'webpack-dev-server';

import path from 'path';

import common from './webpack.common';

const appRoot = process.env.PWD as string;

export default merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: path.join(appRoot, 'public'),
    compress: true,
    port: 9000,
  } as Configuration,
});
