# easywebpack-weex-boilerplate

weex native and web building boilerplate for webpack

## Usage

```js
//build/index.js
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
```


## Run

```js
"scripts": {
    "start": "cross-env node build",
 }   
```

```bash
npm start
```

start webpack debug server: http://127.0.0.1:9000/debug

![UI-VIEW](https://github.com/hubcarl/easywebpack-weex-boilerplate/blob/master/doc/webpack-tool-ui-view.png)
