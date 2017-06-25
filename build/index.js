const WeexEasyWebpack = require('easywebpack-weex');
const weexNativeConfig = require('./weex/native');
const weexWebConfig = require('./weex/web');
const NODE_SERVER = process.env.NODE_SERVER;

const webpackConfig = [weexNativeConfig, weexWebConfig];

if (NODE_SERVER) {
  WeexEasyWebpack.server(webpackConfig);
} else {
  WeexEasyWebpack.build(webpackConfig);
}
