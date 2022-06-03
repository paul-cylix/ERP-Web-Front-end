<template>
  <div class="card">
    <div class="card-body p-2">
      <!-- Checkout loop -->
      <div class="checkout-list">
        <div class="product">
          <div class="input-form">
            <input
              type="checkbox"
              @click="toggleCheckbox($event)"
              :checked="cart_status === 2"
              name=""
              id=""
            />
          </div>
          <div class="d-flex justify-content-center align-items-center">
            <img
              src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1610416577-vans-1610416571.jpg"
              style="height: 150px; width: 120px; object-fit: contain"
              alt=""
              srcset=""
              class="p-0 m-0"
            />
          </div>

          <div class="product-details p-2">
            <h6 class="">{{ description }}</h6>
            <ul>
              <li>Item Code:<span>{{ item_code }}</span></li>
              <!-- <li>On Hand:<span>Lorem ipsum dolor sit.</span></li> -->
              <!-- <li>Model:<span>Lorem ipsum dolor sit.</span></li> -->
              <li>Category:<span>{{ category_name }}</span></li>
              <li>UoM:<span>{{ cart_uom_name }}</span></li>
              <li>Brand:<span>{{ brand_name }}</span></li>
              <!-- <li>SKU:<span>{{ category_name }}</span></li> -->
            </ul>
          </div>
        </div>

        <div class="d-flex justify-content-center align-items-center px-4">
          <select class="form-control form-control-sm">
            <option>Small select</option>
          </select>
        </div>

        <div
          class="
            qty-wrapper
            d-flex
            flex-nowrap
            justify-content-center
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
            class="form-control form-control-sm p-0 text-center"
            type="text"
            :value="cart_quantity"
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

        <div class="d-flex justify-content-center align-items-center">
          <button
            class="btn btn-sm btn-danger"
            @click="deleteProduct"
            style="width: 50px"
          >
            <i class="fas fa-trash"></i>
          </button>
        </div>
      </div>
      <!-- /.Checkout loop -->
    </div>
  </div>
</template>

<script>
import VsToast from "@vuesimple/vs-toast";
export default {
  name: "CartCard",
  props: [
    "cart_id",
    "cart_userid",
    "cart_companyid",
    "cart_group_detail_id",
    "cart_uom_id",
    "cart_uom_name",
    "cart_status",
    "cart_quantity",
    "created_at",
    "updated_at",

    "specification",
    "description",
    "item_code",
    "category_id",
    "category_name",
    "brand_id",
    "brand_name",
  ],

  methods: {
    deleteProduct() {
      const product = {
        cart_id: this.cart_id,
        cart_userid: this.cart_userid,
        cart_companyid: this.cart_companyid,
        cart_group_detail_id: this.cart_group_detail_id,
        cart_uom_id: this.cart_uom_id,
        cart_uom_name: this.cart_uom_name,
        cart_status: this.cart_status,
        cart_quantity: this.cart_quantity,
        created_at: this.created_at,
        updated_at: this.updated_at,
      };

      this.$emit("delete-product", product);
    },

    toggleCheckbox(event) {
      const status = event.target.checked ? true : false;
      const checkboxData = {
        cart_id: this.cart_id,
        cart_status: status,
      };
      this.$emit("toggle-checkbox", checkboxData);
    },

    decrement() {
      const productQtyTo = {
        cart_id: this.cart_id,
        quanityTo: false,
      };

      if (this.cart_quantity <= 1) {
        this.openToast("top-right", "error", "Negative quantity is not allowed!");
      } else {
        this.$emit("decrease-product-qty", productQtyTo);
      }
    },
    increment() {
      const productQtyTo = {
        cart_id: this.cart_id,
        quanityTo: true,
      };

      this.$emit("increase-product-qty", productQtyTo);
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
.checkout-list {
  display: grid;
  grid-template-columns: 7fr 2fr 2fr 1fr;
}

.checkout-list .input-form {
  display: flex;
  justify-content: center;
  align-items: center;
}

.solid {
  border: 1px solid red;
}

.checkout-list .product {
  display: grid;
  grid-template-columns: 1fr 3fr 8fr;
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
</style>
