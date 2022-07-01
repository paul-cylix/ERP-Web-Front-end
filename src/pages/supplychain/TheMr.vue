<template>
  <body class="hold-transition sidebar-collapse layout-top-nav layout-fixed layout-navbar-fixed">
    <div class="wrapper">
      <!-- Top Navbar -->
      <nav
        class="main-header navbar navbar-expand-md navbar-light navbar-white"
      >
        <div class="container">
          <router-link to="/the-mrf" class="navbar-brand">
            <span class="brand-text font-weight-light">Material Request</span>
          </router-link>
          <!-- Right navbar links -->
          <ul class="order-1 order-md-3 navbar-nav navbar-no-expand ml-auto">
            <li class="nav-item">
              <router-link to="/the-cart" class="nav-link">
                <i class="fas fa-shopping-cart"></i>
              </router-link>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                data-widget="control-sidebar"
                data-slide="true"
                href="#"
                role="button"
              >
                <i class="fas fa-user"></i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <!-- /.Top Navbar -->

      <div class="content-wrapper">
        <!-- Content Header (Page header) -->
        <div class="content-header">
          <div class="container">
            <div class="row mb-2">
              <div class="col">
                <!-- <h1 class="m-0"> Top Navigation <small>Example 3.0</small></h1> -->
                <!-- <span>Sort By:</span> -->
              </div>
              <!-- /.col -->
            </div>
            <!-- /.row -->
          </div>
          <!-- /.container-fluid -->
        </div>
        <!-- /.content-header -->

        <!-- Main content -->
        <div class="content">
          <div class="container pb-4">
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
                    >Request Form</span
                  ></small
                >
              </div>
              <div class="textbar" :class="classC">
                <small
                  ><span :class="classC" class="font-weight-bold"
                    >Form Review</span
                  ></small
                >
              </div>
            </div>
            <!-- / Step Numbers -->

            <!-- Checkout Header -->
            <div class="card mt-4" v-if="counter === 0">
              <div class="card-body p-2">
                <span>Product Details</span>
              </div>
            </div>
            <!-- /.Checkout header -->

            <!-- Checkout list -->
            <div class="anyClass scroll-bar" v-if="counter === 0">
              <div
                class="overlay"
                style="background-color: white !important"
                v-show="isLoading"
              >
                <loading-spinner></loading-spinner>
              </div>
              <div class="card" v-for="cart in carts" :key="cart.cart_id">
                <div class="card-body card-split p2">
                  <div class="d-flex justify-content-center align-items-center">
                    <img
                      src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1610416577-vans-1610416571.jpg"
                      style="height: 150px; width: 120px; object-fit: contain"
                      alt=""
                      srcset=""
                      class="p-0 m-0"
                    />
                  </div>

                  <div class="card-details-holder">
                    <h6>
                      <b>{{ cart.description }}</b>
                    </h6>
                    <p>{{ cart.specification }}</p>
                    <div class="card-detail-list">
                      <ul>
                        <li>
                          Item Codes:<span>{{ cart.item_code }}</span>
                        </li>
                        <li>Category:<span>{{ cart.type }}</span></li>
                        <li>Sub Category:<span>{{ cart.group_description }}</span></li>
                        <li>
                          Brand:<span>{{ cart.brand }}</span>
                        </li>
                      </ul>

                      <ul>
                        <li>
                          UoM<span>{{ cart.cart_uom_name }}</span>
                        </li>
                        <li>
                          SKU<span>{{ cart.SKU }}</span>
                        </li>
                        <!-- <li>On Hand:<span>test</span></li> -->
                        <li>
                          Order Qty:<span>{{ cart.cart_quantity }}</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- /.Checkout list -->

            <div class="card mt-4" v-if="counter === 1">
              <div class="card-header">
                <h3 class="card-title font-weight-bold">Request Form</h3>
              </div>
              <div class="card-body">
                <!-- Request Form -->
                <aside v-if="counter === 1">
                  <div class="row">

                    <!-- if selected class is MRF  -->
                    <div class="col-md-3" >
                      <div class="form-group">
                        <small><label for="reference">{{ referenceNumber }} Number</label></small>
                        <input type="text" class="form-control form-control-sm py-3" id="reference" disabled :value="referenceNumber+ '-' +todaysYear"/>
                      </div>
                    </div>

                    <div class="col-md-3">
                      <div class="form-group">
                        <small
                          ><label for="requestedDate"
                            >Requested Date</label
                          ></small
                        >
                        <date-picker
                          disabled
                          valueType="format"
                          style="display: block; width: 100%; line-height: 20px"
                          v-model="requestedDate"
                        ></date-picker>
                      </div>
                    </div>

                    <div class="col-md-3">
                      <div class="form-group">
                        <small
                          ><label for="reportDateTime"
                            >Actual Delivery Date</label
                          ></small
                        >
                        <date-picker
                          v-model="actualDeliveryDate"
                          value-type="format"
                          style="display: block; width: 100%; line-height: 20px"
                        ></date-picker>
                        <small
                          class="text-danger p-0 m-0"
                          v-if="missingActualDeliveryDate && attemptNext"
                          >Actual Delivery Date is required!</small
                        >
                      </div>
                    </div>

                    <div class="col-md-3">
                      <div class="form-group">
                        <small
                          ><label for="reportDateTime"
                            >Planned Delivery Date</label
                          ></small
                        >
                        <date-picker
                          v-model="plannedDeliveryDate"
                          value-type="format"
                          style="display: block; width: 100%; line-height: 20px"
                        ></date-picker>
                        <small
                          class="text-danger p-0 m-0"
                          v-if="missingPlannedDeliveryDate && attemptNext"
                          >Planned Delivery Date is required!</small
                        >
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <small
                          ><label for="employeeName"
                            >MRF Short Text</label
                          ></small
                        >
                        <input
                          type="text"
                          class="form-control form-control-sm py-3"
                          v-model="mrfShortText"
                        />
                        <small
                          class="text-danger p-0 m-0"
                          v-if="missingMrfShortText && attemptNext"
                          >MRF Short Text is required!</small
                        >
                      </div>
                    </div>

                    <div class="col-md-6">
                      <div class="form-group">
                        <small
                          ><label
                            for="reportingManager selextForm"
                            id="selextForm"
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
                        >
                        </model-list-select>
                        <small
                          class="text-danger p-0 m-0"
                          v-if="missingReportingManager && attemptNext"
                          >Reporting Manager is required!</small
                        >
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <small
                          ><label for="projectName">Cost Center</label></small
                        >
                        <model-list-select
                          :list="project"
                          v-model="costCenter"
                          option-value="code"
                          option-text="name"
                          placeholder="select item"
                          style="padding: 9px"
                        >
                        </model-list-select>
                        <small
                          class="text-danger p-0 m-0"
                          v-if="missingCostCenter && attemptNext"
                          >Cost Center is required!</small
                        >
                      </div>
                    </div>

                    <div class="col-md-6">
                      <div class="form-group">
                        <small
                          ><label for="clientName">Client Name</label></small
                        >
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
                    <div class="col-md-6">
                      <div class="form-group">
                        <small><label for="projectName">Class</label></small>
                        <model-list-select
                          :list="classList"
                          v-model="classSelected"
                          option-value="code"
                          option-text="name"
                          placeholder="select item"
                          style="padding: 9px"
                        >
                        </model-list-select>
                        <small
                          class="text-danger p-0 m-0"
                          v-if="missingClass && attemptNext"
                          >Class is required!</small
                        >
                      </div>
                    </div>

                    <div class="col-md-6">
                      <div class="form-group">
                        <small><label for="clientName">Type </label></small>
                        <model-list-select
                          :list="TypeList"
                          v-model="TypeSelected"
                          option-value="code"
                          option-text="name"
                          placeholder="select item"
                          :style="isTypeDisabled"
                          :isDisabled="isTypeSelected === false"
                        >
                        </model-list-select>
                        <small
                          class="text-danger p-0 m-0"
                          v-if="missingType && attemptNext"
                          >Type is required!</small
                        >
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-12">
                      <div class="form-group">
                        <small><label for="reason">Remarks</label></small>
                        <textarea
                          class="form-control"
                          name="purpose"
                          id="purpose"
                          v-model="remarks"
                          rows="5"
                        ></textarea>
                        <small
                          class="text-danger p-0 m-0"
                          v-if="missingRemarks && attemptNext"
                          >Remarks is required!</small
                        >
                      </div>
                    </div>
                  </div>
                </aside>
                <!-- / Request Form -->
              </div>
            </div>

            <!-- Request Details Review -->
            <div v-if="counter === 2">
              <div class="card mt-4">
                <div class="card-header">
                  <h3 class="card-title font-weight-bold">Request Details</h3>

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
                  <table class="table table-sm table-hover">
                    <tbody>
                      <tr>
                        <td>MRF Number</td>
                        <td style="width: 70%">{{ referenceNumber+ '-' + todaysYear }}</td>
                      </tr>
                      <tr>
                        <td>Department</td>
                        <td>{{ loggedUserDepartment }}</td>
                      </tr>
                      <tr>
                        <td>Full Name</td>
                        <td>{{ loggedUserFullName }}</td>
                      </tr>
                      <tr>
                        <td>Reporting Manager</td>
                        <td>{{ reportingManagerItem.name }}</td>
                      </tr>
                      <tr>
                        <td>MRF Short Text</td>
                        <td>{{ mrfShortText }}</td>
                      </tr>
                      <tr>
                        <td>Date Requested</td>
                        <td>{{ requestedDate }}</td>
                      </tr>
                      <tr>
                        <td>Planned Delivery Date</td>
                        <td>{{ plannedDeliveryDate }}</td>
                      </tr>
                      <tr>
                        <td>Actual Delivery Date</td>
                        <td>{{ actualDeliveryDate }}</td>
                      </tr>
                      <tr>
                        <td>Cost Center</td>
                        <td>{{ costCenter.name }}</td>
                      </tr>
                      <tr>
                        <td>Client Name</td>
                        <td>{{ clientName }}</td>
                      </tr>
                      <tr>
                        <td>Materials Request Class</td>
                        <td>{{ classSelected.name }}</td>
                      </tr>
                      <tr>
                        <td>Materials Request Type</td>
                        <td>{{ TypeSelected.name }}</td>
                      </tr>
                      <tr>
                        <td>Remarks</td>
                        <td>{{ remarks }}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <!-- /.card-body -->
              </div>

              <!-- Request Form Review -->
              <div class="card mt-4">
                <div class="card-header">
                  <h3 class="card-title font-weight-bold">Checkout Details</h3>

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
                  <div class="card" v-for="cart in carts" :key="cart.id">
                    <div class="card-body card-split p2">
                      <div
                        class="d-flex justify-content-center align-items-center"
                      >
                        <img
                          src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1610416577-vans-1610416571.jpg"
                          style="
                            height: 150px;
                            width: 120px;
                            object-fit: contain;
                          "
                          alt=""
                          srcset=""
                          class="p-0 m-0"
                        />
                      </div>

                      <div class="card-details-holder">
                        <h6>
                          <b>{{ cart.description }}</b>
                        </h6>
                        <p>{{ cart.specification }}</p>
                        <div class="card-detail-list">
                          <ul>
                            <li>
                              Item Code:<span>{{ cart.item_code }}</span>
                            </li>
                            <li>
                              Brand:<span>{{ cart.brand }}</span>
                            </li>
                            <li>Model:<span>test</span></li>
                            <li>Category:<span>test</span></li>
                          </ul>

                          <ul>
                            <li>
                              UoM<span>{{ cart.cart_uom_name }}</span>
                            </li>
                            <li>
                              SKU<span>{{ cart.SKU }}</span>
                            </li>
                            <li>On Hand:<span>test</span></li>
                            <li>
                              Order Qty:<span>{{ cart.cart_quantity }}</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- /.Checkout loop -->
                  <!-- /.Request Details -->
                  <!-- /.Checkout list -->
                </div>
                <!-- /.card-body -->
              </div>
              <!-- /.Request Form Review -->
            </div>
            <!-- /.Request Details Review -->

            <!-- Checkout Footer -->
            <!-- Buttons -->
            <div
              class="
                row
                d-flex
                justify-content-between
                mt-3
                align-items-center
                flex-nowrap
                m-1
              "
            >
              <!-- go to cart or other page -->
              <button
                v-if="counter == 0"
                type="button"
                class="btn btn-secondary btn-sm"
                @click="back()"
              >
                <i class="fas fa-arrow-left mr-2"></i>
                Back
              </button>
              <button
                v-show="counter"
                type="button"
                @click="counter--"
                class="btn btn-secondary btn-sm"
              >
                <i class="fas fa-arrow-left mr-2"></i>
                Back
              </button>

              <button
                v-if="counter <= 1"
                type="button"
                @click="next()"
                class="btn ml-1 btn-primary btn-sm"
              >
                Next
                <i class="fas fa-arrow-right ml-2"></i>
              </button>

              <button
                v-else
                type="button"
                class="btn ml-1 btn-primary btn-sm"
                @click="purchase()"
              >
                Submit
              </button>
            </div>
            <!-- / Buttons -->

            <!-- /.Checkout Footer -->
          </div>
        </div>
      </div>
      <!-- Control Sidebar -->
      <control-sidebar></control-sidebar>
      <!-- /.control-sidebar -->

      <!-- Main Footer -->
      <main-footer></main-footer>
      <!-- /.Main Footer -->
    </div>
  </body>
</template>

<script>
/*eslint-disable*/
import { ModelListSelect } from "vue-search-select";
import axios from "axios";
import VsToast from "@vuesimple/vs-toast";
import ControlSidebar from "../../components/layout/ControlSidebar.vue";
import MainFooter from "../../components/layout/MainFooter.vue";

export default {
  components: {
    ModelListSelect,
    ControlSidebar,
    MainFooter,
  },
  created() {
    this.carts();
    this.getReportingManager(this.loggedUserId);
    this.todaysDate();
    this.getProjects();
  },
  watch: {
    classSelected(newValue) {
      if (!!newValue.code) {
        if (newValue.code >= 0 && newValue.code <= 3) {
          this.isTypeSelected = true;
          this.TypeSelected = {};

          if (newValue.code === 1) {
            this.TypeList = [
              { code: 1, name: "Material Request Project" },
              { code: 2, name: "Material Request Delivery" },
              { code: 3, name: "Material Request Demo" },
              { code: 4, name: "Material Request POC" },
            ];
            this.referenceNumber = 'MRF'
          } else if (newValue.code === 2) {
            this.TypeList = [
              { code: 5, name: "Asset Request Project" },
              { code: 6, name: "Asset Request Deliver" },
              { code: 7, name: "Asset Request Demo" },
              { code: 8, name: "Asset Request POC" },
              { code: 9, name: "Asset Request Internal" },
            ];
            this.referenceNumber = 'ARF'
          } else if (newValue.code === 3) {
            this.TypeList = [
              { code: 10, name: "Supplies Request Project" },
              { code: 11, name: "Supplies Request Internal" },
            ];
            this.referenceNumber = 'SURF'
          }
        } else {
          this.TypeSelected = {};
          this.isTypeSelected = false;
          this.referenceNumber = 'RMA'
        }
      } else {
        this.TypeSelected = {};
        this.isTypeSelected = false;
      }
    },
    costCenter(newValue) {
      this.getClient(newValue.code);
    },
  },
  computed: {
    isTypeDisabled() {
      if (this.classSelected.code >= 0 && this.classSelected.code <= 3) {
        return "padding: 9px";
      } else {
        return "padding: 9px; background-color: #e9ecef";
      }
    },
    classA() {
      return { active: this.counter >= 0 };
    },
    classB() {
      return { active: this.counter >= 1 };
    },
    classC() {
      return { active: this.counter >= 2 };
    },
    missingMrfShortText() {
      if (this.mrfShortText === undefined || this.mrfShortText == "")
        return true;
      return false;
    },
    missingReportingManager() {
      if (this.reportingManagerItem.code === undefined) {
        return true;
      } else {
        return false;
      }
    },
    missingPlannedDeliveryDate() {
      if (
        this.plannedDeliveryDate === undefined ||
        this.plannedDeliveryDate == ""
      )
        return true;
      return false;
    },
    missingActualDeliveryDate() {
      if (
        this.actualDeliveryDate === undefined ||
        this.actualDeliveryDate == ""
      )
        return true;
      return false;
    },
    missingCostCenter() {
      if (this.costCenter.code === undefined || this.costCenter.code == "")
        return true;
      return false;
    },
    missingClientName() {
      if (this.clientName === undefined || this.clientName == "") return true;
      return false;
    },
    missingClass() {
      if (
        this.classSelected.code === undefined ||
        this.classSelected.code == ""
      )
        return true;
      return false;
    },
    missingType() {
      if (this.isTypeSelected === false) return false;
      else if (
        this.TypeSelected.code === undefined ||
        this.TypeSelected.code == ""
      )
        return true;
      return false;
    },
    missingRemarks() {
      if (this.remarks === undefined || this.remarks == "") return true;
      return false;
    },
    todaysYear() {
      const today = new Date();
      const yyyy = today.getFullYear();
      return yyyy;
    },
  },
  data() {
    return {
      reportingManager: [],
      reportingManagerItem: {},
      mrfShortText: "",
      requestedDate: "",
      plannedDeliveryDate: "",
      actualDeliveryDate: "",
      costCenter: "",
      clientName: "",
      remarks: "",
      project: [],
      costCenter: {},
      classSelected: {},
      TypeSelected: {},
      TypeList: [],
      isTypeSelected: false,
      counter: 0,
      attemptNext: false,
      isLoading: false,
      cartList: [],
      referenceNumber : 'MRF',
      classList: [
        { code: 1, name: "Material Request" },
        { code: 2, name: "Asset Request" },
        { code: 3, name: "Supplies Request" },
        { code: 4, name: "RMA Request" },
      ],

      // Logged User Data
      loggedUserId: localStorage.getItem("id"),
      loggedUserFirstName: localStorage.getItem("fname"),
      loggedUserLastName: localStorage.getItem("lname"),
      loggedUserFullName: localStorage.getItem("fullName"),
      loggedUserDepartment: localStorage.getItem("department"),
      loggedUserPosition: localStorage.getItem("positionName"),
      companyId: localStorage.getItem("companyId"),
      companyName: localStorage.getItem("companyName"),
    };
  },

  methods: {
    back() {
      this.$router.replace("/the-cart");
    },
    next() {
      if (this.counter === 1) {
        this.attemptNext = true;
      }

      this.validateCurrentTab(this.counter);
    },
    validateCurrentTab(counter) {
      if (counter === 0) {
        this.counter++;
      } else if (counter === 1) {
        if (
          !this.missingReportingManager &&
          !this.missingMrfShortText &&
          !this.missingPlannedDeliveryDate &&
          !this.missingActualDeliveryDate &&
          !this.missingCostCenter &&
          !this.missingClass &&
          !this.missingType &&
          !this.missingRemarks
        ) {
          this.counter++;
        }
      }
    },

    // Query
    async getReportingManager(userid) {
      this.isLoading = true;
      const response = await fetch(
        `http://127.0.0.1:8000/api/reporting-manager/${userid}`,
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
      this.isLoading = false;
    },

    async getProjects() {
      this.isLoading = true;

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

      this.isLoading = false;

      const project = [];
      for (const key in responseData) {
        const request = {
          code: responseData[key].project_id,
          name: responseData[key].project_name,
        };
        project.push(request);
      }
      this.project = project;
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
    },

    async carts() {
      this.isLoading = true;

      const response = await fetch(
        `http://127.0.0.1:8000/api/cart-show/${this.loggedUserId}/${this.companyId}/2`,
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

      this.isLoading = false;

      this.carts = responseData;
    },

    async purchase() {
      const data = {
        "requisition_no" : this.referenceNumber+ '/' +this.todaysYear,
        "trans_type" : this.referenceNumber,
        "delivery_date" : this.actualDeliveryDate,
        "planned_delivery_date" : this.plannedDeliveryDate,
        "requested_date" : this.requestedDate,
        "remarks" : this.remarks,
        "userid" : this.loggedUserId,
        "clientid" : this.clientId,
        "costid" : this.costCenter.code,
        "costname" : this.costCenter.name,
        "clientname" : this.clientName,
        "short_text" : this.mrfShortText,
        "companyId" : this.companyId
      }
      // console.log(data);

      try {
        const res = await axios.post("http://127.0.0.1:8000/api/cart-purchase", data);
        this.openToast("top-right", "success", res.data);
        // console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    },
    // Request Details
    todaysDate() {
      const today = new Date();
      let dd = today.getDate();
      let mm = today.getMonth() + 1;
      const yyyy = today.getFullYear();

      if (mm < 10) {
        mm = `0${mm}`;
      }

      if (dd < 10) {
        dd = `0${dd}`;
      }

      const todaysDate = yyyy + "-" + mm + "-" + dd;
      this.requestedDate = todaysDate;
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

.checkout-header .input-form {
  display: flex;
  justify-content: center;
  align-items: center;
}

.checkout-list {
  display: flex;
}

.checkout-list .input-form {
  display: flex;
  justify-content: center;
  align-items: center;
}

.solid {
  border: 1px solid red;
}

.product-details h6 {
  font-weight: 900;
}

.product-details ul {
  margin: 0;
  padding: 0;
}

.product-details li {
  text-decoration: none;
  list-style: none;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.54);
}

.product-details li span {
  color: black;
  padding-left: 8px;
}

.checkout-footer {
  display: grid;
  grid-template-columns: 1fr 5fr 2fr 2fr 2fr;
}

.checkout-footer .input-form {
  display: flex;
  justify-content: center;
  align-items: center;
}

.underline {
  border-bottom: 1px solid #f5f5f5;
}

.anyClass {
  min-height: 30px;
  max-height: 630px;

  overflow-y: scroll;
}

.scroll-bar::-webkit-scrollbar {
  width: 2px;
  background-color: #f5f5f5;
}

.scroll-bar::-webkit-scrollbar-thumb {
  background-color: #000000;
  border: 2px solid #6c757d;
}
.card-split {
  display: grid;
  grid-template-columns: 3fr 9fr;
}

.card-detail-list {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.card-detail-list ul {
  margin: 0;
  padding: 0;
}

.card-detail-list li {
  text-decoration: none;
  list-style: none;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.54);
}

.card-detail-list li span {
  color: black;
  padding-left: 8px;
}
</style>
