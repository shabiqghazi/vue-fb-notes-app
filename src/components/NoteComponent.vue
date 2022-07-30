<template>
  <div class="col-lg-3 col-md-6 mb-3">
    <div class="card text-bg-light">
      <div class="card-header">
        <small>{{ timestamp }}</small>
      </div>
      <div class="card-body">
        <h5 class="card-title">{{ title }}</h5>
        <p class="card-text mb-3">
          <!-- {{ text.substring(0, 50) }}<span v-if="text.length > 50">...</span> -->
          {{ text }}
        </p>
        <router-link
          class="btn btn-sm btn-outline-success"
          :to="`/updatenote/${noteid}`"
        >
          Edit
        </router-link>

        <button
          class="btn btn-sm btn-outline-danger ms-1"
          @click="handleDelete(noteid)"
        >
          Delete
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NoteComponent",

  setup(props, context) {
    const handleDelete = (id) => {
      if (confirm("Are you sure?")) {
        context.emit("notedelete", id);
      }
    };
    return {
      handleDelete,
    };
  },
  props: ["title", "text", "index", "timestamp", "noteid"],
};
</script>

<style scoped>
</style>