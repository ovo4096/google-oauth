import 'bootstrap/dist/css/bootstrap.min.css'
import Vue from 'vue'
import App from './App.vue'

import GAuth from 'vue-google-oauth2'
const gauthOption = {
  clientId: '687126414528-l9o1ikjs1t690uco4mb5rmc3e0aj47gp.apps.googleusercontent.com',
  scope: 'profile email',
  prompt: 'select_account'
}
Vue.use(GAuth, gauthOption)

Vue.config.productionTip = false


new Vue({
  render: h => h(App),
}).$mount('#app')
