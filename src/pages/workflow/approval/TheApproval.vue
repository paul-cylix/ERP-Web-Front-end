<template>
  <aside class="col-md-12">
    <router-view></router-view>
    <div class="col-md-12 mt-3">
      <div class="card card-secondary">
        <div class="card-header">
          <h3 class="card-title">For Approval Requests</h3>
        </div>
        <div class="card-body pt-0 pb-3">
          <data-table v-bind="parametersTable1" />
        </div>
      </div>
    </div>
  </aside>
</template>
<script>
import ActionButtons from "../ActionButtons.vue";
export default {
  name: "App",

  data() {
    return {
      requestArray: [],
    };
  },

  computed: {
    parametersTable1() {
      return {
        data: this.requestArray,
        tableClass:
          "table table-sm table-striped table-bordered small table-hover",
        columns: [
          {
            key: "reference",
            title: "Reference",
          },
          {
            key: "requestType",
            title: "Request Type",
          },
          {
            key: "date",
            title: "Request Date",
          },
          {
            key: "client",
            title: "Client Name",
          },
          {
            key: "project",
            title: "Project Name",
          },
          {
            key: "payee",
            title: "Payee",
          },
          {
            key: "initiator",
            title: "Initiator",
          },
          {
            key: "amount",
            title: "Amount",
          },
          {
            key: "Action Button",
            sortable: false,
            component: ActionButtons,
          },
        ],
      };
    },
  },

  watch: {
    //Navigate
    $route(newRoute) {
      this.getApprovals();
      console.log(newRoute);
    },
  },
  methods: {
    async getApprovals() {
      const loggedUserId = 12;
      const companyId = 1;

      const response = await fetch(
        `http://127.0.0.1:8000/api/getApprovals/${loggedUserId}/${companyId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
          },
        }
      );

      const responseData = await response.json();
      if (!response.ok) {
        const error = new Error(
          responseData.message || "Failed to fetch Withdrawn Requests."
        );
        throw error;
      }

      this.requestArray = responseData.data;
    },

    // activateAction(button){
    //   alert(button)
    // }
  },

  mounted() {
    this.getApprovals();
  },
};
</script>
