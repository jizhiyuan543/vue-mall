module.exports = {
  configureWebpack : {
    resolve:{
      alias:{
        // 默认@表示src
        'assets' : '@/assets',
        'components' : '@/components',
        'common' : 'components/common',
        'content' : 'components/content',
        'network' : '@/network',
        'views' : '@/views'
      }
    }
  }
}