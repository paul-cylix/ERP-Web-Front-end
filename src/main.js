import Vue from 'vue'
import App from './App.vue'
import router from './router.js';
import store from './store/index.js';
import LoadingSpinner from '@/components/ui/LoadingSpinner.vue';
import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';
import 'vue-search-select/dist/VueSearchSelect.css';
import TheAlert from '@/components/ui/TheAlert.vue';
import ValidationAlert from './components/ui/ValidationAlert.vue';
import ModalRemarks from './components/forms/ModalRemarks.vue';
import ModalStatus from './components/forms/ModalStatus.vue';


import DataTable from "@andresouzaabreu/vue-data-table";
Vue.component("data-table", DataTable);

// import "bootstrap/dist/css/bootstrap.min.css";
import "@andresouzaabreu/vue-data-table/dist/DataTable.css";

Vue.component('loading-spinner', LoadingSpinner)
Vue.component('the-alert', TheAlert)
Vue.component('date-picker', DatePicker)
Vue.component('validation-alert', ValidationAlert)
Vue.component('modal-remarks', ModalRemarks)
Vue.component('modal-status', ModalStatus)







new Vue({

  render: h => h(App),
  router,
  store,

  
}).$mount('#app')
