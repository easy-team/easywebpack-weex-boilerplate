'use strict';
const path = require('path');
module.exports = {
  framework: 'weex',
  entry: {
    css: 'src/page/css/index.js',
    sass: 'src/page/sass/index.js',
    cssfile: 'src/page/cssfile/index.js'
  },
  template: 'src/view/layout.html',
  lib:[path.join(__dirname, 'src/framework/weex/web.js')],
  loaders: {},
  plugins: {},
  done() {}
};