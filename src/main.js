import Vue from 'vue'
import App from './App.vue'
import router from './router.js';
import store from './store/index.js';
import LoadingSpinner from '@/components/ui/LoadingSpinner.vue';
import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';
import 'vue-search-select/dist/VueSearchSelect.css';

import DataTable from "@andresouzaabreu/vue-data-table";
Vue.component("data-table", DataTable);

// import "bootstrap/dist/css/bootstrap.min.css";
import "@andresouzaabreu/vue-data-table/dist/DataTable.css";

Vue.component('loading-spinner', LoadingSpinner)
Vue.component('date-picker', DatePicker)




new Vue({

  render: h => h(App),
  router,
  store,

  
}).$mount('#app')
