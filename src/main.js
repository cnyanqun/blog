// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import $ from "jquery";
import Bootstrap from 'bootstrap'
import VCharts from 'v-charts'
import 'bootstrap/dist/js/bootstrap.min.js'
import ElementUI from 'element-ui'
import './utils'
import 'element-ui/lib/theme-chalk/index.css'
import CKEditor from '@ckeditor/ckeditor5-vue'
Vue.use(CKEditor);
Vue.use(ElementUI)
Vue.use(Bootstrap)
Vue.use(VCharts)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
