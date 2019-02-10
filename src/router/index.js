import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
const routes = []
const routerContext = require.context('./', true, /index\.js$/)
routerContext.keys().forEach(route => {
  if (route.startsWith('./index')) { // 排除自己(本文件)
    return
  }
  const routerModule = routerContext(route)
  routes.push(...(routerModule.default || routerModule))
})
export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL, // '可以加前缀'
  routes
})
