const path = require('path');
const WeexWebpack = require('easywebpack-weex');
const merge = WeexWebpack.merge;
const baseDir = path.join(__dirname, '../../../');
const entryPath = path.join(baseDir, 'page');
const WebpackBaseBuilder = WebpackBuilder => class extends WebpackBuilder {
  constructor(config) {
    super(merge({ baseDir, build: { entry: entryPath } }, config));
    this.setPrefix('weex/native');
    this.setAlias('asset', path.join(this.config.baseDir, 'asset'));
    this.setAlias('component', path.join(this.config.baseDir, 'component'));
    this.setAlias('framework', path.join(this.config.baseDir, 'framework'));
    this.setAlias('store', path.join(this.config.baseDir, 'store'));
    this.setStyleLoaderOption({
      sass: {
        options: {
          includePaths: [path.join(this.config.baseDir, 'asset/style')],
        }
      },
    });
  }
};
module.exports = WebpackBaseBuilder;