import Vue from 'vue'
import App from './App.vue'
import router from './router.js';
import store from './store/index.js';
import LoadingSpinner from '@/components/ui/LoadingSpinner.vue';
import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';
import 'vue-search-select/dist/VueSearchSelect.css'

Vue.component('loading-spinner', LoadingSpinner)
Vue.component('date-picker', DatePicker)





Vue.config.productionTip = false

new Vue({

  render: h => h(App),
  router,
  store,

  
}).$mount('#app')
