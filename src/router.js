import Vue from "vue";
import VueRouter from "vue-router";

import UserLogin from "./pages/auth/UserLogin.vue";
import MainDashboard from "./pages/dashboard/MainDashboard.vue";
import DashboardContent from "./pages/dashboard/DashboardContent.vue";
import TheParticipant from "./pages/workflow/TheParticipant.vue";
import TheInput from "./pages/workflow/TheInput.vue";
import TheApproval from "./pages/workflow/TheApproval.vue";
import TheInprogress from "./pages/workflow/TheInprogress.vue";
import TheClarification from "./pages/workflow/TheClarification.vue";
import TheApproved from "./pages/workflow/TheApproved.vue";
import TheWithdrawn from "./pages/workflow/TheWithdrawn.vue";
import TheRejected from "./pages/workflow/TheRejected.vue";
import CreateRfp from './pages/accounting/CreateRfp.vue'


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
          { path: "/approvals", component: TheApproval },
          { path: "/inprogress", component: TheInprogress },
          { path: "/clarifications", component: TheClarification },
          { path: "/approved", component: TheApproved },
          { path: "/withdrawn", component: TheWithdrawn },
          { path: "/rejected", component: TheRejected },
          { path: "/create-rfp", component: CreateRfp },
          //Accounting
          
        ],
      },
   

];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
