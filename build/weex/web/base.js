const path = require('path');
const WeexWebpack = require('easywebpack-weex');
const merge = WeexWebpack.merge;
const baseDir = path.join(__dirname, '../../../');
const entry = path.join(baseDir, 'page');
const template = path.join(baseDir, 'view/layout.html');
const WebpackBaseBuilder = WebpackBuilder => class extends WebpackBuilder {
  constructor(config) {
    super(merge({ baseDir, build: { entry, template } }, config));
    this.setPrefix('weex/web');
    this.setEntry('vendor', [path.join(this.config.baseDir, 'framework/weex/web.js')]);
    this.setStyleLoaderOption({
      sass: {
        options: {
          includePaths: [path.join(this.config.baseDir, 'asset/style')],
        },
      },
    });
  }
};
module.exports = WebpackBaseBuilder;