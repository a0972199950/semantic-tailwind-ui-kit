/* eslint-disable */
import Vue from 'vue'
import App from './App.vue'
import { applyPolyfills, defineCustomElements } from '@jh-pkg/ui-kit/loader'

Vue.config.productionTip = false

Vue.config.ignoredElements = [/ff-\w*/]

applyPolyfills().then(() => {
  defineCustomElements()
})

new Vue({
  render: h => h(App),
}).$mount('#app')
