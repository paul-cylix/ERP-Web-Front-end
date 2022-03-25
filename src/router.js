import Vue from "vue";
import VueRouter from "vue-router";

import UserLogin from "./pages/auth/UserLogin.vue";
import MainDashboard from "./pages/dashboard/MainDashboard.vue";
import DashboardContent from "./pages/dashboard/DashboardContent.vue";
import TheParticipant from "./pages/workflow/participant/TheParticipant.vue";
import TheInput from "./pages/workflow/input/TheInput.vue";
import TheApproval from "./pages/workflow/approval/TheApproval.vue";
import TheInprogress from "./pages/workflow/inprogress/TheInprogress.vue";
import TheClarification from "./pages/workflow/clarification/TheClarification.vue";
import TheApproved from "./pages/workflow/approved/TheApproved.vue";
import TheWithdrawn from "./pages/workflow/withdrawn/TheWithdrawn.vue";
import TheRejected from "./pages/workflow/rejected/TheRejected.vue";
import NotFound from './pages/NotFound.vue';


import TheRfp from "./pages/accounting/TheRfp.vue";
import TheRe from "./pages/accounting/TheRe.vue";
import ThePc from "./pages/accounting/ThePc.vue";
import TheOt from "./pages/humanresource/TheOt.vue";
import TheItf from "./pages/humanresource/TheItf.vue";
import TheLaf from "./pages/humanresource/TheLaf.vue";
import TheDtr from "./pages/humanresource/TheDtr.vue";
import TheSof from "./pages/salesorder/TheSof.vue";


import RfpInprogress from "./pages/workflow/inprogress/RfpInprogress.vue";
import RfpApproval from "./pages/workflow/approval/RfpApproval.vue";
import RfpInput from "./pages/workflow/input/RfpInput.vue";
import RfpClarification from "./pages/workflow/clarification/RfpClarification.vue";
import RfpApproved from "./pages/workflow/approved/RfpApproved.vue";
import RfpRejected from "./pages/workflow/rejected/RfpRejected.vue";
import RfpWithdrawn from "./pages/workflow/withdrawn/RfpWithdrawn.vue";




import ReInprogress from "./pages/workflow/inprogress/ReInprogress.vue";
import ReApproval from "./pages/workflow/approval/ReApproval.vue";
import ReInput from "./pages/workflow/input/ReInput.vue";
import ReClarification from "./pages/workflow/clarification/ReClarification.vue";
import ReApproved from "./pages/workflow/approved/ReApproved.vue";
import ReRejected from "./pages/workflow/rejected/ReRejected.vue";
import ReWithdrawn from "./pages/workflow/withdrawn/ReWithdrawn.vue";




import PcInprogress from "./pages/workflow/inprogress/PcInprogress.vue";
import PcApproval from "./pages/workflow/approval/PcApproval.vue";
import PcClarification from "./pages/workflow/clarification/PcClarification.vue";
import PcApproved from "./pages/workflow/approved/PcApproved.vue";
import PcRejected from "./pages/workflow/rejected/PcRejected.vue";
import PcWithdrawn from "./pages/workflow/withdrawn/PcWithdrawn.vue";



import OtInprogress from "./pages/workflow/inprogress/OtInprogress.vue";
import OtApproval from "./pages/workflow/approval/OtApproval.vue";
import OtInput from "./pages/workflow/input/OtInput.vue";
import OtClarification from "./pages/workflow/clarification/OtClarification.vue";
import OtApproved from "./pages/workflow/approved/OtApproved.vue";
import OtRejected from "./pages/workflow/rejected/OtRejected.vue";
import OtWithdrawn from "./pages/workflow/withdrawn/OtWithdrawn.vue";




import ItfInprogress from "./pages/workflow/inprogress/ItfInprogress.vue";
import ItfApproval from "./pages/workflow/approval/ItfApproval.vue";
import ItfInput from "./pages/workflow/input/ItfInput.vue";
import ItfClarification from "./pages/workflow/clarification/ItfClarification.vue";
import ItfApproved from "./pages/workflow/approved/ItfApproved.vue";
import ItfRejected from "./pages/workflow/rejected/ItfRejected.vue";
import ItfWithdrawn from "./pages/workflow/withdrawn/ItfWithdrawn.vue"




import LafInprogress from "./pages/workflow/inprogress/LafInprogress.vue";
import LafApproval from "./pages/workflow/approval/LafApproval.vue";
import LafClarification from "./pages/workflow/clarification/LafClarification.vue";
import LafApproved from "./pages/workflow/approved/LafApproved.vue";
import LafRejected from "./pages/workflow/rejected/LafRejected.vue";
import LafWithdrawn from "./pages/workflow/withdrawn/LafWithdrawn.vue";




import SofInprogress from "./pages/workflow/inprogress/SofInprogress.vue";
import SofApproval from "./pages/workflow/approval/SofApproval.vue";
import SofInput from "./pages/workflow/input/SofInput.vue";
import SofApproved from "./pages/workflow/approved/SofApproved.vue";
import SofClarification from "./pages/workflow/clarification/SofClarification.vue";






import store from "./store/index.js";

Vue.use(VueRouter);

const routes = [
  { path: "/", redirect: "/login" },
  { path: "/login", component: UserLogin, meta: { requiresUnauth: true } },
  {
    path: "/thedashboard",
    component: MainDashboard,
    children: [
      {
        path: "/dashboard",
        component: DashboardContent,
        meta: { requiresAuth: true },
      },
      {
        path: "/participants",
        component: TheParticipant,
        meta: { requiresAuth: true },
      },
      {
        path: "/inputs",
        component: TheInput,
        children: [
          {
            path: ":id",
            name: "Request for Payment-input",
            component: RfpInput,
            props: true,
            meta: { requiresAuth: true },
          },
          {
            path: ":id",
            name: "Reimbursement Request-input",
            component: ReInput,
            props: true,
            meta: { requiresAuth: true },
          },
          {
            path: ":id",
            name: "Overtime Request-input",
            component: OtInput,
            props: true,
            meta: { requiresAuth: true },
          },
          {
            path: ":id",
            name: "Itinerary Request-input",
            component: ItfInput,
            props: true,
            meta: { requiresAuth: true },
          },
          {
            path: ":id",
            name: "sales_order_frm-input",
            component: SofInput,
            props: true,
            meta: { requiresAuth: true },
          },
        ],
        meta: { requiresAuth: true },
      },
      {
        path: "/approvals",
        component: TheApproval,
        children: [
          {
            path: ":id",
            name: "Request for Payment-approval",
            component: RfpApproval,
            props: true,
            meta: { requiresAuth: true },
          },
          {
            path: ":id",
            name: "Reimbursement Request-approval",
            component: ReApproval,
            props: true,
            meta: { requiresAuth: true },
          },
          {
            path: ":id",
            name: "Petty Cash Request-approval",
            component: PcApproval,
            props: true,
            meta: { requiresAuth: true },
          },
          {
            path: ":id",
            name: "Overtime Request-approval",
            component: OtApproval,
            props: true,
            meta: { requiresAuth: true },
          },
          {
            path: ":id",
            name: "Itinerary Request-approval",
            component: ItfApproval,
            props: true,
            meta: { requiresAuth: true },
          },
          {
            path: ":id",
            name: "Leave Request-approval",
            component: LafApproval,
            props: true,
            meta: { requiresAuth: true },
          },
          {
            path: ":id",
            name: "sales_order_frm-approval",
            component: SofApproval,
            props: true,
            meta: { requiresAuth: true },
          },

        ],
        meta: { requiresAuth: true },
      },
      {
        path: "/inprogress",
        component: TheInprogress,
        children: [
          {
            path: ":id",
            name: "Request for Payment-inprogress",
            component: RfpInprogress,
            props: true,
            meta: { requiresAuth: true },
          },
          {
            path: ":id",
            name: "Reimbursement Request-inprogress",
            component: ReInprogress,
            props: true,
            meta: { requiresAuth: true },
          },
          {
            path: ":id",
            name: "Petty Cash Request-inprogress",
            component: PcInprogress,
            props: true,
            meta: { requiresAuth: true },
          },
          {
            path: ":id",
            name: "Overtime Request-inprogress",
            component: OtInprogress,
            props: true,
            meta: { requiresAuth: true },
          },
          {
            path: ":id",
            name: "Itinerary Request-inprogress",
            component: ItfInprogress,
            props: true,
            meta: { requiresAuth: true },
          },
          {
            path: ":id",
            name: "Leave Request-inprogress",
            component: LafInprogress,
            props: true,
            meta: { requiresAuth: true },
          },
          {
            path: ":id",
            name: "sales_order_frm-inprogress",
            component: SofInprogress,
            props: true,
            meta: { requiresAuth: true },
          },




        ],
        meta: { requiresAuth: true },
      },
      {
        path: "/clarifications",
        component: TheClarification,
        children: [
          {
            path: ":id",
            name: "Request for Payment-clarification",
            component: RfpClarification,
            props: true,
            meta: { requiresAuth: true },
          },
          {
            path: ":id",
            name: "Reimbursement Request-clarification",
            component: ReClarification,
            props: true,
            meta: { requiresAuth: true },
          },
          {
            path: ":id",
            name: "Petty Cash Request-clarification",
            component: PcClarification,
            props: true,
            meta: { requiresAuth: true },
          },
          {
            path: ":id",
            name: "Overtime Request-clarification",
            component: OtClarification,
            props: true,
            meta: { requiresAuth: true },
          },
          {
            path: ":id",
            name: "Itinerary Request-clarification",
            component: ItfClarification,
            props: true,
            meta: { requiresAuth: true },
          },
          {
            path: ":id",
            name: "Leave Request-clarification",
            component: LafClarification,
            props: true,
            meta: { requiresAuth: true },
          },
          {
            path: ":id",
            name: "sales_order_frm-clarification",
            component: SofClarification,
            props: true,
            meta: { requiresAuth: true },
          },
        ],
        meta: { requiresAuth: true },
      },
      {
        path: "/approved",
        component: TheApproved,
        children: [
          {
            path: ":id",
            name: "Request for Payment-approved",
            component: RfpApproved, // paul
            props: true,
            meta: { requiresAuth: true },
          },
          {
            path: ":id",
            name: "Reimbursement Request-approved",
            component: ReApproved,
            props: true,
            meta: { requiresAuth: true },
          },
          {
            path: ":id",
            name: "Petty Cash Request-approved",
            component: PcApproved,
            props: true,
            meta: { requiresAuth: true },
          },
          {
            path: ":id",
            name: "Overtime Request-approved",
            component: OtApproved,
            props: true,
            meta: { requiresAuth: true },
          },
          {
            path: ":id",
            name: "Itinerary Request-approved",
            component: ItfApproved,
            props: true,
            meta: { requiresAuth: true },
          },
          {
            path: ":id",
            name: "Leave Request-approved",
            component: LafApproved,
            props: true,
            meta: { requiresAuth: true },
          },
          {
            path: ":id",
            name: "sales_order_frm-approved",
            component: SofApproved,
            props: true,
            meta: { requiresAuth: true },
          },
        ],
        meta: { requiresAuth: true },
      },
      {
        path: "/withdrawn",
        component: TheWithdrawn,
        children: [
          {
            path: ":id",
            name: "Request for Payment-withdrawn",
            component: RfpWithdrawn,
            props: true,
            meta: { requiresAuth: true },
          },
          {
            path: ":id",
            name: "Reimbursement Request-withdrawn",
            component: ReWithdrawn,
            props: true,
            meta: { requiresAuth: true },
          },
          {
            path: ":id",
            name: "Petty Cash Request-withdrawn",
            component: PcWithdrawn,
            props: true,
            meta: { requiresAuth: true },
          },
          {
            path: ":id",
            name: "Overtime Request-withdrawn",
            component: OtWithdrawn,
            props: true,
            meta: { requiresAuth: true },
          },
          {
            path: ":id",
            name: "Itinerary Request-withdrawn",
            component: ItfWithdrawn,
            props: true,
            meta: { requiresAuth: true },
          },
          {
            path: ":id",
            name: "Leave Request-withdrawn",
            component: LafWithdrawn,
            props: true,
            meta: { requiresAuth: true },
          },
        ],
        meta: { requiresAuth: true },
      },
      {
        path: "/rejected",
        component: TheRejected,
        children: [
          {
            path: ":id",
            name: "Request for Payment-rejected",
            component: RfpRejected,
            props: true,
            meta: { requiresAuth: true },
          },
          {
            path: ":id",
            name: "Reimbursement Request-rejected",
            component: ReRejected,
            props: true,
            meta: { requiresAuth: true },
          },
          {
            path: ":id",
            name: "Petty Cash Request-rejected",
            component: PcRejected,
            props: true,
            meta: { requiresAuth: true },
          },
          {
            path: ":id",
            name: "Overtime Request-rejected",
            component: OtRejected,
            props: true,
            meta: { requiresAuth: true },
          },
          {
            path: ":id",
            name: "Itinerary Request-rejected",
            component: ItfRejected,
            props: true,
            meta: { requiresAuth: true },
          },
          {
            path: ":id",
            name: "Leave Request-rejected",
            component: LafRejected,
            props: true,
            meta: { requiresAuth: true },
          },
        ],
        meta: { requiresAuth: true },
      },
      { path: "/the-rfp", component: TheRfp, meta: { requiresAuth: true } },
      { path: "/the-re", component: TheRe, meta: { requiresAuth: true } },
      { path: "/the-pc", component: ThePc, meta: { requiresAuth: true } },
      { path: "/the-ot", component: TheOt, meta: { requiresAuth: true } },
      { path: "/the-itf", component: TheItf, meta: { requiresAuth: true } },
      { path: "/the-laf", component: TheLaf, meta: { requiresAuth: true } },
      { path: "/the-dtr", component: TheDtr, meta: { requiresAuth: true } },
      { path: "/the-sof", component: TheSof, meta: { requiresAuth: true } },
      

    ],
    meta: { requiresAuth: true },
  },
  { path: '/:notFound(.*)', component: NotFound }

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

router.beforeEach((to, _, next) => {
  const test = !!localStorage.getItem("token");

  if (to.meta.requiresAuth && !test) {
    console.log(store.getters.isAuthenticated);
    next("/login");
  } else if (to.meta.requiresUnauth && test) {
    console.warn(store.getters.isAuthenticated);

    next("/dashboard");
  } else {
    next();
  }
});

export default router;
