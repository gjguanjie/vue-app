module.exports = {
  /* 部署生产环境和开发环境下的URL：可对当前环境进行区分，baseUrl 从 Vue CLI 3.3 起已弃用，要使用publicPath */
  /* baseUrl: process.env.NODE_ENV === 'production' ? './' : '/' */
  // publicPath: process.env.NODE_ENV === 'production' ? '/public/' : './',
  publicPath: process.env.NODE_ENV === 'production' ? './' : './',
  /* 输出文件目录：在npm run build时，生成文件的目录名称 */
  outputDir: 'dist',
  /* 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录 */
  assetsDir: 'assets',
  /* 是否在构建生产包时生成 sourceMap 文件，false将提高构建速度 */
  productionSourceMap: false,
  /* 默认情况下，生成的静态资源在它们的文件名中包含了 hash 以便更好的控制缓存，你可以通过将这个选项设为 false 来关闭文件名哈希。(false的时候就是让原来的文件名不改变) */
  filenameHashing: false,
  /* 代码保存时进行eslint检测 */
  lintOnSave: true,
  /* webpack-dev-server 相关配置 */
  devServer: {
    /* 自动打开浏览器 */
    open: false,
    /* 设置为0.0.0.0则所有的地址均能访问 */
    host: '0.0.0.0',
    port: 9527,
    https: false,
    hotOnly: false,
    /* 使用代理 */
    proxy: {
      '/api/': {
        /* 目标代理服务器地址 */
        target: 'http://127.0.0.1:9000/',
        /* 允许跨域 */
        changeOrigin: true
      }
    }
  },
  pwa: {
    iconPaths: {
      favicon32: 'favicon.ico',
      favicon16: 'favicon.ico',
      appleTouchIcon: 'favicon.ico',
      maskIcon: 'favicon.ico',
      msTileImage: 'favicon.ico'
    }
  },
  css: {
    loaderOptions: {
      css: {},
      // sass: {
      //   data: '@import "@styles/skin.scss"'
      // },
      postcss: {
        plugins: [
          require('postcss-px2rem')({
            remUnit: 100
            // propList: ['*'],
            // mediaQuery: false, // 允许在媒体查询中转换px。
            // exclude: '/node_modules/',
            // minPixelValue: 3, // 设置要替换的最小像素值(3px会被转rem)。 默认 0
            // selectorBlackList: ['weui', 'mu'] // 忽略转换正则匹配项
          })
        ]
      }
    }
  },
  chainWebpack: config => {
    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()
    svgRule
      .test(/\.svg$/)
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
  }
}
