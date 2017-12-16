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
    asset: 'asset',
    app: 'framework/vue/app.js',
    component: 'component',
    framework: 'framework',
    store: 'store'
  },
  loaders: {
  },
  plugins: {

  },
  lib: [path.join(__dirname, 'framework/weex/web.js')],
  onWeex() {

  },
  done() {

  }
};