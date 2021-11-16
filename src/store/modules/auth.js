export default {
  state() {
    return {
      user:{
        id: null,
        fullName: null,
        email: null,
        admin: null,
        employee_id: null,
        fname: null,
        lname: null,
        department: null,
        positionName: null,
        companyId: null,
        companyName: null,
        token: null,
        expiresAt: null,
      },
    };
  },
  mutations:{
    setUser(state, payload) {
      state.user.id = payload.id
      state.user.fullName = payload.fullName
      state.user.email = payload.email
      state.user.admin = payload.admin
      state.user.employee_id = payload.employee_id
      state.user.fname = payload.fname
      state.user.lname = payload.lname
      state.user.department = payload.department
      state.user.positionName = payload.positionName
      state.user.companyId = payload.companyId
      state.user.companyName = payload.companyName
      state.user.token = payload.token
      state.user.expiresAt = payload.expiresAt
    },
  },
  actions:{
    async login(context, payload){
      console.log(payload)
      const response = await fetch('http://127.0.0.1:8000/api/user/login',{
        method:'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          email: payload.email,
          password: payload.password,
          companyId: payload.companyId
        })
      });

    const responseData = await response.json();
    console.log(responseData)

    if (!response.ok) {
      const error = new Error(
        responseData.message || 'Failed to authenticate. Check your login data.'
      );


    // Manual Handle Auth
    //   if (api_call.status == 200) {
    //     // You can do your error handling here
    // } else {
    //     // Call the .json() method on your response to get your JSON data
    //     const data = await api_call.json();
    // }


      console.log(error.message)
      throw error;
    }




    

    context.commit('setUser', {
      id: responseData.user.id,
      fullName: responseData.user.name,
      email: responseData.user.email,
      admin: responseData.user.admin,
      employee_id: responseData.user.employee_id,
      fname: responseData.user.fname,
      lname: responseData.user.lname,
      department: responseData.user.department,
      positionName: responseData.user.positionName,
      companyId: responseData.user.companyId,
      companyName: responseData.user.companyName,
      token: responseData.Personal_Access_Token,
      expiresAt: responseData.expires_at,
    });
      
    }
  },
  getters:{
    userLoggedIn(state){
      return state.user;
    },
    isAuthenticated(state){
      return !!state.user.token;
    }
  }
}