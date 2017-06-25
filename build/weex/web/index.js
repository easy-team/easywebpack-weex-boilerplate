const webpackConfig = process.env.NODE_ENV === 'production' ? require('./prod') : require('./dev');
// console.log(webpackConfig.module.rules);
module.exports = webpackConfig;