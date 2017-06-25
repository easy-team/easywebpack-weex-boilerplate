const WebpackTool = require('webpack-tool');
const webpack = WebpackTool.webpack;
const path = require('path');
const sassLoader = {
  loader: 'sass-loader',
  options: {
    includePaths: [path.join(__dirname, '../../asset/style')],
  },
};

const baseDir = path.join(__dirname, '../..');
const entry = {
  css: [path.join(baseDir, 'page/css/index.js')],
  cssfile: [path.join(baseDir, 'page/cssfile/index.js')],
  sass: [path.join(baseDir, 'page/sass/index.js')],
};
const webpackConfig = {
  entry,
  output: {
    filename: 'weex/test/weex/js/[name].js',
    chunkFilename: 'weex/test/weex/js/[id].js',
    path: path.join(baseDir, 'public'),
    publicPath: '/public/'
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
  },
  externals: ['vue'],
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
      loader: 'weex-loader',
      options: {
        loaders: {
          css: ['weex-vue-loader/lib/style-loader'],
          scss: ['weex-vue-loader/lib/style-loader', sassLoader],
          sass: ['weex-vue-loader/lib/style-loader', sassLoader]
        },
      }
    }, {
      test: /\.(css|scss)$/,
      use: ['css-loader', sassLoader]
    }]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: `"${process.env.NODE_ENV || 'development'}"`,
        PLATFORM: '"weex"'
      }
    }),
    new webpack.BannerPlugin({ banner: '// { "framework": "Vue" }\n', raw: true })
  ],
};

const webpackTool = new WebpackTool();
webpackTool.server(webpackConfig);