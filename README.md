# easywebpack-weex-boilerplate

Weex Native and Web building boilerplate for Webpack

## 使用

#### 安装cli

```bash
npm install easywebpack-cli -g
```

#### 安装依赖

```bash
npm install
npm start
```

#### 启动应用

```bash
npm start
```


#### 项目构建

```bash
// 编译文件到磁盘打包使用(发布正式环境)
npm run build 或者 easy build prod
```

## 不使用 cli, 直接使用 easywebpack-weex

```js
//build/index.js
const easywebpack = require('easywebpack-weex');
const weexConfig = require('./weex/native');
const webConfig = require('./weex/web');
const NODE_SERVER = process.env.NODE_SERVER;

const webpackConfig = [weexNativeConfig, weexWebConfig];

if (process.env.NODE_ENV === 'development') {
  easywebpack.start(webpackConfig);
} else {
  easywebpack.build(webpackConfig);
}
```


start webpack debug server: http://127.0.0.1:8888/debug

![UI-VIEW](https://github.com/hubcarl/easywebpack-weex-boilerplate/blob/master/doc/webpack-tool-ui-view.png)
