import axios from "axios";
export default {
  namespaced: true,
  state() {
    return {
      status: [],
      isItLoading: false,
    };
  },

  mutations: {
    queryStatus(state, payload){
      state.status = payload
    }
  },

  actions: {
    async queryStatus(context,payload){
      const id = payload.id
      const frmname = payload.frmname
      const companyId = payload.companyId
      
      try {
        const response = await axios.get(
          `http://127.0.0.1:8000/api/status/${id}/${frmname}/${companyId}`
        );

        const payload = response.data;
        context.commit("queryStatus", payload);
        
        return response

      } catch (error) {
        console.error(error);
        return error
      }
    },
  },

  getters: {
    getStatus(state){
      return state.status;
    }
  },
};
