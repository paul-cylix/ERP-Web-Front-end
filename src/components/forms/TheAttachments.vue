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
      <ul class="mt-4  text-decoration-none" id="ulUpload" v-if="this.filelist.length" v-cloak>
        <li class="text-sm mt-2" v-for="file in filelist" :key="file.name">
           {{file.name}} 
           <button
            class="btn btn-danger btn-sm ml-2"
            type="button"
            @click="remove(filelist.indexOf(file))"
            title="Remove file"
          >
            remove
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      filelist: "",
    };
  },
  methods: {
    onChange() {
      this.filelist = [...this.$refs.file.files];
      console.log(this.filelist[0].name);
    },
    remove(i) {
      this.filelist.splice(i, 1);
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

#ulUpload{
    list-style:none;
    padding:0;
    margin:0;
    text-decoration: none;
}


</style>
