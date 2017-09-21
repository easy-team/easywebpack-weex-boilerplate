'use strict';
const path = require('path');
module.exports = {
  framework: 'weex',
  entry: {
    include: 'page',
    exclude: ['page/html'],
    template: 'view/layout.html'
  },
  alias: {
    asset: 'app/web/asset',
    app: 'app/web/framework/vue/app.js',
    component: 'app/web/component',
    framework: 'app/web/framework',
    store: 'app/web/store'
  },
  install: {
    save: false
  },
  create() {
    if (this.type === 'web') {
      this.addEntry('vendor', [path.join(this.config.baseDir, 'framework/weex/web.js')]);
    }
  }
};