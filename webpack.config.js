const path = require('path')

//1.导入html-webpack-plugin 插件  得到构造函数
const HtmlPlugin = require('html-webpack-plugin')
//2.new构造函数 创建插件的实例对象
const htmlPlugin = new HtmlPlugin({
    //指定要复制的页面
    template : './src/index.html',
    //指定复制出来的文件名和存放路径
    filename : './index.html'
})

module.exports = {
    mode: 'development', // mode用来指定构建模式。可选值有development和production
    plugins:[htmlPlugin], // 插件数组
    devServer:{
        open:true,
        host: '127.0.0.1',
        port: 80
    }
}
