import Vue from "vue";
import VueRouter from "vue-router";

import UserLogin from "./pages/auth/UserLogin.vue";
import MainDashboard from "./pages/dashboard/MainDashboard.vue";
import DashboardContent from "./pages/dashboard/DashboardContent.vue";
import TheParticipant from "./pages/workflow/TheParticipant.vue";
import TheInput from "./pages/workflow/input/TheInput.vue";
import TheApproval from "./pages/workflow/approval/TheApproval.vue";
import TheInprogress from "./pages/workflow/inprogress/TheInprogress.vue";
import TheClarification from "./pages/workflow/clarification/TheClarification.vue";
import TheApproved from "./pages/workflow/TheApproved.vue";
import TheWithdrawn from "./pages/workflow/TheWithdrawn.vue";
import TheRejected from "./pages/workflow/rejected/TheRejected.vue";
import CreateRfp from "./pages/accounting/CreateRfp.vue";
import MyPractice from "./pages/accounting/MyPractice.vue";
import TheRfp from "./pages/accounting/TheRfp.vue";
import GetInprogress from "./pages/workflow/inprogress/GetInprogress.vue";
import GetApproval from "./pages/workflow/approval/GetApproval.vue";
import GetRejected from "./pages/workflow/rejected/GetRejected.vue";
import GetInput from "./pages/workflow/input/GetInput.vue";
import GetClarification from "./pages/workflow/clarification/GetClarification.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", redirect: "/login" },
  { path: "/login", component: UserLogin },
  {
    path: "/thedashboard",
    component: MainDashboard,
    children: [
      { path: "/dashboard", component: DashboardContent },
      { path: "/participants", component: TheParticipant },
      { path: "/inputs", component: TheInput, children: [
        {
          path: ":id",
          name: "inputbyId",
          component: GetInput,
          props: true,
        },
      ] },
      {
        path: "/approvals",
        component: TheApproval,
        children: [
          { path: ":id", name: "approvalbyId", component: GetApproval, props: true },
        ],
      },
      {
        path: "/inprogress",
        component: TheInprogress,
        children: [
          {
            path: ":id",
            name: "inprogressbyId",
            component: GetInprogress,
            props: true,
          },
        ],
      },
      { path: "/clarifications", component: TheClarification, children: [
        {
          path: ":id",
          name: "clarificationbyId",
          component: GetClarification,
          props: true,
        },
      ], },
      { path: "/approved", component: TheApproved },
      { path: "/withdrawn", component: TheWithdrawn },
      {
        path: "/rejected",
        component: TheRejected,
        children: [
          {
            path: ":id",
            name: "rejectedbyId",
            component: GetRejected,
            props: true,
          },
        ],
      },
      { path: "/create-rfp", component: CreateRfp },
      { path: "/upload", component: MyPractice },
      { path: "/the-rfp", component: TheRfp },
      {
        path: "/:workflow-:frmClass-:id",
        name: "open-inprogress-requestforpayment",
        component: GetInprogress,
        props: true,
      },

      //Accounting
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    // console.log(to)
    // console.log(from)
    // console.log(savedPosition)
    return { x: 0, y: 0 };
  },
});

// router.beforeEach(function(to,from,next) {

// });

export default router;
