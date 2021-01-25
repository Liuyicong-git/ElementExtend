const path = require('path');
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { version } = require('./package.json');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require("friendly-errors-webpack-plugin");
const { HotModuleReplacementPlugin } = require("webpack");
const CWD = process.cwd();


const commonConfig = {
  mode:"development",

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
            test: /\.js|jsx$/,
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

const libConfig = {
    entry: {
      ElementExpand:'./src/index.js'
    },
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
    output: {
      path:path.join( CWD , './lib'),
      filename: '[name].js',
      chunkFilename: '[id].js',
      library: 'common',
      libraryTarget: 'umd',
      umdNamedDefine: true
    },
    plugins: [
      new webpack.DefinePlugin({
          'process.env': {
              NODE_ENV: '"production"'
          }
      }),
      new VueLoaderPlugin(),
      new webpack.LoaderOptionsPlugin({
          minimize: true
      }),
      new MiniCssExtractPlugin({
          filename: '[name].css'
      }),
      // new webpack.BannerPlugin(new Date().toString() + `v-${version}`),
  ],
}
const devConifg = {
    entry: './examples/main.js',
    devtool: 'inline-source-map',
    devServer: {
      port: 9527,
      stats: 'errors-only' ,
      quiet: true,
      hot: false,
      contentBase: './', // 指定本地文件夹提供给服务器
      historyApiFallback: true, // 如果设置为true，所有的跳转将指向index.html
    },
    output:{
      filename: '[name].js',
      // path: path.resolve(__dirname, 'dist'),
      publicPath:"/"
    },
    plugins:[
      new FriendlyErrorsWebpackPlugin({
        compilationSuccessInfo: {
          messages: ['You application is running here http://localhost:9527'],
        },
      }),
      // 注入HMR runtime代码
      new HotModuleReplacementPlugin(),
      new VueLoaderPlugin(),
      new webpack.LoaderOptionsPlugin({
          minimize: true
      }),
      new MiniCssExtractPlugin({
          filename: '[hash].css'
      }),
      new HtmlWebpackPlugin({
        template: 'public/index.html',
        filename: 'index.html',
        inject: true,
        title: 'ElementExpand'
      })
    ]

}
let evnAdapt = {} ;
switch(process.env.NODE_ENV) {
  case 'dev':
    evnAdapt = Object.assign({},commonConfig,devConifg);
    break;
  case 'lib':
    evnAdapt = Object.assign({},commonConfig,libConfig);
    break
  default:
    console.log("启动失败")
    return;
}

module.exports = evnAdapt ;