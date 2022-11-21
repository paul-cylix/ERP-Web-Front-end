<template>
  <div class="col-md-12 mt-3">
    <!-- Form Element sizes -->
    <div class="card card-secondary">
      <div class="card-header">
        <h3 class="card-title">Purchase Request</h3>
      </div>
      <div class="card-body ">
        <!-- Step Numbers -->
        <div class="d-flex progressBarWrapper text-center">
          <div class="progressbar" :class="classA">
            <span :class="classA">1</span>
          </div>
          <div class="progressbar" :class="classB">
            <span :class="classB">2</span>
          </div>
          <div class="progressbar" :class="classC">
            <span :class="classC">3</span>
          </div>
          <div class="progressbar" :class="classD">
            <span :class="classD">4</span>
          </div>
        </div>

        <div class="d-flex text-center">
          <div class="textbar" :class="classA">
            <small
              ><span :class="classA" class="font-weight-bold"
                >Select Request</span
              ></small
            >
          </div>
          <div class="textbar" :class="classB">
            <small
              ><span :class="classB" class="font-weight-bold"
                >Item Details</span
              ></small
            >
          </div>
          <div class="textbar" :class="classC">
            <small
              ><span :class="classC" class="font-weight-bold"
                >Request Details</span
              ></small
            >
          </div>
          <div class="textbar" :class="classD">
            <small
              ><span :class="classD" class="font-weight-bold"
                >Review</span
              ></small
            >
          </div>
        </div>
        <!-- / Step Numbers -->

        <!-- Main Form -->

          <!-- Select Request -->
          <aside class="mt-3" v-if="this.counter === 0">
            <data-table v-bind="parametersTable1" />
          </aside>
          <!-- /.Select Request -->




          <!-- Item Details -->
          <aside class="mt-3" v-if="this.counter === 1">
            
          </aside>
          <!-- /.Item Details -->


        <!-- / Main Form -->

        <!-- Buttons -->
        <div class="row d-flex justify-content-between mt-3">
          <aside
            class="
              col-lg-6
              d-flex
              justify-content-start
              align-items-center
              flex-nowrap
            "
          >
            <button
              v-show="counter"
              type="button"
              class="btn mr-1 btn-secondary btn-sm"
            >
              Previous
            </button>

            <button type="button" class="btn mr-1 btn-primary btn-sm">
              Next
            </button>
          </aside>

          <aside
            class="
              col-lg-6
              d-flex
              justify-content-end
              align-items-center
              flex-nowrap
            "
          >
            <button type="button" class="btn ml-1 btn-danger btn-sm">
              Close
            </button>
          </aside>
        </div>
        <!-- / Buttons -->
      </div>
    </div>
    <!-- /.card -->

    <!-- End -->
  </div>
</template>

<script>
// import { ModelListSelect } from "vue-search-select";
// import axios from "axios";
// import VsToast from "@vuesimple/vs-toast";
import PrCheckbox from "./PrCheckbox.vue";
export default {
  // components: {
  //   ModelListSelect,
  // },

  watch: {
    counter() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    },
  },
  computed: {
    classA() {
      return { active: this.counter >= 0 };
    },
    classB() {
      return { active: this.counter >= 1 };
    },
    classC() {
      return { active: this.counter >= 2 };
    },
    classD() {
      return { active: this.counter >= 3 };
    },

    // Calendaer
    todaysYear() {
      const today = new Date();
      const yyyy = today.getFullYear();
      return yyyy;
    },

    parametersTable1() {
      return {
        data: this.requestArray,
        perPageSizes: [
          10,
          25,
          50,
          100 * Math.ceil(this.requestArray.length / 100),
        ],
        tableClass:
          "table table-sm table-striped table-bordered small table-hover",        
        
        columns: [
          {
            key: "Select",
            sortable: false,
            component: PrCheckbox,
          },
          {
            key: "reference",
            title: "Reference",
          },
          {
            key: "requestDate",
            title: "Request Date",
          },
          {
            key: "soNum",
            title: "SO Number ",
          },
          {
            key: "requestor",
            title: "Requestor",
          },
          {
            key: "type",
            title: "Type",
          },
          {
            key: "projectName",
            title: "Customer Name",
          },
          {
            key: "clientName",
            title: "Client Name",
          },

        ],
      };
    },

  },
  data() {
    return {
      counter: 1,
      isLoadingSpinner: false,
      requestArray: [
        { id: 1, selected: false, reference: "banana", requestDate: 3, soNum: 12, requestor: "string", type: "string2", projectName: "strings3", clientName: "string4" },
        { id: 2, selected: false, reference: "apple", requestDate: 4, soNum: 20, requestor: "string", type: "string2", projectName: "strings3", clientName: "string4" },
        { id: 3, selected: false, reference: "orange", requestDate: 3, soNum: 15, requestor: "string", type: "string2", projectName: "strings3", clientName: "string4" },
        { id: 4, selected: false, reference: "pineapple", requestDate: 7, soNum: 5, requestor: "string", type: "string2", projectName: "strings3", clientName: "string4" },
        { id: 5, selected: false, reference: "blackberry", requestDate: 4.1, soNum: 13, requestor: "string", type: "string2", projectName: "strings3", clientName: "string4" },
        { id: 6, selected: false, reference: "lemon", requestDate: 1.5, soNum: 15, requestor: "string", type: "string2", projectName: "strings3", clientName: "string4" },
        { id: 7, selected: false, reference: "avocado", requestDate: 5, soNum: 6, requestor: "string", type: "string2", projectName: "strings3", clientName: "string4" },
        { id: 8, selected: false, reference: "watermelon", requestDate: 8, soNum: 2, requestor: "string", type: "string2", projectName: "strings3", clientName: "string4" },
        { id: 9, selected: false, reference: "papaya", requestDate: 5, soNum: 5, requestor: "string", type: "string2", projectName: "strings3", clientName: "string4" },
        { id: 10, selected: false, reference: "cocunut", requestDate: 10, soNum: 3, requestor: "string", type: "string2", projectName: "strings3", clientName: "string4" },
        { id: 11, selected: false, reference: "mango", requestDate: 3.3, soNum: 16, requestor: "string", type: "string2", projectName: "strings3", clientName: "string4" },
        { id: 12, selected: false, reference: "pear", requestDate: 5.5, soNum: 10, requestor: "string", type: "string2", projectName: "strings3", clientName: "string4" }
      ],
      remarks: [],
      status: [],
    };
  },

  async created() {

  },

  methods: {

  },
};
</script>

<style scoped>
.progressBarWrapper {
  margin: 20px 0px;
}
.progressbar {
  display: table-row;
  width: 100%;
  line-height: 5px;
  background-color: lightgrey;
}

.progressbar.active {
  background-color: #3c8dbc;
}

.progressbar span {
  background-color: lightgrey;
  padding: 10px 16px;
  color: white;
  border-radius: 100%;
}

.progressbar span.active {
  background-color: #3c8dbc;
}

.textbar {
  display: table-row;
  width: 100%;
  line-height: 5px;
}

.textbar span {
  color: lightgray;
}

.textbar span.active {
  color: black;
}

#assetsFieldHandle {
  opacity: 0;
  position: absolute;
  overflow: hidden;
}

#uploadText {
  cursor: pointer;
}

#uploadContainer {
  background-color: #f8f9f9;
  border-width: 5px;
  border-style: dashed;
  border-color: #99badd;

  /* opacity: 1; */
}

[v-cloak] {
  display: none;
}

.ulUpload {
  list-style: none;
  padding: 0;
  margin: 0;
  text-decoration: none;
}
</style>
