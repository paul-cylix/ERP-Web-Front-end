<template>
  <div
    class="d-flex  align-items-center justify-content-center text-center position-relative mt-4"
    id="app"
  >
    <div
      class="p-5 col-md-12 rounded"
      @dragover="dragover"
      @dragleave="dragleave"
      @drop="drop"
      id="uploadContainer"
    >
      <input
        type="file"
        multiple
        name="fields[assetsFieldHandle][]"
        id="assetsFieldHandle"
        class="w-25 h-25 overflow-hidden"
        @change="onChange"
        ref="file"
        accept=".pdf,.jpg,.jpeg,.png"
      />

      <label for="assetsFieldHandle" class="block cursor-pointer">
          <span class="text-secondary ">Drag and Drop files here</span> <br><span class="text-secondary">or</span><br>
        <div id="uploadText" class="mt-2 btn btn-sm btn-primary">Select files</div>
      </label>
      <aside class="d-flex align-items-center justify-content-center">
      <ul class="mt-4  text-decoration-none ulUpload" id="ulUpload" v-if="this.filelist.length" v-cloak>
        <li class="text-sm mt-2" v-for="file in filelist" :key="file.name">
           {{file.name}} 
           <button
            class="btn btn-danger btn-sm ml-2"
            type="button"
            @click="remove(filelist.indexOf(file))"
            title="Remove file"
          >
            Remove
          </button>
  
          <!-- <a href='"+tmppath+"' target='_blank' class='btn btn-secondary'>View</a> -->
        </li>
      </ul>


      <ul class="mt-4  text-decoration-none ulUpload"  v-if="this.filespreview.length" v-cloak>
        <li class="text-sm mt-2" v-for="file in filespreview" :key="file.name">

          <a :href='file.link' target='_blank' class='btn btn-secondary btn-sm ml-2'>Preview</a>
        </li>
      </ul>
      </aside>


    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      filelist: "",
      filespreview: "",
    };
  },

  watch:{
    filelist(newValue){
      console.log(newValue)
    }
  },

 
  methods: {
    onChange() {
      this.filelist = [...this.$refs.file.files];
      // console.log(this.filelist);
      // var tmppath = URL.createObjectURL(files[i]);

      this.filePreview();
  
    },
    remove(i) {
      this.filelist.splice(i, 1);
      this.filePreview();
      // console.log(this.filelist)
      // console.log(this.filespreview)

    },
    dragover(event) {
      event.preventDefault();
      // Add some visual fluff to show the user can drop its files
      
      if (!event.currentTarget.classList.contains("bg-green-300")) {
        event.currentTarget.classList.remove("bg-gray-100");
        event.currentTarget.classList.add("bg-green-300");
      }
    },
    dragleave(event) {
      // Clean up
      event.currentTarget.classList.add("bg-gray-100");
      event.currentTarget.classList.remove("bg-green-300");
    },
    drop(event) {
      event.preventDefault();
      this.$refs.file.files = event.dataTransfer.files;
      this.onChange(); // Trigger the onChange event manually
      
      // Clean up
      event.currentTarget.classList.add("bg-gray-100");
      event.currentTarget.classList.remove("bg-green-300");
    },


    filePreview(){
      let files = this.filelist;

      const fileContainer = [];
      for(var i = 0; i<files.length; i++){
          var tmppath = URL.createObjectURL(files[i]);
          
          const thisFiles = {
            link : tmppath
          }

          fileContainer.push(thisFiles)
      }

      this.filespreview = fileContainer;
    }

    // createUrlObject(files){
    //   var tmppath = URL.createObjectURL(files);
    // }
  },
};
</script>
<style scoped>
#assetsFieldHandle{
  opacity: 0;
  position: absolute;
  overflow: hidden;
}

#uploadText{
  cursor: pointer;
}

#uploadContainer{
  background-color: #f8f9f9;
  border-width:5px;  
  border-style:dashed;
  border-color: #99BADD;

  /* opacity: 1; */
}

/* #uploadContainer::before{
  background-color: #f8f9f9;
  border-width:5px;  
  border-style:dashed;
  border-color: #99BADD;
  background-image: url("https://www.pngall.com/wp-content/uploads/2/Upload-PNG-Image-File.png");
  background-repeat:no-repeat;
  background-position:center center;
  background-size:contain;

} */

[v-cloak] {
  display: none;
}

.ulUpload{
    list-style:none;
    padding:0;
    margin:0;
    text-decoration: none;
}


</style>
