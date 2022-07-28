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
        <button
          class="btn btn-sm btn-outline-danger"
          @click="handleDelete(noteid)"
        >
          Delete
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import useDatabase from "../composable/useDatabase.js";
export default {
  name: "NoteComponent",
  setup(props, context) {
    const { deleteNote } = useDatabase();
    const handleDelete = async (id) => {
      try {
        await deleteNote(id);
        context.emit("notedelete");
      } catch (error) {
        console.log(error);
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