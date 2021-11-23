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
                >Request details</span
              ></small
            >
          </div>
          <div class="textbar" :class="classB">
            <small
              ><span :class="classB" class="font-weight-bold"
                >Payment details</span
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

        <keep-alive>
          <component v-bind:is="selectedComponent"></component>
        </keep-alive>

        <!-- Button -->
        <div class="row d-flex justify-content-end mt-3">
          <div class="col-md-1">
            <button
              @click="prev"
              type="button"
              v-show="setIndex"
              class="btn btn-block btn-secondary btn-sm"
            >
              Previous
            </button>
          </div>
          <div v-if="setButton" class="col-md-1">
            <button
              @click="next"
              type="button"
              class="btn btn-block btn-primary btn-sm"
            >
              Next
            </button>
          </div>
          <div v-else class="col-md-1">
            <button
              type="button"
              @click="submitRfp"
              class="btn btn-block btn-success btn-sm"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- /.card -->
  </div>
</template>

<script>
import RequestDetails from "../../components/forms/RequestDetails.vue";
import PaymentDetails from "../../components/forms/PaymentDetails.vue";
import TheAttachments from "../../components/forms/TheAttachments.vue";
import FormReview from "../../components/forms/FormReview.vue";

export default {
  components: {
    RequestDetails,
    PaymentDetails,
    TheAttachments,
    FormReview,
  },
  data() {
    return {
      selectedComponent: "request-details",
      setIndex: 0,
      // value: '',
    };
  },

  computed: {
    setButton() {
      if (this.setIndex < 3) {
        return true;
      } else {
        return false;
      }
    },
    classA() {
      return { active: this.setIndex >= 0 };
    },
    classB() {
      return { active: this.setIndex >= 1 };
    },
    classC() {
      return { active: this.setIndex >= 2 };
    },
    classD() {
      return { active: this.setIndex >= 3 };
    },
  },
  watch: {
    setIndex() {
      if (this.setIndex === 0) {
        this.selectedComponent = "request-details";
      } else if (this.setIndex === 1) {
        this.selectedComponent = "payment-details";
      } else if (this.setIndex === 2) {
        this.selectedComponent = "the-attachments";
      } else if (this.setIndex === 3) {
        this.selectedComponent = "form-review";
      }
    },
  },
  methods: {
    prev() {
      this.setIndex--;
    },
    next() {
      this.setIndex++;
    },
    submitRfp() {
      const data = this.$store.getters["createRfp/rfp"];
      // const user = this.$store.getters.userLoggedIn;

      this.$store.dispatch("createRfp/submitRfp", data);
      // console.log(data)
      // console.log(user)

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
</style>
