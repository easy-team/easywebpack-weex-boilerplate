const WebpackTool = require('webpack-tool');
const webpack = WebpackTool.webpack;
const path = require('path');
const sassLoader = {
  loader: 'sass-loader',
  options: {
    includePaths: [path.join(__dirname, '../../asset/style')],
  },
};
const vueLoader = {
  loader: 'vue-style-loader'
};

const cssLoader = {
  loader: 'css-loader'
};
const baseDir = path.join(__dirname, '../..');
const vendor = path.join(baseDir, 'framework/weex/web.js');
const template = path.join(baseDir, 'view/layout.html');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const entry = {
  css: [vendor, path.join(baseDir, 'page/css/index.js')],
  cssfile: [vendor, path.join(baseDir, 'page/cssfile/index.js')],
  sass: [vendor, path.join(baseDir, 'page/sass/index.js')],
};
const webpackConfig = {
  entry,
  output: {
    filename: 'weex/test/js/[name].js',
    chunkFilename: 'weex/test/js/[id].js',
    path: path.join(baseDir, 'public'),
    publicPath: '/public/'
  },
  devtool: false,
  resolve: {
    extensions: ['.js', '.vue', '.json'],
  },
  resolveLoader: {
    alias: {
      'scss-loader': 'sass-loader',
    },
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: [
        'babel-loader',
      ],
    }, {
      test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
      loader: 'url-loader',
      query: {
        limit: 512,
        name: 'static/[name].[hash:7].[ext]',
      },
    }, {
      test: /\.vue$/,
      use: [
        {
          loader: 'vue-loader',
          options: {
            loaders: {
              css: [vueLoader, cssLoader],
              scss: [vueLoader, cssLoader, sassLoader],
              sass: [vueLoader, cssLoader, sassLoader],
            },
            compilerModules: [{
              postTransformNode: el => {
                el.staticStyle = `$processStyle(${el.staticStyle})`;
                el.styleBinding = `$processStyle(${el.styleBinding})`;
              }
            }],
          }
        }
      ]
    }, {
      test: /\.(css|scss)$/,
      use: ['css-loader', sassLoader]
    }]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: `"${process.env.NODE_ENV || 'development'}"`,
        PLATFORM: '"web"'
      }
    }),
    new HtmlWebpackPlugin({
      filename: 'test/css.html',
      chunks: ['css'],
      template,
    }),
    new HtmlWebpackPlugin({
      filename: 'test/cssfile.html',
      chunks: ['cssfile'],
      template,
    }),
    new HtmlWebpackPlugin({
      filename: 'test/sass.html',
      chunks: ['sass'],
      template,
    }),
  ],
};

const webpackTool = new WebpackTool();
webpackTool.server(webpackConfig);