<template>
  <!-- Modal -->
  <div
    class="modal fade"
    id="readmore-modal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="readmore-modalLabel"
    aria-hidden="true"
    data-backdrop="static"
    data-keyboard="false"
  >
    <div class="modal-dialog modal-lg" role="document">
      <div class="modal-content">
        <div class="overlay" v-show="isModalLoading">
          <i class="fas fa-2x fa-sync fa-spin"> </i>
        </div>

        <div class="modal-header">
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <!-- Default box -->

          <div class="card-body">
            <div class="row">
              <div class="col-12 col-sm-6">
                <div class="col-12">
                  <img
                    src="data:image/jpeg;base64,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"
                    class="product-image"
                    alt="Product Image"
                  />
                </div>
              </div>
              <div class="col-12 col-sm-6">
                <h3 class="my-3">
                  {{ cardDetails.description }}
                </h3>
                <hr />
                <h6><b>Product Details</b></h6>

                <div class="product-details">
                  <ul>
                    <li>
                      Item Code:
                      <span class="ml-2">{{ cardDetails.itemCode }}</span>
                    </li>
                    <li>
                      UoM: <span class="ml-2">{{ cardDetails.uomName }}</span>
                    </li>
                    <li>
                      Has Serial:
                      <span class="ml-2">{{ cardDetails.hasSerial }}</span>
                    </li>
                    <li>
                      Category
                      <span class="ml-2">{{ cardDetails.category }}</span>
                    </li>
                    <li>
                      Sub Category:
                      <span class="ml-2"> {{ cardDetails.subCategory }}</span>
                    </li>
                    <li>
                      Brand: <span class="ml-2">{{ cardDetails.brand }}</span>
                    </li>
                    <li>
                      Qty on Hand:
                      <span class="ml-2">{{ cardDetails.onhand }}</span>
                    </li>
                    <li>
                      Sku: <span class="ml-2">{{ cardDetails.sku }}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="row mt-4">
              <nav class="w-100">
                <div class="nav nav-tabs" id="product-tab" role="tablist">
                  <a
                    class="nav-item nav-link active"
                    id="product-desc-tab"
                    data-toggle="tab"
                    href="#product-desc"
                    role="tab"
                    aria-controls="product-desc"
                    aria-selected="true"
                    >Description</a
                  >
                </div>
              </nav>
              <div class="tab-content p-3" id="nav-tabContent">
                <div
                  class="tab-pane fade show active"
                  id="product-desc"
                  role="tabpanel"
                  aria-labelledby="product-desc-tab"
                >
                  {{ cardDetails.specification }}
                </div>
              </div>
            </div>
          </div>
          <!-- /.card-body -->
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-success btn-sm"
            @click="addToCart"
          >
            <i class="fas fa-cart-plus mr-2"></i>Add To Cart
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- /.Modal -->
</template>

<script>
import VsToast from "@vuesimple/vs-toast";
export default {
  name: "ScModal",
  props: {
    cardDetails: {
      type: Object,
      required: false,
    },
  },

  data() {
    return {
      isModalLoading: false,
    };
  },

  methods: {
    async addToCart() {
      try {
        this.isModalLoading = true;
        const response = await this.$store.dispatch(
          "sc/addToCart",
          this.cardDetails
        );

        if (response.status >= 200 && response.status <= 399) {
          this.openToast("top-right", "success", response.data);
        }

        this.isModalLoading = false;
      } catch (err) {
        this.isModalLoading = false;

        if (err.response.status === 400) {
          this.openToast(
            "top-right",
            "error",
            "Bad Request! Please message the administrator!"
          );
        } else if (err.response.status === 404) {
          this.openToast(
            "top-right",
            "error",
            "Not Found! Please message the administrator!"
          );
        } else if (err.response.status === 408) {
          this.openToast(
            "top-right",
            "error",
            "Request Timeout! Please check your internet connection"
          );
        } else if (err.response.status === 429) {
          this.openToast(
            "top-right",
            "error",
            "Too Many Request! Try again later!"
          );
        } else {
          this.openToast("top-right", "error", err.message);
        }


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
  },
};
</script>

<style scoped>
.product-details ul {
  padding-left: 0px;
  color: #a9a399 !important;
}

.product-details ul li {
  list-style: none;
}

.product-details ul li span {
  color: #212529 !important;
}

/* Skeleton Modal */
.skeleton-img {
  background-color: #d9d9d9;
  min-height: 150px;
  position: relative;
  border-radius: 2px;
}

.skeleton-wrapper-upper {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 2%;
}

.skeleton-wrapper-upper .skeleton-title {
  min-height: 28px;
  background: #d9d9d9;
  display: block;
  position: relative;
}

.skeleton-wrapper-upper .skel-sp {
  height: 16px;
  background: #d9d9d9;
  display: block;
  position: relative;
  margin-top: 10px;
  border-radius: 2px;
  overflow: hidden;
}

.skeleton-wrapper-lower .skeleton-paragraph {
  min-height: 120px;
  background: #d9d9d9;
  display: block;
  position: relative;
  border-radius: 2px;
}

.skeleton-list0 {
  width: 87%;
}

.skeleton-list1 {
  width: 82%;
}

.skeleton-list2 {
  width: 92%;
}

.skeleton-list3 {
  width: 90%;
}

.skeleton-list4 {
  width: 85%;
}

.skeleton-list5 {
  width: 94%;
}

.skeleton-list6 {
  width: 82%;
}

.skeleton-list7 {
  width: 89%;
}

.skeleton-img::before,
.skeleton-title::before,
.skeleton-paragraph::before,
.skeleton-wrapper-upper .skel-sp::before {
  content: "";
  position: absolute;
  height: 100%;
  width: 100%;
  background-image: linear-gradient(
    to right,
    #d9d9d9 0%,
    rgba(0, 0, 0, 0.05) 20%,
    #d9d9d9 40%,
    #d9d9d9 100%
  );
  background-size: 450px 400px;
  background-repeat: no-repeat;
  animation: shimmer 1s linear infinite;
}

@keyframes shimmer {
  0% {
    background-position: -450px 0;
  }

  100% {
    background-position: 450px 0;
  }
}

/* Skeleton Modal */
</style>
