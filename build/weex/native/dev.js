const WeexWebpack = require('easywebpack-weex');
const WebpackBaseBuilder = require('./base');
class WeexBuilder extends WebpackBaseBuilder(WeexWebpack.WebpackWeexBuilder) {
  constructor(config) {
    super(config);
    this.setUglifyJs(false);
    this.setMiniCss(false);
  }
}
module.exports = new WeexBuilder({ build: { port: 9001 } }).create();
