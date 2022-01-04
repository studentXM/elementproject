import Vue from 'vue'
import App from './App.vue'
import router from './router'
import elementui from 'element-ui'
import less from 'less'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/global.css'
// 登陆界面图标样式
import './assets/fonts/iconfont.css'
import axios from 'axios'
axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/';



Vue.prototype.$http = axios;
Vue.prototype.$message = elementui.Message;


Vue.config.productionTip = false
Vue.use(elementui)

Vue.use(less)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
