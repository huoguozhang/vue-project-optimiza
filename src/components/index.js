import Vue from 'vue'
// 自动加载 global 目录下的 .js 结尾的文件, webpack专属的api，创建一个模块
const componentsContext = require.context('./global', true, /\.js$/) // webpack 方法
componentsContext.keys().forEach(component => {
  const componentConfig = componentsContext(component)
  /**
   * 兼容 import export 和 require module.export 两种规范
   */
  const ctrl = componentConfig.default || componentConfig
  Vue.component(ctrl.name, ctrl)
})
