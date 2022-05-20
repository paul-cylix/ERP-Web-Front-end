<template>
  <!-- Card -->
  <div class="col main-card-wrapper mb-2 supplyCard">
    <div
      class="card myHover main-card"
      data-toggle="modal"
      data-target="#readmore-modal"
    >
      <img
        src="data:image/jpeg;base64,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"
        class="card-img-top embed-responsive-item"
        alt="..."
      />

      <div class="card-body">
        <div class="negative">
          <div class="text-truncate p-0">
            <b>{{ id }}</b>
          </div>
        </div>

        <div class="card-listx" style="font-size: 12px">
          <ul>
            <li class="text-truncate">
              Item Code:<span>{{ postId }}</span>
            </li>
            <li class="text-truncate">
              Brand:<span>{{ name }}</span>
            </li>
            <li class="text-truncate">
              Model:<span>{{ email }}</span>
            </li>
            <li class="text-truncate">
              SKU: <span>{{ body }}</span>
            </li>
                <li class="text-truncate">
              SKU: <span>{{ body }}</span>
            </li>
                <li class="text-truncate">
              SKU: <span>{{ body }}</span>
            </li>
                <li class="text-truncate">
              SKU: <span>{{ body }}</span>
            </li>
                <li class="text-truncate">
              SKU: <span>{{ body }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <!-- /.Card -->
</template>

<script>
export default {
  props: ["postId", "id", "name", "email", "body"],
};
</script>

<style scoped>
.card-listx ul {
  margin-top: 5px;
  padding-left: 0;
}

.card-listx ul > li {
  list-style: none;
}

.card-listx ul > li > span {
  margin-left: 10px;
}

.product-details ul {
  padding-left: 0px;
  color: #a9a399 !important;
}

.product-details ul > li {
  list-style: none;
}

.product-details ul > li > span {
  margin-left: 10px;
  color: #212529 !important;
}

.card-img-top {
  width: 100%;
  height: 10vw;
  object-fit: cover;

  /* min-height: 20vw; */
}

.myHover:hover {
  opacity: 0.8;
  cursor: pointer;
}
</style>
