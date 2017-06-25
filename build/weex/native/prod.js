const WeexWebpack = require('easywebpack-weex');
const WebpackBaseBuilder = require('./base');
class WeexBuilder extends WebpackBaseBuilder(WeexWebpack.WebpackWeexBuilder) {
}

module.exports = new WeexBuilder().create();
