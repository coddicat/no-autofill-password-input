import Vue from 'vue'
import App from './App.vue'
import noAutofillPasswordInput from './no-autofill-password-input'

Vue.component('no-autofill-password-input', noAutofillPasswordInput)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')