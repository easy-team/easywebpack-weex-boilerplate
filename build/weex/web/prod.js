const WeexWebpack = require('easywebpack-weex');
const WebpackBaseBuilder = require('./base');
class WeexWebBuilder extends WebpackBaseBuilder(WeexWebpack.WebpackWebBuilder) {
}

module.exports = new WeexWebBuilder().create();
