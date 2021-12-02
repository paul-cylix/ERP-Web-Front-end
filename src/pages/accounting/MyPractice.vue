<template>
<aside>
    <input type="file"  @change="onFileSelected" multiple="multiple">
    <input type="submit" value="upload" @click="onUpload()" > 

    <br>
    <ul v-if="this.selectedFile">
      <li v-for="file in selectedFile" :key="file.name">
        {{file.name}}
        <button @click="remove(selectedFile.indexOf(file))" >Remove</button>
        <a href="">Test</a>
        
      </li>
    </ul>
</aside>

</template>

<script>
import axios from 'axios';
export default {
  data(){
    return{
      selectedFile :[],
      urlObject: [],
    }
  },
  methods: {
    onFileSelected(event){
      let selectedFiles = event.target.files

      // console.log(selectedFiles)

      for(let i = 0; i < selectedFiles.length; i++){
        this.selectedFile.push(selectedFiles[i])
      }


    },

    remove(i){
      // this.selectedFile.splice(1,1)
      this.selectedFile.splice(i, 1);

    },

    onUpload(){
      const fd = new FormData();
      // fd.append('file[]',this.selectedFile)

      for(let i=0; i<this.selectedFile.length;i++){
        fd.append('file[]',this.selectedFile[i]);
      }
  
      console.log(this.selectedFile)

      axios.post('http://127.0.0.1:8000/api/rfp', fd)
      .then(res => {
        console.log(res)
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
    }
  },
}
</script>



