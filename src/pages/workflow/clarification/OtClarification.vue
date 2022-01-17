<template>
  <div class="col-md-12 mt-3">
    <!-- Form Element sizes -->
    <div class="card card-secondary">
      <div
        class="overlay"
        style="background-color: white !important"
        v-show="isLoading"
      >
        <loading-spinner></loading-spinner>
      </div>
      <div class="card-header">
        <h3 class="card-title">Overtime Request {{this.checkLoggedUser}}</h3>
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
                >Overtime Details</span
              ></small
            >
          </div>
          <div class="textbar" :class="classC">
            <small
              ><span :class="classC" class="font-weight-bold"
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
                <small><label for="requestedDate">Requested Date</label></small>
                <date-picker
                  disabled
                  valueType="format"
                  style="display: block; width: 100%; line-height: 20px"
                  v-model="requestedDate"
                ></date-picker>
              </div>
            </div>

            <div class="col-md-6">
              <div class="form-group">
                <small
                  ><label for="reportingManager selextForm" id="selextForm"
                    >Reporting Manager</label
                  ></small
                >
                <model-list-select
                  :list="reportingManager"
                  v-model="reportingManagerItem"
                  option-value="code"
                  option-text="name"
                  placeholder="select item"
                  style="padding: 9px"
                  v-if="isInitiator"
                >
                </model-list-select>

                <input
                  v-else
                  type="text"
                  id="reportingManager"
                  disabled
                  class="form-control py-3 form-control-sm"
                  v-model="reportingManagerItem.name"
                />

              </div>
            </div>
          </div>
        </aside>
        <!-- / Request Details -->

        <!-- Overtime Details -->
        <div class="row mt-4" v-else-if="this.counter === 1">
          <table
            class="
              table table-sm table-bordered table-striped
              mx-2
              table-responsive
              text-nowrap
            "
          >
            <thead>
              <tr>
                <th :colspan="headerActual" scope="col">
                  <aside class="d-flex align-items-center">
                    <span class="mb-1 ml-1"> Overtime Table</span>
                  </aside>
                </th>
                <th v-if="checkLoggedUser">
                  <aside class="text-center">
                    <button
                      class="btn btn-sm btn-success m-0"
                      data-toggle="modal"
                      data-target="#modal-overtime"
                      @click="setButton()"
                    >
                      <i class="fas fa-plus"></i>
                    </button>
                  </aside>
                </th>
              </tr>
              <tr>
                <th scope="col" style="width: 5%" class="text-center">#</th>
                <th scope="col" style="width: 10%">Employee Name</th>
                <th scope="col" style="width: 15%">Project Name</th>
                <th scope="col" style="width: 10%">Ovetime Date</th>
                <th scope="col" style="width: 10%">Auth. Time Start</th>
                <th scope="col" style="width: 10%">Auth. Time End</th>
                <th scope="col" style="width: 10%">Auth. OT Hours</th>
                <th v-if="isActual" scope="col" style="width: 10%">
                  Actual Time Start
                </th>
                <th v-if="isActual" scope="col" style="width: 10%">
                  Actual Time End
                </th>
                <th v-if="isActual" scope="col" style="width: 10%">
                  Actual OT Hours
                </th>
                <th scope="col" style="width: 20%">Purpose</th>
                <th v-if="checkLoggedUser" scope="col" style="width: 10%">Action</th>
              </tr>
            </thead>
            <tbody style="font-size: 14px">
              <tr v-for="(item, index) in overtime" :key="item.id">
                <td class="text-center">{{ index + 1 }}.</td>
                <td>{{ item.employee_name }}</td>
                <td>{{ item.cust_name }}</td>
                <td>{{ item.overtime_date }}</td>
                <td>{{ item.ot_in }}</td>
                <td>{{ item.ot_out }}</td>
                <td>{{ item.ot_totalhrs }}</td>
                <td v-if="isActual">{{ item.ot_in_actual }}</td>
                <td v-if="isActual">{{ item.ot_out_actual }}</td>
                <td v-if="isActual">{{ item.ot_totalhrs_actual }}</td>
                <td>{{ item.purpose }}</td>
                <td v-if="checkLoggedUser" class="pl-0 m-0">
                  <aside class="d-flex justify-content-center">
                    <button
                      class="btn btn-sm btn-info m-0"
                      @click="edit(overtime.indexOf(item))"
                      data-toggle="modal"
                      data-target="#modal-overtime"
                    >
                      <i class="fas fa-edit"></i>
                    </button>
                    <button
                      class="btn btn-sm btn-danger m-0 ml-1"
                      @click="trash(overtime.indexOf(item))"
                    >
                      <i class="fas fa-trash"></i>
                    </button>
                  </aside>
                </td>
              </tr>

              <tr>
                <td :colspan="numberActual"></td>
                <td colspan="2">
                  <b>Total OT Hours: {{ this.totalOTHours }}</b>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- /.Overtime Details -->

        <!--  Form Review -->
        <aside v-else-if="this.counter === 2">
          <!-- Request Details Review -->
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
                <tbody>
                  <tr>
                    <td>Reference Number</td>
                    <td style="width: 80%">{{ this.referenceNumber }}</td>
                  </tr>
                  <tr>
                    <td>Requested Date</td>
                    <td>{{ this.requestedDate }}</td>
                  </tr>
                  <tr>
                    <td>Reporting Manager</td>
                    <td>{{ this.reportingManagerItem.name }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <!-- /.card-body -->
          </div>
          <!-- /.Request Details Review -->

          <!-- Overtime Details Review -->
          <div class="card card-secondary">
            <div class="card-header">
              <h3 class="card-title">Overtime Details</h3>

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
                class="
                  table
                  table-sm
                  table-bordered
                  table-hover
                  table-striped
                  table-responsive
                  text-nowrap
                "
              >
                <thead>
                  <tr>
                    <th style="width: 5%">#</th>
                    <th style="width: 10%">Employee Name</th>
                    <th style="width: 20%">Project Name</th>
                    <th style="width: 10%">Ovetime Date</th>
                    <th style="width: 15%">Auth. Time Start</th>
                    <th style="width: 15%">Auth. Time End</th>
                    <th style="width: 5%">Auth. OT Hours</th>
                    <th style="width: 20%">Purpose</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, index) in overtime" :key="item.id">
                    <td>{{ index + 1 }}</td>
                    <td>{{ item.employee_name }}</td>
                    <td>{{ item.cust_name }}</td>
                    <td>{{ item.overtime_date }}</td>
                    <td>{{ item.ot_in }}</td>
                    <td>{{ item.ot_out }}</td>
                    <td>{{ item.ot_totalhrs }}</td>
                    <td>{{ item.purpose }}</td>
                  </tr>

                  <tr>
                    <td colspan="6"></td>
                    <b class="px-1">Total OT Hours: {{ this.totalOTHours }}</b>
                  </tr>
                </tbody>
              </table>
            </div>
            <!-- /.card-body -->
          </div>

          <!-- /.Overtime Details Review -->
        </aside>
        <!-- / Form Review -->

        <!-- / Main Form -->

        <!-- Modal -->
        <div class="modal fade" id="modal-default">
          <div class="modal-dialog">
            <div class="modal-content">
              <!-- Overlay Loading Spinner -->
              <div class="overlay" v-show="isLoadingModal">
                <i class="fas fa-2x fa-sync fa-spin"></i>
              </div>

              <div class="modal-header">
                <h6 class="modal-title"><b>Reply Request</b></h6>
                <button
                  type="button"
                  class="close"
                  id="modalCloseButton"
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
                      <small><label for="remarks">Remarks</label></small>
                      <textarea
                        class="form-control"
                        id="remarks"
                        rows="5"
                        v-model="remarks"
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>
              <div class="modal-footer justify-content-end">
                <!-- <button type="button" class="btn btn-default" data-dismiss="modal">Close</button> -->
                <button
                  type="button"
                  class="btn btn-primary btn-sm"
                  @click="reply()"
                >
                  Reply
                </button>
              </div>
            </div>
            <!-- /.modal-content -->
          </div>
          <!-- /.modal-dialog -->
        </div>
        <!-- /.modal -->

        <!-- Buttons -->
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

            <div class="col-lg-2" v-if="this.counter <= 1">
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
                Reply
              </button>
            </div>

            <div class="col-lg-2">
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
        <!-- / Buttons -->
      </div>
    </div>
    <!-- /.card -->

    <!-- Modal Overtime-->
    <div
      class="modal fade"
      id="modal-overtime"
      data-backdrop="static"
      data-keyboard="false"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="overlay" v-show="isLoadingModal">
            <i class="fas fa-2x fa-sync fa-spin"></i>
          </div>


          <div class="modal-header">
            <h6 class="modal-title">
              <b>Overtime Details</b>
            </h6>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
              @click="closeModal()"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <the-alert
              v-show="isAlert"
              v-bind:header="this.header"
              v-bind:message="this.message"
              v-bind:type="this.type"
            ></the-alert>

            <div class="row">
              <div class="col-md-12">
                <div class="form-group">
                  <small><label for="projectName">Project Name</label></small>
                  <model-list-select
                    :list="projectName"
                    v-model="itemModalProjectName"
                    option-value="code"
                    option-text="name"
                    placeholder="Select Project Name"
                    style="padding: 9px"
                  >
                  </model-list-select>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-md-5">
                <div class="form-group">
                  <small><label for="overtimeDate">Overtime Date</label></small>
                  <date-picker
                    valueType="format"
                    style="display: block; width: 100%; line-height: 20px"
                    v-model="overtimeDate"
                  ></date-picker>
                </div>
              </div>
              <div class="col-md-7">
                <div class="form-group">
                  <small><label for="employeeName">Employee Name</label></small>
                  <model-list-select
                    :list="employeeName"
                    v-model="itemEmployeeName"
                    option-value="code"
                    option-text="name"
                    placeholder="Select Employee Name"
                    style="padding: 9px"
                  >
                  </model-list-select>
                </div>
              </div>
            </div>

            <!-- Auth time start -->
            <div class="row">
              <div class="col-md-5">
                <div class="form-group">
                  <small
                    ><label for="authTimeStart"
                      >Authorized Time Start</label
                    ></small
                  >
                  <date-picker
                    v-model="authTimeStart"
                    @change="setTime"
                    :minute-step="5"
                    format="MM/DD/YYYY hh:mm A"
                    value-type="format"
                    type="datetime"
                    style="display: block; width: 100%; line-height: 20px"
                  ></date-picker>
                </div>
              </div>

              <div class="col-md-5">
                <div class="form-group">
                  <small
                    ><label for="authTimeEnd">Authorized Time End</label></small
                  >
                  <date-picker
                    v-model="authTimeEnd"
                    @change="setTime"
                    :minute-step="5"
                    format="MM/DD/YYYY hh:mm A"
                    value-type="format"
                    type="datetime"
                    style="display: block; width: 100%; line-height: 20px"
                  ></date-picker>
                </div>
              </div>

              <div class="col-md-2">
                <div class="form-group">
                  <small><label for="authOT">Auth Hrs</label></small>
                  <input
                    type="text"
                    disabled
                    v-model="authOThrs"
                    class="form-control py-3 form-control-sm"
                  />
                </div>
              </div>
            </div>
            <!-- /.Auth time start -->

            <!-- Actual time start -->
            <div class="row" v-if="isActual">
              <div class="col-md-5">
                <div class="form-group">
                  <small
                    ><label for="actualTimeStart"
                      >Actual Time Start</label
                    ></small
                  >
                  <date-picker
                    v-model="actualTimeStart"
                    @change="setActualTime"
                    :minute-step="5"
                    format="MM/DD/YYYY hh:mm A"
                    value-type="format"
                    type="datetime"
                    style="display: block; width: 100%; line-height: 20px"
                  ></date-picker>
                </div>
              </div>

              <div class="col-md-5">
                <div class="form-group">
                  <small
                    ><label for="actualTimeEnd">Actual Time End</label></small
                  >
                  <date-picker
                    v-model="actualTimeEnd"
                    @change="setActualTime"
                    :minute-step="5"
                    format="MM/DD/YYYY hh:mm A"
                    value-type="format"
                    type="datetime"
                    style="display: block; width: 100%; line-height: 20px"
                  ></date-picker>
                </div>
              </div>

              <div class="col-md-2">
                <div class="form-group">
                  <small><label for="actualOthrs">Actual Hrs</label></small>
                  <input
                    type="text"
                    disabled
                    v-model="actualOthrs"
                    class="form-control py-3 form-control-sm"
                  />
                </div>
              </div>
            </div>
            <!-- /.Actual time start -->

            <div class="row">
              <div class="col-md-12">
                <div class="form-group">
                  <small><label for="purpose">Purpose</label></small>
                  <textarea
                    class="form-control"
                    id="purpose"
                    rows="3"
                    v-model="modalPurpose"
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer justify-content-end">
            <button
              v-if="isButton"
              type="button"
              class="btn btn-success btn-sm"
              @click="insert()"
            >
              Insert
            </button>

            <button
              v-else
              type="button"
              class="btn btn-success btn-sm"
              @click="update()"
            >
              Update
            </button>
          </div>
        </div>
        <!-- /.modal-content -->
      </div>
      <!-- /.modal-dialog -->
    </div>
    <!-- /.modal Ovetime -->
  </div>
</template>

<script>
/*eslint-disable*/
import { ModelListSelect } from "vue-search-select";
import axios from "axios";
import VsToast from "@vuesimple/vs-toast";

export default {
  components: {
    ModelListSelect,
  },
  created() {
    // Request Details
    this.getOtMain(this.$route.params.id);
    this.getActualSign(
      this.$route.params.id,
      this.$route.params.frmName,
      this.companyId
    );
    this.getProjects();
    this.getReportingManager(this.loggedUserId);
    this.todaysDate();
    this.getEmployees(this.companyId);
  },
  watch: {
    counter() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    },

    $route(newRoute) {
      console.log(newRoute);

      this.getOtMain(this.$route.params.id);
      this.getActualSign(
        this.$route.params.id,
        this.$route.params.frmName,
        this.companyId
      );
      this.getProjects();
      this.getReportingManager();
      this.todaysDate();
      this.getEmployees(this.companyId);
    },

    // Request Details
    itemModalProjectName(newValue) {
      this.getClient(newValue.code);
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

    totalOTHours() {
      if (this.overtime.length > 0) {
        const total = this.overtime
          .map((overtime) => parseFloat(overtime.ot_totalhrs))
          .reduce((acc, overtime) => overtime + acc);
        return total;
      } else {
        return 0;
      }
    },

    numberActual() {
      if (this.isActual === true) {
        return 10;
      } else {
        return 7;
      }
    },

    checkLoggedUser(){
      if (this.isActual && this.isInitiator) {
        return true
      } else {
        return false
      }
    },

    headerActual() {
      if (this.isActual === true) {
        return 11;
      } else {
        return 8;
      }
    },

    // Calendaer
    todaysYear() {
      const today = new Date();
      // const dd = today.getDate();
      // const mm = today.getMonth() + 1;
      const yyyy = today.getFullYear();
      // const todaysDate = yyyy + "-" + mm + "-" + dd;
      return yyyy;
    },
  },
  data() {
    return {
      counter: 0,
      // Request Details
      referenceNumber: "",
      requestedDate: "",
      reportingManager: [],
      reportingManagerItem: {},
      // purpose: "",

      // // Logged User Data
      // loggedUserId: 136,
      // loggedUserFirstName: "Rosevir",
      // loggedUserLastName: "Ceballos",
      // loggedUserFullName: "Rosevir Ceballos Jr.",
      // loggedUserDepartment: "Information Technology",
      // loggedUserPosition: "Senior Developer",
      // companyId: 1,
      // companyName: "Cylix Technologies Inc.",

      // approver
      loggedUserId: 11,
      loggedUserFirstName: "Konrad",
      loggedUserLastName: "Chua",
      loggedUserFullName: "Konrad Chua",
      loggedUserDepartment: "Management",
      loggedUserPosition: "Managing Director",
      companyId: 1,
      companyName: "Cylix Technologies Inc.",

      // // approver 2
      // loggedUserId: 12,
      // loggedUserFirstName: "Carrie",
      // loggedUserLastName: "Chua Lee",
      // loggedUserFullName: "Carrie Chua Lee",
      // loggedUserDepartment: "Accounting and Finance",
      // loggedUserPosition: "Accounting and Finance Head",
      // companyId: 1,
      // companyName: "Cylix Technologies Inc.",

      // The Alert
      isAlert: false,
      header: "", // Syccess or Failed
      message: "", // added successfully
      type: "", // true or false

      // Overtime Details
      employeeName: [],
      itemEmployeeName: {},

      projectName: [],
      itemModalProjectName: {},
      clientName: "",
      clientId: "",
      mainId: "",

      overtimeDate: "",
      authTimeStart: "",
      authTimeEnd: "",
      authOThrs: "",

      actualTimeStart: "",
      actualTimeEnd: "",
      actualOthrs: "",

      modalPurpose: "",
      // totalOT: 0,
      isLoading: false,
      isLoadingModal: false,
      isButton: true,
      overtime: [],
      editOvertime: [],
      i: 0,


      remarks: "",

      // mga need sa request
      isActual: false,
      guid:'',
      processId: this.$route.params.id,
      form: this.$route.params.frmName,
      isInitiator: false,
    };
  },

  methods: {
    async reply() {
      const fd = new FormData();
      fd.append("reportingManagerId", this.reportingManagerItem.code);
      fd.append("reportingManagerName", this.reportingManagerItem.name);

      fd.append("form", this.form);
      fd.append("processId", this.processId);

      fd.append("remarks", this.remarks);
   
      fd.append("class", "OT");
      fd.append("referenceNumber", this.referenceNumber);

      fd.append("requestedDate", this.requestedDate);
      fd.append("isActual", this.isActual);

      fd.append("projectId", 0);
      fd.append("projectName", this.loggedUserDepartment);
      fd.append("clientId", 0);
      fd.append("clientName", this.companyName);
      fd.append("payeeName", 'N/A');
      fd.append("amount", 0);

      fd.append("loggedUserId", this.loggedUserId);
      fd.append("loggedUserFirstName", this.loggedUserFirstName);
      fd.append("loggedUserLastName", this.loggedUserLastName);
      fd.append("loggedUserFullName", this.loggedUserFullName);
      fd.append("loggedUserDepartment", this.loggedUserDepartment);
      fd.append("loggedUserPosition", this.loggedUserPosition);
      fd.append("companyId", this.companyId);
      fd.append("companyName", this.companyName);

      fd.append("isInitiator", this.isInitiator);




      fd.append("guid", this.guid);

      fd.append("overtimeData", JSON.stringify(this.overtime));

      try {
        const res = await axios.post(
          "http://127.0.0.1:8000/api/reply-request",
          fd
        );

        console.log(res.data);
        this.isLoading = false;
        document.getElementById("modalCloseButton").click();

        if (res.status === 200) {
          this.openToast("top-right", "success", res.data.message);
          this.$router.replace("/approvals");
        }

        if (res.status === 202) {
          // console.log(res)
          this.openToast("top-right", "error", res.data.message);
        }
      } catch (err) {
        // Handle Error Here
        console.error(err);
      }
    },



    close() {
      this.$router.replace("/clarifications");
    },

    async getActualSign(id, form, companyId) {
      try {
        const resp = await axios.get(
          `http://127.0.0.1:8000/api/general-actual-sign/${id}/${form}/${companyId}`
        );

        if (resp.status === 200) {
          const reportingManagerItem = {
            code: resp.data[0].RM_ID,
            name: resp.data[0].REPORTING_MANAGER,
          };
          this.reportingManagerItem = reportingManagerItem;
        }
      } catch (err) {
        // Handle Error Here
        console.error(err);
        this.isLoading = false;
      }
    },
    async getOtMain(id) {
      this.isLoading = true;
      try {
        const resp = await axios.get(`http://127.0.0.1:8000/api/ot-main/${id}`);
        // console.log(resp.data);
        if (resp.status === 200) {
          this.isLoading = false;
          this.referenceNumber = resp.data[0].reference;
          this.requestedDate = resp.data[0].request_date;
          this.guid = resp.data[0].GUID;
          

          if (resp.data[0].UID === this.loggedUserId) {
            this.isInitiator = true
          } else {
            this.isInitiator = false
          }
      

          this.overtime = resp.data;

          if (resp.data[0].ot_totalhrs_actual === null) {
            this.isActual = false;
          } else {
            this.isActual = true;
          }
          console.log(this.isActual);
        }
      } catch (err) {
        // Handle Error Here
        console.error(err);
        this.isLoading = false;
      }
    },

    openToast(position, variant, message) {
      const toastTitle = variant.charAt(0).toUpperCase() + variant.slice(1);
      VsToast.show({
        title: `${toastTitle}`,
        message: `${message}`,
        variant,
        position,
      });
    },

    setTime() {
      const time_start = new Date(this.authTimeStart);
      const time_end = new Date(this.authTimeEnd);

      let time_total = (time_end - time_start) / 1000 / 60 / 60;

      let f = Math.floor(time_total);
      if (time_total - f < 0.5) {
        time_total = Math.floor(time_total);
        console.log(time_total);
        this.authOThrs = time_total;
        // $('#authtime_totalHrs').val(time_total);
      } else {
        time_total = f + 0.5;
        console.log(time_total);
        this.authOThrs = time_total;
        // $('#authtime_totalHrs').val(time_total);
      }
    },

    setActualTime(){
      const time_start = new Date(this.actualTimeStart);
      const time_end = new Date(this.actualTimeEnd);


      let time_total = (time_end - time_start) / 1000 / 60 / 60;

      let f = Math.floor(time_total);
      if (time_total - f < 0.5) {
        time_total = Math.floor(time_total);
        console.log(time_total);
        this.actualOthrs = time_total;
        // $('#authtime_totalHrs').val(time_total);
      } else {
        time_total = f + 0.5;
        console.log(time_total);
        this.actualOthrs = time_total;
        // $('#authtime_totalHrs').val(time_total);
      }
    },


    closeModal() {
      this.resetAlert();
      this.resetModal();
    },

    // Request Details
    todaysDate() {
      const today = new Date();
      const dd = today.getDate();
      const mm = today.getMonth() + 1;
      const yyyy = today.getFullYear();
      const todaysDate = yyyy + "-" + mm + "-" + dd;
      this.requestedDate = todaysDate;
      // return todaysDate;
    },

    async getClient(id) {
      const response = await fetch(
        `http://127.0.0.1:8000/api/business-client/${id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );

      const responseData = await response.json();
      if (!response.ok) {
        const error = new Error(
          responseData.message || "Failed to fetch Reporting Manager."
        );
        throw error;
      }
      const client = [];
      for (const key in responseData) {
        const request = {
          clientId: responseData[key].clientID,
          clientName: responseData[key].clientName,
          mainId: responseData[key].mainID,
        };
        client.push(request);
      }
      this.clientName = client[0].clientName;
      this.clientId = client[0].clientId;
      this.mainId = client[0].mainId;

      // console.log(this.clientName)
    },

    async getEmployees(companyId) {
      try {
        const resp = await axios.get(
          `http://127.0.0.1:8000/api/get-employees/${companyId}`
        );

        if (resp.status === 200) {
          // console.log(resp);

          const employeeName = [];
          for (const key in resp.data) {
            const request = {
              code: resp.data[key].SysPK_Empl,
              name: resp.data[key].Name_Empl,
            };
            employeeName.push(request);
          }
          this.employeeName = employeeName;
          // console.log(this.employeeName);
        }
      } catch (err) {
        // Handle Error Here
        console.error(err);
      }
    },

    async getReportingManager(loggedUserId) {
      const response = await fetch(
        `http://127.0.0.1:8000/api/reporting-manager/${loggedUserId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );

      const responseData = await response.json();
      if (!response.ok) {
        const error = new Error(
          responseData.message || "Failed to fetch Reporting Manager."
        );
        throw error;
      }

      const reportingManager = [];
      for (const key in responseData) {
        const request = {
          code: responseData[key].RMID,
          name: responseData[key].RMName,
        };
        reportingManager.push(request);
      }
      this.reportingManager = reportingManager;
      // console.log(this.reportingManager);
    },

    // Overtime Details
    async getProjects() {
      const response = await fetch(
        "http://127.0.0.1:8000/api/general-projects",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );

      const responseData = await response.json();
      if (!response.ok) {
        const error = new Error(
          responseData.message || "Failed to fetch Projects."
        );
        throw error;
      }
      const project = [];
      for (const key in responseData) {
        const request = {
          code: responseData[key].project_id,
          name: responseData[key].project_name,
        };
        project.push(request);
      }
      this.projectName = project;
    },

    async update() {
      this.isLoadingModal = true;
      this.resetAlert();

      const addData = {
        id: this.editOvertime.id,
        overtime_date: this.overtimeDate,
        ot_in: this.authTimeStart,
        ot_out: this.authTimeEnd,
        ot_totalhrs: this.authOThrs,

        ot_in_actual: this.actualTimeStart,
        ot_out_actual: this.actualTimeEnd,
        ot_totalhrs_actual: this.actualOthrs,

        employee_id: this.itemEmployeeName.code,
        employee_name: this.itemEmployeeName.name,
        purpose: this.modalPurpose,
        cust_id: this.itemModalProjectName.code,
        cust_name: this.itemModalProjectName.name,
        PRJID: this.clientId,
        main_id: this.mainId,
      };
      // this.overtime.push(addData);
      // this.liquidation.push(this.editliquidation)

      const otData = [];
      otData.push(addData);

      const fd = new FormData();
      fd.append("isActual", this.isActual);
      fd.append("overtimeData", JSON.stringify(otData));

      try {
        const resp = await axios.post(
          "http://127.0.0.1:8000/api/validateOT",
          fd
        );

        if (resp.status === 200) {
          this.overtime.push(addData);
          this.isLoadingModal = false;

          this.addAlert("Success", resp.data.message, "true");
          this.editOvertime = "";

          this.overtime.sort(function (a, b) {
            return a.id - b.id;
          });
        }

        if (resp.status === 202) {
          this.isLoadingModal = false;
          this.addAlert("Failed", resp.data.message, "false");
        }

        console.log(resp.data);
      } catch (err) {
        // Handle Error Here
        console.error(err);
      }
    },

    edit(index) {
      this.isButton = false;
      const selectedOvertime = this.overtime[index];
      this.editOvertime = selectedOvertime;
      this.overtime.splice(index, 1);

      console.log(this.editOvertime);

      this.itemEmployeeName = {
        code: selectedOvertime.employee_id,
        name: selectedOvertime.employee_name,
      };
      this.itemModalProjectName = {
        code: selectedOvertime.cust_id,
        name: selectedOvertime.cust_name,
      };
      this.overtimeDate = selectedOvertime.overtime_date;
      this.authTimeStart = this.convertTimeAndDate(selectedOvertime.ot_in);
      this.authTimeEnd = this.convertTimeAndDate(selectedOvertime.ot_out);
      this.authOThrs = selectedOvertime.ot_totalhrs;

      if(this.isActual === true){
        this.actualTimeStart = this.convertTimeAndDate(selectedOvertime.ot_in_actual);
        this.actualTimeEnd = this.convertTimeAndDate(selectedOvertime.ot_out_actual);
        this.actualOthrs = selectedOvertime.ot_totalhrs_actual;
      }


      this.modalPurpose = selectedOvertime.purpose;
    },

    convertTimeAndDate(datetime) {
      const date = new Date(datetime);

      let month = date.getMonth() + 1;
      const day = date.getDate();
      const year = date.getFullYear();

      if (month < 10) {
        month = `0${month}`;
      }

      let hours = date.getHours();
      let minutes = date.getMinutes();
      const ampm = hours >= 12 ? "PM" : "AM";
      hours = hours % 12;
      hours = hours ? hours : 12;
      hours = hours < 10 ? "0" + hours : hours;
      minutes = minutes < 10 ? "0" + minutes : minutes;
      const time = hours + ":" + minutes + " " + ampm;
      const dit = `${month}/${day}/${year}`;
      const dateTimeReal = `${dit} ${time}`;
      return dateTimeReal;
    },

    setButton() {
      this.isButton = true;
    },

    trash(index) {
      this.overtime.splice(index, 1);
    },

    resetAlert() {
      this.isAlert = false;
      this.header = "";
      this.message = "";
      this.type = "";
    },

    resetModal() {
      this.overtimeDate = "";
      this.authTimeStart = "";
      this.authTimeEnd = "";
      this.authOThrs = "";
      this.itemEmployeeName = {};
      this.modalPurpose = "";
      // this.itemModalProjectName = {}
      // this.clientId = "";
      // this.clientName = "";
      // this.mainId = "";
    },

    addAlert(header, message, type) {
      this.isAlert = true;
      this.header = header;
      this.message = message;
      this.type = type;
    },

    async insert() {
      this.isLoadingModal = true;
      this.resetAlert();

      const otData = [];
      const addData = {
        id: this.i++,
        overtime_date: this.overtimeDate,
        ot_in: this.authTimeStart,
        ot_out: this.authTimeEnd,
        ot_totalhrs: this.authOThrs,

        ot_in_actual: this.actualTimeStart,
        ot_out_actual: this.actualTimeEnd,
        ot_totalhrs_actual: this.actualOthrs,

        employee_id: this.itemEmployeeName.code,
        employee_name: this.itemEmployeeName.name,
        purpose: this.modalPurpose,
        cust_id: this.itemModalProjectName.code,
        cust_name: this.itemModalProjectName.name,
        PRJID: this.clientId,
        main_id: this.mainId,
      };
      // this.overtime.push(addData);
      console.warn(this.isActual)

      otData.push(addData);

      const fd = new FormData();
      fd.append("isActual", this.isActual);
      fd.append("overtimeData", JSON.stringify(otData));

      try {
        const resp = await axios.post(
          "http://127.0.0.1:8000/api/validateOT",
          fd
        );

        if (resp.status === 200) {
          this.overtime.push(addData);
          this.isLoadingModal = false;
          // console.log(resp.data.message)

          this.addAlert("Success", resp.data.message, "true");
        }

        if (resp.status === 202) {
          this.isLoadingModal = false;
          this.addAlert("Failed", resp.data.message, "false");
        }

        console.log(resp.data);
      } catch (err) {
        // Handle Error Here
        console.error(err);
      }
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
