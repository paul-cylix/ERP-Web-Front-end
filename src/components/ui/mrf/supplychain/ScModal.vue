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
                <div class="col-12 product-image-thumbs">
                  <div class="product-image-thumb">
                    <img
                      @click="changeModalImage"
                      src="data:image/png;base64,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"
                      alt="Product Image"
                    />
                  </div>
                  <div class="product-image-thumb">
                    <img
                      @click="changeModalImage"
                      src="data:image/jpeg;base64,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"
                      alt="Product Image"
                    />
                  </div>
                  <div class="product-image-thumb">
                    <img
                      @click="changeModalImage"
                      src="data:image/png;base64,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"
                      alt="Product Image"
                    />
                  </div>
                  <div class="product-image-thumb">
                    <img
                      @click="changeModalImage"
                      src="data:image/png;base64,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"
                      alt="Product Image"
                    />
                  </div>
                  <div class="product-image-thumb">
                    <img
                      @click="changeModalImage"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2O969qo-KYvi_rIE7XiJ_K_OArh0E62ScbA&usqp=CAU"
                      alt="Product Image"
                    />
                  </div>
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
                    <!-- <li>
                      UoM: <span class="ml-2">{{ cardDetails.uomName }}</span>
                    </li> -->
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

                    <li class="mt-2">
                      <div class="row">
                        <div class="col-md-2 d-flex align-items-center">
                        UOM:
                        </div>

                        <div class="col-md-5">
                          <!-- <model-list-select
                            :list="uom"
                            v-model="selectedUom"
                            option-value="uom_id"
                            option-text="uom_name"
                            placeholder="select item"
                            style="padding: 9px"
                          >
                          </model-list-select> -->

                          <select class="form-control form-control-sm" v-model="selectedUom">
                            <option :value="item" v-for="item in uom" :key="item.uom_id">{{ item.uom_name }}</option>
                          </select>

                        </div>
                      </div>
                    </li>

                    <li class="mt-2">
                      <div class="row">
                        <div class="col-md-2 d-flex align-items-center">
                          Quantity:
                        </div>
                        <div class="col-md-1"></div>
                        <div class="col-md-6">
                          <div
                            class="
                              qty-wrapper
                              d-flex
                              flex-nowrap
                              justify-content-start
                              align-items-center
                            "
                          >
                            <button
                              class="btn btn-sm btn-light"
                              @click="decrement"
                              style="width: 40px"
                            >
                              -
                            </button>
                            <input
                              class="
                                form-control form-control-sm
                                p-0
                                text-center
                              "
                              type="text"
                              :value="qty"
                              style="max-width: 70px; background-color: white"
                              readonly
                            />

                            <button
                              class="btn btn-sm btn-light"
                              @click="increment"
                              style="width: 40px"
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>
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
// import { ModelListSelect } from "vue-search-select";
export default {
  // components: {
  //   ModelListSelect,
  // },
  name: "ScModal",
  props: {
    cardDetails: {
      type: Object,
      required: true,
    },
    uom: {
      type: Array,
      required: false,
    },
  },

  watch: {
    cardDetails() {
      this.selectedUom = {"uom_id":this.$props.cardDetails.uomId, "uom_name":this.$props.cardDetails.uomName}
    }
  },

  data() {
    return {
      isModalLoading: false,
      selectedUom: {},
      qty: 1,
    };
  },

  methods: {
    decrement() {
      if (this.qty <= 1) {
        this.openToast(
          "top-right",
          "error",
          "Negative quantity is not allowed!"
        );
      } else {
        this.qty--;
      }
    },
    increment() {
      this.qty++;
    },

    changeModalImage(event) {
      // console.log(event.target.src)
      const img = document.getElementsByClassName("product-image");
      img[0].src = event.target.src;
    },

    async addToCart() {
      const uom_id = this.selectedUom.uom_id;
      const uom_name = this.selectedUom.uom_name;
      const qty = this.qty;

      Object.assign(this.cardDetails, {
        cart_uom_id: uom_id,
        cart_uom_name: uom_name,
        cart_quantity: qty,
      });



      if (uom_id) {
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
      } else {
        this.openToast("top-right", "error", "Please select UoM!");
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
