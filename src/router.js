import Vue from "vue";
import VueRouter from "vue-router";

import UserLogin from "./pages/auth/UserLogin.vue";
import MainDashboard from "./pages/dashboard/MainDashboard.vue";
import DashboardContent from "./pages/dashboard/DashboardContent.vue";
import TheParticipant from "./pages/workflow/TheParticipant.vue";
import TheInput from "./pages/workflow/TheInput.vue";
import TheApproval from "./pages/workflow/approval/TheApproval.vue";
import TheInprogress from "./pages/workflow/inprogress/TheInprogress.vue";
import TheClarification from "./pages/workflow/TheClarification.vue";
import TheApproved from "./pages/workflow/TheApproved.vue";
import TheWithdrawn from "./pages/workflow/TheWithdrawn.vue";
import TheRejected from "./pages/workflow/TheRejected.vue";
import CreateRfp from "./pages/accounting/CreateRfp.vue";
import MyPractice from "./pages/accounting/MyPractice.vue";
import TheRfp from "./pages/accounting/TheRfp.vue";
import InpId from "./pages/workflow/inprogress/InpId.vue";
import AppId from "./pages/workflow/approval/AppId.vue";

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
      { path: "/inputs", component: TheInput },
      {
        path: "/approvals",
        component: TheApproval,
        children: [
          { path: ":id", name: "approvalbyId", component: AppId, props: true },
        ],
      },
      {
        path: "/inprogress",
        component: TheInprogress,
        children: [
          {
            path: ":id",
            name: "inprogressbyId",
            component: InpId,
            props: true,
          },
        ],
      },
      { path: "/clarifications", component: TheClarification },
      { path: "/approved", component: TheApproved },
      { path: "/withdrawn", component: TheWithdrawn },
      { path: "/rejected", component: TheRejected },
      { path: "/create-rfp", component: CreateRfp },
      { path: "/upload", component: MyPractice },
      { path: "/the-rfp", component: TheRfp },
      {
        path: "/:workflow-:frmClass-:id",
        name: "open-inprogress-requestforpayment",
        component: InpId,
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
