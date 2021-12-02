<template>
  <div class="col-md-12 mt-3">
    <!-- Form Element sizes -->
    <div class="card card-secondary">
      <div class="card-header">
        <h3 class="card-title">Request for Payment</h3>
      </div>
      <div class="card-body">
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
                >Request Details</span
              ></small
            >
          </div>
          <div class="textbar" :class="classB">
            <small
              ><span :class="classB" class="font-weight-bold"
                >Payment Details</span
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
                >Review</span
              ></small
            >
          </div>
        </div>
        <!-- / Step Numbers -->

        <!-- Main Form -->

        <!-- Request Details -->
        <aside v-if="this.counter === 0">
          <div class="row mt-4">
            <div class="col-md-3">
              <div class="form-group">
                <small><label for="reference">Reference Number</label></small>
                <input
                  type="text"
                  class="form-control form-control-sm py-3"
                  id="reference"
                  disabled
                  v-model="referenceNumber"
                />
              </div>
            </div>
            <div class="col-md-3">
              <div class="form-group">
                <small><label for="requestDate">Request Date</label></small>
                <date-picker
                  
                  disabled
                  valueType="format"
                  style="display: block; width: 100%; line-height: 20px"
                  v-model="requestDate"
                ></date-picker>
              </div>
            </div>

            <div class="col-md-3">
              <div class="form-group">
                <small><label for="dateNeeded">Date Needed</label></small>
                <date-picker
                  disabled
                  v-model="dateNeeded"
                  valueType="format"
                  style="display: block; width: 100%; line-height: 20px"
                ></date-picker>
              </div>
            </div>
            <div class="col-md-3">
              <div class="form-group">
                <small
                  ><label for="reportingManager selextForm" id="selextForm"
                    >Reporting Manager</label
                  ></small
                >
                <input
                  type="text"
                  class="form-control py-3 form-control-sm"
                  disabled
                  v-model="reportingManager"
                  id="reportingManager"
                />
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-6">
              <div class="form-group">
                <small><label for="projectName">Project Name</label></small>
                <input
                  type="text"
                  class="form-control py-3 form-control-sm"
                  disabled
                  v-model="projectName"
                  id="projectName"
                />
              </div>
            </div>

            <div class="col-md-6">
              <div class="form-group">
                <small><label for="clientName">Client Name</label></small>
                <input
                  type="text"
                  disabled
                  class="form-control py-3 form-control-sm"
                  id="clientName"
                  v-model="clientName"
                />
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-12">
              <div class="form-group">
                <small><label for="purpose">Purpose</label></small>
                <!-- <textarea class="form-control" name="purpose" id="purpose" :value="message" @input="updateMessage"  rows="5"></textarea> -->
                <textarea
                  class="form-control"
                  name="purpose"
                  id="purpose"
                  v-model="purpose"
                  disabled
                  rows="5"
                ></textarea>
              </div>
            </div>
          </div>
        </aside>
        <!-- / Request Details -->

        <!-- Payment Details -->
        <div class="row mt-4" v-else-if="this.counter === 1">
          <div class="col-md-3"></div>
          <div class="col-md-6">
            <div class="form-group">
              <small><label for="payeeName">Payee Name</label></small>
              <input
                type="text"
                class="form-control form-control-sm"
                v-model="payeeName"
                id="payeeName"
                disabled
              />
            </div>
            <div class="form-group">
              <small><label for="modeOfPayment">Mode of Payment</label></small>
              <input
                type="text"
                v-model="modeOfPayment"
                disabled
                class="form-control form-control-sm"
                id="modeOfPayment"
              />
            </div>

            <div class="row">
              <div class="col-md-4">
                <div class="form-group">
                  <small><label for="currency">Currency</label></small>
                  <input
                    type="text"
                    disabled
                    v-model="currency"
                    class="form-control form-control-sm"
                    id="currency"
                  />
                </div>
              </div>
              <div class="col-md-8">
                <div class="form-group">
                  <small><label for="amount">Amount</label></small>
                  <input
                    disabled
                    type="text"
                    class="form-control form-control-sm py-3"
                    id="amount"
                    v-model="amount"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-3"></div>
        </div>
        <!-- / Payment Details -->

        <!-- The Attachments -->
        <div
          v-else-if="this.counter === 2"
          class="
            d-flex
            align-items-center
            justify-content-center
            text-center
            position-relative
            mt-4
          "
          id="app"
        >
          <div class="p-5 col-md-12 rounded" id="uploadContainer">
            <label for="assetsFieldHandle" class="block cursor-pointer">
              <span class="text-secondary">List of Attached File</span>
            </label>
            <!-- <aside class="d-flex align-items-center justify-content-center"> -->
            <ul class="mt-4 text-decoration-none ulUpload">
              <li
                class="text-sm mt-2"
                v-for="(file, index) in selectedFile"
                :key="file.newFilename"
              >
                <div class="row d-flex justify-content-center">
                  <div class="col-md-4 d-flex">
                    <div class="col-1">
                      <b>{{ index + 1 + "." }}</b>
                    </div>
                    <div class="col text-left">
                      <span>{{ file.filename }}</span>
                    </div>
                    <div>
                      <button class="btn btn-info btn-sm" type="button">
                        <a
                          :download="file.filename"
                          style="color: white"
                          :href="
                            'data:' +
                            file.mimeType +
                            ';base64,' +
                            file.imageBytes
                          "
                          target="_blank"
                          >Download</a
                        >
                      </button>
                    </div>
                    <div class="col-2">
                      <button
                        class="btn btn-secondary btn-sm"
                        @click="preview(file.mimeType, file.imageBytes)"
                      >
                        Preview
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            </ul>

            <!-- </aside> -->
          </div>
        </div>
        <!-- / The Attachments -->

        <!--  Form Review -->
        <aside v-else-if="this.counter === 3">
          <div class="card card-secondary mt-4">
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
                <!-- <thead>
          <tr>
            <th>Form</th>
            <th style="width: 80%"></th>
          </tr>
        </thead> -->
                <tbody>
                  <tr>
                    <td>Reference Number</td>
                    <td style="width: 80%">{{this.referenceNumber}}</td>
                  </tr>
                  <tr>
                    <td>Requested Date</td>
                    <td>{{ this.requestDate }}</td>
                  </tr>
                  <tr>
                    <td>Date Needed</td>
                    <td>{{ this.dateNeeded }}</td>
                  </tr>
                  <tr>
                    <td>Reporting Manager</td>
                    <td>{{ this.reportingManager }}</td>
                  </tr>
                  <tr>
                    <td>Project Name</td>
                    <td>{{ this.projectName }}</td>
                  </tr>
                  <tr>
                    <td>Client Name</td>
                    <td>{{ this.clientName }}</td>
                  </tr>
                  <tr>
                    <td>Purpose</td>
                    <td>{{ this.purpose }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <!-- /.card-body -->
          </div>
          <!-- /.card -->

          <div class="card card-secondary">
            <div class="card-header">
              <h3 class="card-title">Payment Details</h3>

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
                  <tr>
                    <td>Payee Name</td>
                    <td style="width: 80%">{{ this.payeeName }}</td>
                  </tr>
                  <tr>
                    <td>Mode of Payment</td>
                    <td>{{ this.modeOfPayment }}</td>
                  </tr>
                  <tr>
                    <td>Currency</td>
                    <td>{{ this.currency }}</td>
                  </tr>
                  <tr>
                    <td>Amount</td>
                    <td>{{ this.amount }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <!-- /.card-body -->
          </div>
          <!-- /.card -->

          <div class="card card-secondary">
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
                <thead>
                  <tr>
                    <th style="width: 5%">#</th>
                    <th style="width: 80%">Filename</th>
                    <th style="width: 15%">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                  v-for="(file, index) in selectedFile" :key="file.filename"
                  >
                    <td>{{ index + 1 }}</td>
                    <td>{{ file.filename }}</td>
                    <td class="pl-2 pr-2 text-center">
                      <button class="btn btn-secondary btn-sm ml-1"
                      @click="preview(file.mimeType, file.imageBytes)"
                      >
                        Preview
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <!-- /.card-body -->
          </div>
          <!-- /.card -->
        </aside>
        <!-- / Form Review -->

        <!-- / Main Form -->

        <!-- Button -->
        <div class="row d-flex justify-content-between mt-3">
          <aside class="col-lg-6 d-flex justify-content-start">
          <div class="col-lg-2" v-show="counter">
            <button
              type="button"
              @click="counter--"
              class="btn btn-block btn-secondary btn-sm"
            >
              Previous
            </button>
          </div>
          <div class="col-lg-2" v-if="this.counter <= 2">
            <button
              type="button"
              @click="counter++"
              class="btn btn-block btn-primary btn-sm"
            >
              Next
            </button>
          </div>

          </aside>

<aside class="col-lg-6 d-flex justify-content-end">
          <div class="col-lg-2">
            <button
              type="button"
              class="btn btn-block btn-warning btn-sm"
               data-toggle="modal" 
               data-target="#modal-default"
            >
              Withdrawn
            </button>
          </div>

          <div class="col-lg-2" >
            <button
              type="button"
              class="btn btn-block btn-danger btn-sm"
              @click="close()"
            >
              Close
            </button>
          </div>

</aside>
        </div>
        <!-- / Button -->
      </div>
    </div>
    <!-- /.card -->



      <!-- Modal -->
      <div class="modal fade" id="modal-default">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="overlay">
                <i class="fas fa-2x fa-sync fa-spin"></i>
            </div>
            <div class="modal-header">
              <h6 class="modal-title"><b>Withdraw Request</b></h6>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
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
                  v-model="withdrawRemarks"
                ></textarea>
              </div>
            </div>
          </div>
            </div>
            <div class="modal-footer justify-content-end">
              <!-- <button type="button" class="btn btn-default" data-dismiss="modal">Close</button> -->
              <button type="button" class="btn btn-primary btn-sm" @click="withdrawn()">Withdrawn</button>
            </div>
          </div>
          <!-- /.modal-content -->
        </div>
        <!-- /.modal-dialog -->
      </div>
      <!-- /.modal -->



  </div>
</template>

<script>
import axios from "axios";
export default {
  watch: {
    // Request Details
    projectItem(newValue) {
      this.getClient(newValue.code);
    },

    counter(){
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    },

    //Navigate
    $route(newRoute){
      this.showRfpMain(this.$route.params.id);
      this.showRfpDetail(this.$route.params.id);
      this.showRfpAttachments(this.$route.params.id, "Request for Payment");
      this.counter = 0;
      this.withdrawRemarks = '';
      console.log(newRoute)
    }
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

    todaysDate() {
      const today = new Date();
      const dd = today.getDate();
      const mm = today.getMonth() + 1;
      const yyyy = today.getFullYear();
      const todaysDate = yyyy + "-" + mm + "-" + dd;
      return todaysDate;
    },
  },
  data() {
    return {
      counter: 0,
      // Request Details
      referenceNumber: "",
      requestDate: "",
      dateNeeded: "",
      reportingManager: "",
      projectName: "",
      clientName: "",
      purpose: "",

      // Payee Details
      payeeName: "",
      modeOfPayment: "",
      currency: "",
      amount: "",

      // The Attachments
      selectedFile: [],
      // filespreview: "",


      // Withdrawn Modal
      withdrawRemarks:"",
    };
  },

  created() {
    // console.log(this.$route.params.id);
    this.showRfpMain(this.$route.params.id);
    this.showRfpDetail(this.$route.params.id);
    this.showRfpAttachments(this.$route.params.id, "Request for Payment");
  },


  methods: {
    async withdrawn(){
      console.log(this.withdrawRemarks);

    try {
      const response = axios.post('http://127.0.0.1:8000/api/withdraw-request', {
        withdrawRemarks: 'test in ctierp',
        reqId: '2197'
    })
      console.log(response);

      alert('success')
    } catch (error) {
      console.error(error);
      alert('error')

    }






    },
    close(){
      this.$router.replace('/inprogress')
    },
    preview(mimeType, imageBytes) {
      var newTab = window.open();
      newTab.document.body.innerHTML = `<img src="data:${mimeType};base64,${imageBytes}" resizable=yes, style="max-width: 100%; height: auto; ">`;
    },

    showRfpMain(id) {
      axios
        .get(`http://127.0.0.1:8000/api/rfp-main/${id}`)
        .then((response) => {
          // handle success
          this.referenceNumber = response.data.data.REQREF;
          this.requestDate = response.data.data.DATE;
          this.dateNeeded = response.data.data.Deadline;
          this.reportingManager = response.data.data.REPORTING_MANAGER;
          this.amount = response.data.data.AMOUNT;
        })
        .catch((error) => {
          // handle error
          console.log(error);
        })
        .then(() => {
          // always executed
        });
    },
    showRfpDetail(id) {
      axios
        .get(`http://127.0.0.1:8000/api/rfp-main-detail/${id}`)
        .then((response) => {
          // handle success
          this.projectName = response.data.data.PROJECT;
          this.clientName = response.data.data.CLIENTNAME;
          this.purpose = response.data.data.PURPOSED;
          this.payeeName = response.data.data.PAYEE;
          this.currency = response.data.data.CURRENCY;
          this.modeOfPayment = response.data.data.MOP;
        })
        .catch((error) => {
          // handle error
          console.log(error);
        })
        .then(() => {
          // always executed
        });
    },

    showRfpAttachments(id, form) {
      axios
        .get(`http://127.0.0.1:8000/api/getRfpAttachments/${id}/${form}`)
        .then((response) => {
          // handle success
          this.selectedFile = response.data.data;

          console.log(this.selectedFile.length);
        })
        .catch((error) => {
          // handle error
          console.log(error);
        })
        .then(() => {
          // always executed
        });
    },
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
