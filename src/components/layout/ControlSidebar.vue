<template>
  <!-- Control Sidebar -->
  <aside class="control-sidebar control-sidebar-dark">
    <!-- Control sidebar content goes here -->
    <div class="p-3">
      <h5>{{ this.fullName }}</h5>
      <div class="list-group">
        <!-- <a href="#" class="list-group-item list-group-item-action active">
          Cras justo odio
        </a>
        <a href="#" class="list-group-item list-group-item-action"
          >Dapibus ac facilisis in</a
        >
        <a href="#" class="list-group-item list-group-item-action"
          >Morbi leo risus</a
        > -->

  <button class="py-1 list-group-item list-group-item-action" type="button" data-toggle="collapse" data-target="#multiCollapseExample2" aria-expanded="false" aria-controls="multiCollapseExample2">{{ companyName }}</button>

    <div class="collapse multi-collapse" id="multiCollapseExample2">
      <button v-for="item in company" @click="switchCompany(item.companyID, item.companyName)" :key="item.id" class="py-1 list-group-item list-group-item-action" type="button" data-toggle="collapse" data-target="#multiCollapseExample2" aria-expanded="false" aria-controls="multiCollapseExample2">{{ item.companyName }}</button>
    </div>


        
        <button @click="logout()"  class="py-1 list-group-item list-group-item-action"
          >Logout</button
        >













        <!-- show details of logged user -->
        <!-- <button @click="show()"  class="py-1 list-group-item list-group-item-action"
          >show</button
        > -->
      </div>
    </div>
    
  </aside>
  
  <!-- /.control-sidebar -->
</template>

<script>
import VsToast from "@vuesimple/vs-toast";
export default {
  data(){
    return {
      fullName: '',
      company: [],
    }
  },

  created() {
    this.show();
  },

  computed: {
    companyName(){
      return this.$store.getters.userLoggedIn.companyName;
    }
  },

  watch: {
    companyName(newValue){
      console.log(newValue)
    }
  },


  methods:{
    openToast(position, variant, message) {
      const toastTitle = variant.charAt(0).toUpperCase() + variant.slice(1);
      VsToast.show({
        title: `${toastTitle}`,
        message: `${message}`,
        variant,
        position,
      });
    },

    show(){
      const data = this.$store.getters.userLoggedIn;
      this.fullName = data.fullName

      this.company = data.company;      
    },

    logout(){
      this.$store.dispatch('logout');
      this.openToast("top-right", "success", 'Logged out Successfully!');

      this.$router.replace('/')
    },

    switchCompany(companyId, companyName){
      const selectedCompany = {
        'companyId': companyId,
        'companyName': companyName,
      }
      this.$store.dispatch('switchCompany',selectedCompany);

      if (this.$router.currentRoute.path !== '/dashboard') {
        this.$router.push('/dashboard')
      }


      this.openToast("top-right", "success", 'Switch company completed!');
          // this.openToast("top-right", "error", error.message);


      

    },
    
  }
}
</script>
