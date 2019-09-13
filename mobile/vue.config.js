const path = require('path')

module.exports = {
  //对less进行配置
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        path.resolve(__dirname, './src/assets/less/index.less')
      ]
    }
  },    
  devServer:{
    port:3003,
    proxy: 'http://127.0.0.1:3000', //所有没有匹配到静态资源的请求都会发送到3000端口
  },
  chainWebpack:config =>{
    config.resolve.alias
    .set('pages',path.resolve(__dirname,'./src/pages'))
    .set('api',path.resolve(__dirname,'./src/api'))
  } 
}