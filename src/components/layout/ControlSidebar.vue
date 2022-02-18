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

export default {
  data(){
    return {
      fullName: '',
    }
  },
  created() {
    this.show();
  },
  methods:{
    show(){
      const data = this.$store.getters.userLoggedIn;
      // console.log(data.fullName)
      this.fullName = data.fullName
    },

    logout(){
      this.$store.dispatch('logout');
      // this.$router.replace('/')

    }
  }
}
</script>
