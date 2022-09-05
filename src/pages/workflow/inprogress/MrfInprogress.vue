<template>
  <!-- Container -->
  <div class="col-md-12 mt-3">
    <div class="card card-secondary chrome">
      <div
        class="overlay"
        style="background-color: white !important"
        v-show="isLoading"
      >
        <loading-spinner></loading-spinner>
      </div>

      <div class="card-header">
        <h3 class="card-title">Materials Request</h3>
      </div>
      <div class="card-body">
        <!-- Progress Bar -->
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
        <div class="d-flex text-center mb-4">
          <div class="textbar" :class="classA">
            <small
              ><span :class="classA" class="font-weight-bold"
                >Request Details</span
              ></small
            >
          </div>
          <div class="textbar" :class="classB">
            <small
              ><span :class="classB" class="font-weight-bold"
                >Request Form</span
              ></small
            >
          </div>
          <div class="textbar" :class="classC">
            <small
              ><span :class="classC" class="font-weight-bold"
                >Attachments</span
              ></small
            >
          </div>
          <div class="textbar" :class="classD">
            <small
              ><span :class="classD" class="font-weight-bold"
                >Form Review</span
              ></small
            >
          </div>
        </div>
        <!-- /. Progress Bar -->

        <!-- #2 request details-->
        <section v-show="counter === 1">
          <div class="row mt-4">
            <div class="col-md-6">
              <div class="form-group">
                <small><label for="class-name">Class</label></small>
                <input
                  type="text"
                  class="form-control form-control-sm py-3"
                  disabled
                />
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <small><label for="type-name">Type</label></small>
                <input
                  type="text"
                  class="form-control form-control-sm py-3"
                  disabled
                />
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col">
              <div class="form-group">
                <small
                  ><label for="class-type"
                    >Type of Supplies Request Internal</label
                  ></small
                >
                <input
                  type="text"
                  class="form-control form-control-sm py-3"
                  disabled
                />
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-3">
              <div class="form-group">
                <small><label for="surf-number">SURF Number</label></small>
                <input
                  type="text"
                  class="form-control form-control-sm py-3"
                  disabled
                />
              </div>
            </div>
            <div class="col-md-3">
              <div class="form-group">
                <small
                  ><label for="requested-date">Requested Date</label></small
                >
                <input
                  type="text"
                  class="form-control form-control-sm py-3"
                  disabled
                />
              </div>
            </div>
            <div class="col-md-3">
              <div class="form-group">
                <small
                  ><label for="actual-delivery-date"
                    >Actual Delivery Date</label
                  ></small
                >
                <input
                  type="text"
                  class="form-control form-control-sm py-3"
                  disabled
                />
              </div>
            </div>
            <div class="col-md-3">
              <div class="form-group">
                <small
                  ><label for="planned-delivery-date"
                    >Planned Delivery Date</label
                  ></small
                >
                <input
                  type="text"
                  class="form-control form-control-sm py-3"
                  disabled
                />
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <div class="form-group">
                <small
                  ><label for="mrf-short-text">MRF Short Text</label></small
                >
                <input
                  type="text"
                  class="form-control form-control-sm py-3"
                  disabled
                />
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <small
                  ><label for="reporting-manager"
                    >Reporting Manager</label
                  ></small
                >
                <input
                  type="text"
                  class="form-control form-control-sm py-3"
                  disabled
                />
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-6">
              <div class="form-group">
                <small><label for="cost-center">Cost Center</label></small>
                <input
                  type="text"
                  class="form-control form-control-sm py-3"
                  disabled
                />
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <small><label for="client-name">Client Name</label></small>
                <input
                  type="text"
                  class="form-control form-control-sm py-3"
                  disabled
                />
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col">
              <div class="form-group">
                <small><label for="purpose">Purpose</label></small>
                <!-- <textarea class="form-control" name="purpose" id="purpose" :value="message" @input="updateMessage"  rows="5"></textarea> -->
                <textarea class="form-control" disabled rows="5"></textarea>
              </div>
            </div>
          </div>
        </section>

        <!-- #3 attach-->
        <section class="mb-4" v-show="counter === 2">
          <div class="row mt-4">
            <div class="pt-2 col-md-12 rounded" id="uploadContainer">
              <label
                for="assetsFieldHandle"
                style="width: 100%; text-align: center; cursor: pointer"
                class="block pt-3 cursor-pointer"
              >
                <span class="text-secondary">List of Attached File</span>
              </label>
            </div>
          </div>
        </section>

        <!-- #4 request details review (current active)-->
        <section class="card card-secondary" v-show="counter === 3">
          <div class="card-header">
            <h3 class="card-title">Request Details</h3>

            <div class="card-tools">
              <button
                type="button"
                class="btn btn-tool"
                data-card-widget="collapse"
              >
                <i class="fas fa-minus"></i>
              </button>
            </div>
          </div>
          <!-- /.card-header -->
          <div class="card-body p-0">
            <table
              class="table table-sm table-bordered table-hover table-striped"
            >
              <tbody>
                <tr class="row p-0 m-0">
                  <td class="col-md-3 px-3">MRF Number</td>
                  <td class="col-md-9 px-3">b</td>
                </tr>
                <tr class="row p-0 m-0">
                  <td class="col-md-3 px-3">Department</td>
                  <td class="col-md-9 px-3">b</td>
                </tr>
                <tr class="row p-0 m-0">
                  <td class="col-md-3 px-3">Full Name</td>
                  <td class="col-md-9 px-3">b</td>
                </tr>
                <tr class="row p-0 m-0">
                  <td class="col-md-3 px-3">Reporting Manager</td>
                  <td class="col-md-9 px-3">b</td>
                </tr>
                <tr class="row p-0 m-0">
                  <td class="col-md-3 px-3">MRF Short Text</td>
                  <td class="col-md-9 px-3">b</td>
                </tr>
                <tr class="row p-0 m-0">
                  <td class="col-md-3 px-3">Date Requested</td>
                  <td class="col-md-9 px-3">b</td>
                </tr>
                <tr class="row p-0 m-0">
                  <td class="col-md-3 px-3">Planned Delivery Date</td>
                  <td class="col-md-9 px-3">b</td>
                </tr>
                <tr class="row p-0 m-0">
                  <td class="col-md-3 px-3">Actual Delivery Date</td>
                  <td class="col-md-9 px-3">b</td>
                </tr>
                <tr class="row p-0 m-0">
                  <td class="col-md-3 px-3">Cost Center</td>
                  <td class="col-md-9 px-3">b</td>
                </tr>
                <tr class="row p-0 m-0">
                  <td class="col-md-3 px-3">Client Name</td>
                  <td class="col-md-9 px-3">b</td>
                </tr>
                <tr class="row p-0 m-0">
                  <td class="col-md-3 px-3">Materials Request Class</td>
                  <td class="col-md-9 px-3">b</td>
                </tr>
                <tr class="row p-0 m-0">
                  <td class="col-md-3 px-3">Materials Request Type</td>
                  <td class="col-md-9 px-3">b</td>
                </tr>
                <tr class="row p-0 m-0">
                  <td class="col-md-3 px-3">Remarks</td>
                  <td class="col-md-9 px-3">b</td>
                </tr>
              </tbody>
            </table>
          </div>
          <!-- /.card-body -->
        </section>

        <!-- #4 attachments review (current active)-->
        <section class="card card-secondary" v-show="counter === 3">
          <div class="card-header">
            <h3 class="card-title">Attachments</h3>

            <div class="card-tools">
              <button
                type="button"
                class="btn btn-tool"
                data-card-widget="collapse"
              >
                <i class="fas fa-minus"></i>
              </button>
            </div>
          </div>
          <!-- /.card-header -->
          <div class="card-body p-0">
            <table
              class="table table-sm table-bordered table-hover table-striped"
            >
              <thead class="p-0 m-0">
                <tr class="row p-0 m-0">
                  <th class="col-md-9 px-3">Filename</th>
                  <th class="col-md-3 px-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr class="row p-0 m-0">
                  <td class="col-md-9 px-3">samp</td>
                  <td
                    class="
                      col-md-3
                      pl-2
                      pr-2
                      text-center
                      d-flex
                      justify-content-center
                      align-items-center
                    "
                  ></td>
                </tr>
              </tbody>
            </table>
          </div>
          <!-- /.card-body -->
        </section>

        <!-- Requested Items (current active)-->
        <section
          class="card card-secondary"
          v-show="counter === 0 || counter === 3"
        >
          <div class="card-header">
            <h3 class="card-title">Requested Items</h3>

            <div class="card-tools">
              <button
                type="button"
                class="btn btn-tool"
                data-card-widget="collapse"
              >
                <i class="fas fa-minus"></i>
              </button>
            </div>
          </div>
          <!-- /.card-header -->
          <div class="card-body anyClass scroll-bar">
            <!-- Checkout list -->
            <!-- Request Details -->
            <!-- Checkout loop -->

            <div class="card">
              <div class="row">
                <div
                  class="
                    col-md-3
                    p-0
                    m-0
                    d-flex
                    align-items-center
                    justify-content-center
                  "
                >
                  <img
                    src="https://www.mouti.net/wp-content/plugins/tutor/assets/images/placeholder.svg"
                    style="
                      height: 180px;
                      display: block;
                      width: auto;
                      object-fit: contain;
                    "
                    alt=""
                    srcset=""
                    class=""
                  />
                </div>

                <div class="col-md-9 p-3">
                  <strong class="ellipsis">Generic</strong>
                  <p class="card--description ellipsis">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Odit aliquam ea perferendis, sed deserunt debitis adipisci
                    tenetur consequuntur reprehenderit ratione dolore saepe quo
                    eos vel iure corrupti ex commodi dolores numquam amet
                    exercitationem quas aspernatur Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit. Rerum iusto animi doloribus
                    nobis doloremque dolore excepturi odio eum. Nostrum
                    asperiores, ea accusantium natus quia laudantium aperiam
                    maiores velit necessitatibus, itaque nulla quod ab commodi
                    praesentium cum alias doloribus consequuntur facilis quo? In
                    eum perspiciatis ducimus, molestias veritatis sed commodi,
                    nostrum facere dolores necessitatibus sequi non suscipit
                    praesentium voluptas facilis illo tempore dignissimos? Cum
                    repudiandae, est ipsum possimus consequatur veniam esse
                    ratione debitis soluta voluptatem? Placeat, maxime hic!
                    Totam officia pariatur eos quasi nesciunt alias cum sint
                    nemo! Id, maiores a. Rerum eligendi porro delectus
                    perspiciatis consequatur dolore tempore enim dolorem.
                  </p>
                  <ul class="card--details">
                    <li><span>Item Code:</span></li>
                    <li><span>Brand:</span></li>
                    <li><span>Model:</span></li>
                    <li><span>Category:</span></li>
                    <li><span>UoM:</span></li>
                    <li><span>SKU:</span></li>
                    <li><span>On Hand:</span></li>
                    <li><span>Order Qty:</span></li>
                  </ul>
                </div>
              </div>
            </div>

            <!-- /.Checkout loop -->
            <!-- /.Request Details -->
            <!-- /.Checkout list -->
          </div>
          <!-- /.card-body -->
        </section>

        <!-- Buttons -->
        <div class="row">
          <div class="col-md-6">
            <button
              class="btn mr-1 btn-secondary btn-sm"
              v-show="counter"
              @click="counter--"
              disabled
            >
              Previous
            </button>
            <button
              class="btn mr-1 btn-primary btn-sm"
              v-show="counter <= 2"
              @click="counter++"
            >
              Next
            </button>
          </div>

          <div class="col-md-6 text-right">
            <button
              class="btn ml-1 btn-warning btn-sm"
              data-toggle="modal"
              data-target="#modal-default"
            >
              Withdraw
            </button>
            <button class="btn ml-1 btn-danger btn-sm">Close</button>
          </div>
          <!-- /. Buttons -->
        </div>
      </div>
    </div>

    <!-- Modal -->
    <div
      class="modal fade"
      id="modal-default"
      data-backdrop="static"
      data-keyboard="false"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <!-- Overlay Loading Spinner -->
          <div class="overlay" v-show="false">
            <i class="fas fa-2x fa-sync fa-spin"></i>
          </div>

          <div class="modal-header">
            <h6 class="modal-title"><b>Withdraw Request</b></h6>
            <button
              type="button"
              id="modalCloseButton"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-md-12">
                <div class="form-group">
                  <small><label for="withdrawRemarks">Remarks</label></small>
                  <textarea
                    class="form-control"
                    id="withdrawRemarks"
                    rows="5"
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer justify-content-end">
            <!-- <button type="button" class="btn btn-default" data-dismiss="modal">Close</button> -->
            <button type="button" class="btn btn-primary btn-sm">
              Withdrawn
            </button>
          </div>
        </div>
        <!-- /.modal-content -->
      </div>
      <!-- /.modal-dialog -->
    </div>
    <!-- /.modal -->
  </div>
  <!-- /. Container -->
</template>

<script>
import axios from "axios";
export default {
  created() {
    this.getOtMain();
  },
  data() {
    return {
      counter: 3,
      isLoading: false,
      mrf_number: '',
      department: '',
      full_name: '',
      reporting_manager: '',
      mrf_short_text: '',
      date_requested: '',
      planned_delivery_date: '',
      actual_delivery_date: '',
      cost_center: '',
      client_name: '',
      materials_request_class: '',
      materials_request_type: '',
      remarks: '',
   };
  },

  methods: {
    async getOtMain() {
      this.isLoading = true;
      try {
        const resp = await axios.get(
          `http://127.0.0.1:8000/api/get-mrf/6746/1`
        );
        console.log(resp);
        this.isLoading = false;
      } catch (err) {
        // Handle Error Here
        console.error(err);
        this.isLoading = false;
      }
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
  },
};
</script>

<style scoped>
.anyClass {
  min-height: 30px;
  max-height: 500px;

  overflow-y: scroll;
}

.scroll-bar::-webkit-scrollbar {
  width: 10px;
}

/* Track */
.scroll-bar::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
.scroll-bar::-webkit-scrollbar-thumb {
  background: #888;
}

/* Handle on hover */
.scroll-bar::-webkit-scrollbar-thumb:hover {
  background: #555;
}

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

.formInvalid {
  background-color: #fff6f6;
  border-color: #e0b4b4;
}

.glowing-border {
  /* border: 2px solid #e0b4b4; */
  outline: none;
  box-shadow: 0 0 13px #e0b4b4;
}

.ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.card--details {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  list-style: none;
  padding: 0;
  line-height: 1.3;
}

.card--details li span {
  color: #9ca3af;
}

.overlay__card-body {
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: white;
  text-align: center;
  position: absolute;

  z-index: 999;

  top: 0; /* Position Y halfway in */
  left: 0; /* Position X halfway in */

  width: 100%;
  height: 100%;
}

.overlay__card-body-con {
  position: relative;
}
</style>
