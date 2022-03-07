import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import authModule from './modules/auth.js';
import createRfpModule from './modules/accounting/rfp/createRfp.js';
import dtrModule from './modules/humanresource/dtr.js';
import remarksModule from './modules/general/workflow/remarks.js';
import statusModule from './modules/general/workflow/status.js';





const store = new Vuex.Store({
  modules: {
    auth: authModule,
    createRfp: createRfpModule,
    dtr: dtrModule,
    remarks: remarksModule,
    status: statusModule,
  },

})


export default store;