<template>
      <div class="action-buttons d-flex justify-content-center align-items-center">
        <button class="btn btn-outline-success btn-sm"  title='Open Request' @click="handleAction()">
            <i class="fas fa-plus"></i>
        </button>


    </div>
</template>

<script>
export default {
  name: "MrfClarificationBtn",
  methods: {
    handleAction() {
      const data = this.data; // 123
      this.$store.dispatch("sc/setSelectedSupply", data);
    }
  },

  props: {
      data: {
          type: Object,
          required: true,
      },
  },
}
</script>

