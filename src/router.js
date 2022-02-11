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

import TheRfp from "./pages/accounting/TheRfp.vue";
import TheRe from "./pages/accounting/TheRe.vue";
import ThePc from "./pages/accounting/ThePc.vue";
import TheOt from "./pages/humanresource/TheOt.vue";
import TheItf from "./pages/humanresource/TheItf.vue";
import TheLaf from "./pages/humanresource/TheLaf.vue";


import RfpInprogress from "./pages/workflow/inprogress/RfpInprogress.vue";
import RfpApproval from "./pages/workflow/approval/RfpApproval.vue";
import RfpRejected from "./pages/workflow/rejected/RfpRejected.vue";
import RfpInput from "./pages/workflow/input/RfpInput.vue";
import RfpClarification from "./pages/workflow/clarification/RfpClarification.vue";

import ReInprogress from "./pages/workflow/inprogress/ReInprogress.vue";
import ReApproval from "./pages/workflow/approval/ReApproval.vue";
import ReInput from "./pages/workflow/input/ReInput.vue";
import ReClarification from "./pages/workflow/clarification/ReClarification.vue";

import PcInprogress from "./pages/workflow/inprogress/PcInprogress.vue";
import PcApproval from "./pages/workflow/approval/PcApproval.vue";
import PcClarification from "./pages/workflow/clarification/PcClarification.vue";

import OtInprogress from "./pages/workflow/inprogress/OtInprogress.vue";
import OtApproval from "./pages/workflow/approval/OtApproval.vue";
import OtInput from "./pages/workflow/input/OtInput.vue";
import OtClarification from "./pages/workflow/clarification/OtClarification.vue";

import ItfInprogress from "./pages/workflow/inprogress/ItfInprogress.vue";
import ItfApproval from "./pages/workflow/approval/ItfApproval.vue";
import ItfInput from "./pages/workflow/input/ItfInput.vue";
import ItfClarification from "./pages/workflow/clarification/ItfClarification.vue";

import LafInprogress from "./pages/workflow/inprogress/LafInprogress.vue";
import LafApproval from "./pages/workflow/approval/LafApproval.vue";
import LafClarification from "./pages/workflow/clarification/LafClarification.vue";





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
      {
        path: "/inputs",
        component: TheInput,
        children: [
          {
            path: ":id",
            name: "Request for Payment-input",
            component: RfpInput,
            props: true,
          },
          {
            path: ":id",
            name: "Reimbursement Request-input",
            component: ReInput,
            props: true,
          },
          {
            path: ":id",
            name: "Overtime Request-input",
            component: OtInput,
            props: true,
          },
          {
            path: ":id",
            name: "Itinerary Request-input",
            component: ItfInput,
            props: true,
          },
        ],
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
          },
          {
            path: ":id",
            name: "Reimbursement Request-approval",
            component: ReApproval,
            props: true,
          },
          {
            path: ":id",
            name: "Petty Cash Request-approval",
            component: PcApproval,
            props: true,
          },
          {
            path: ":id",
            name: "Overtime Request-approval",
            component: OtApproval,
            props: true,
          },
          {
            path: ":id",
            name: "Itinerary Request-approval",
            component: ItfApproval,
            props: true,
          },
          {
            path: ":id",
            name: "Leave Request-approval",
            component: LafApproval,
            props: true,
          },
        ],
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
          },
          {
            path: ":id",
            name: "Reimbursement Request-inprogress",
            component: ReInprogress,
            props: true,
          },
          {
            path: ":id",
            name: "Petty Cash Request-inprogress",
            component: PcInprogress,
            props: true,
          },
          {
            path: ":id",
            name: "Overtime Request-inprogress",
            component: OtInprogress,
            props: true,
          },
          {
            path: ":id",
            name: "Itinerary Request-inprogress",
            component: ItfInprogress,
            props: true,
          },
          {
            path: ":id",
            name: "Leave Request-inprogress",
            component: LafInprogress,
            props: true,
          },

          
        ],
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
          },
          {
            path: ":id",
            name: "Reimbursement Request-clarification",
            component: ReClarification,
            props: true,
          },
          {
            path: ":id",
            name: "Petty Cash Request-clarification",
            component: PcClarification,
            props: true,
          },
          {
            path: ":id",
            name: "Overtime Request-clarification",
            component: OtClarification,
            props: true,
          },
          {
            path: ":id",
            name: "Itinerary Request-clarification",
            component: ItfClarification,
            props: true,
          },
          {
            path: ":id",
            name: "Leave Request-clarification",
            component: LafClarification,
            props: true,
          },
        ],
      },
      { path: "/approved", component: TheApproved },
      { path: "/withdrawn", component: TheWithdrawn },
      {
        path: "/rejected",
        component: TheRejected,
        children: [
          {
            path: ":id",
            name: "rejectedbyId",
            component: RfpRejected,
            props: true,
          },
        ],
      },
      { path: "/the-rfp", component: TheRfp },
      { path: "/the-re", component: TheRe },
      { path: "/the-pc", component: ThePc },
      { path: "/the-ot", component: TheOt },
      { path: "/the-itf", component: TheItf },
      { path: "/the-laf", component: TheLaf },



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
