const path = require('path');
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { version } = require('./package.json');
const CWD = process.cwd();
const commonConfig = {
  mode:"production",
  optimization: {
    minimizer: [
      new TerserPlugin({
          cache: true, // 开启缓存
          parallel: true, // 支持多进程
          sourceMap: true,
          terserOptions: {
              compress: {
                  // drop_console: true
              }
          }
      })
    ]
  },
  module: {
    rules: [
        {
            test: /\.css$/,
            use: [{
                loader: MiniCssExtractPlugin.loader,
                options: {
                    esModule: true
                }
            }, 'css-loader']
        },
        {
            test: /\.scss$/,
            use: [{
                loader: MiniCssExtractPlugin.loader,
                options: {
                    esModule: true
                }
            }, 'css-loader', 'sass-loader']
        },
        {
            test: /\.sass$/,
            use: [{
                loader: MiniCssExtractPlugin.loader,
                options: {
                    esModule: true
                }
            }, 'css-loader', 'sass-loader?indentedSyntax']
        },
        {
            test: /\.vue$/,
            loader: 'vue-loader',
            options: {
                loaders: {
                    scss: [
                        'vue-style-loader',
                        'css-loader',
                        'sass-loader'
                    ],
                    sass: [
                        'vue-style-loader',
                        'css-loader',
                        'sass-loader?indentedSyntax'
                    ]
                }
            }
        },
        {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        },
        {
            test: /\.(png|jpg|gif|svg)$/,
            loader: 'file-loader',
            options: {
                name: '[name].[ext]?[hash]',
                outputPath: './img'
            }
        },
        {
            test: /\.(woff|svg|eot|ttf|woff2)$/,
            loader: 'file-loader'
        }
    ]
  },
  resolve: {
    alias: {
        vue$: 'vue/dist/vue.esm.js',
        '@@': path.resolve(__dirname)
    },
    extensions: ['*', '.js', '.vue', '.json']
  },
  externals: {
        root: 'Vue',
        commonjs: 'vue',
        commonjs2: 'vue',
        amd: 'vue'
  },
  performance: {
      hints: false
  }
  
}

const conditionConfig = {
    entry:'./src/index.js',
    output:''
}