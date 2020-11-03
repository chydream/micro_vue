// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import { setPublicPath } from 'systemjs-webpack-interop'
import Vue from 'vue'
import App from './App'
import singleSpaVue from 'single-spa-vue'
import router from './router'
setPublicPath('child')

Vue.config.productionTip = false

/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   router,
//   components: { App },
//   template: '<App/>'
// })

const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: {
    el: '#app1',
    render: (h) => h(App),
    router
  }
})

export const bootstrap = vueLifecycles.bootstrap
export const mount = vueLifecycles.mount
export const unmount = vueLifecycles.unmount
