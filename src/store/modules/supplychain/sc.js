import axios from "axios";

export default {
  namespaced: true,
  state() {
    return {
      supplies: [],
    };
  },

  mutations: {
    fetchSupplies(state, payload) {
      state.supplies.push(...payload); 
    },
  },

  actions: {
    async fetchSupplies(context, payload) {
      
      try {
        const resp = await axios.get(
          `https://jsonplaceholder.typicode.com/comments?_page=${payload}`
        );

     
        if (resp.status >= 200 && resp.status <= 399) {
          const supply = resp.data;
          console.log(supply)

          if (resp.data.length) {
            context.commit("fetchSupplies", supply);
            return !!resp.data.length
          } else {
            return !!resp.data.length
          }

        }
      } catch (err) {
        // Handle Error Here
        console.error(err);
        throw err;
      }
    },




  },

  getters: {
    getSupplies(state) {
      return state.supplies;
    }
  },
};
