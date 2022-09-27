import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default {
  entry: './src/index.js',
  output: {
      path: resolve(__dirname, 'dist'),
      filename: 'bundle.js',
      clean: true,
  },
  plugins: [
      new HtmlWebpackPlugin({
          template: './src/index.html',
      }),
      new MiniCssExtractPlugin({filename: 'style.css'}),
  ],
  module: {
      rules: [
          {
              test: /\.s?css$/i,
              use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
          },
          {
              test: /\.(png|svg|jpg|jpeg|gif)$/i,
              type: 'asset/resource',
              generator: {
                  filename: 'images/[name][ext]'
              },
          },
          {
              test: /\.(woff|woff2|eot|ttf|otf)$/i,
              type: 'asset/resource',
              generator: {
                  filename: 'fonts/[name][ext]'
              },
          }
      ],
  },
};
