import common from './webpack.common.js';
import { merge } from 'webpack-merge';

export default merge(common, {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    open: true,
    port: 8000,
  },
});
