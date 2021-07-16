const resolve = dir => require('path').join(__dirname, dir);

module.exports = {
    publicPath: process.env.BASE_URL,
    lintOnSave: false,
    // 生产环境是否生成 sourceMap 文件
    productionSourceMap: false
}