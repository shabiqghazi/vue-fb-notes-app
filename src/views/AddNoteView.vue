<template>
  <h1 class="h2 mb-4">Add Note</h1>
  <div class="col-md-6 col-lg-4">
    <div class="mb-3">
      <label for="title" class="form-label">Title</label>
      <input
        type="text"
        class="form-control"
        id="title"
        placeholder="Title..."
        v-model="title"
      />
    </div>
    <div class="mb-3">
      <label for="text" class="form-label">Text</label>
      <textarea
        class="form-control"
        id="text"
        rows="5"
        v-model="text"
      ></textarea>
    </div>
    <button class="btn btn-secondary" @click.prevent="handleSubmit">
      Submit
    </button>
  </div>
</template>

<script>
import { ref } from "vue";
import useDatabase from "../composable/useDatabase.js";
export default {
  name: "AddNoteView",
  setup() {
    const { addNote } = useDatabase();
    const title = ref("");
    const text = ref("");
    const handleSubmit = async () => {
      const data = {
        title: title.value,
        text: text.value,
      };
      try {
        await addNote(data);
      } catch (error) {
        console.log(error);
      }
    };

    return {
      title,
      text,
      handleSubmit,
    };
  },
};
</script>

<style scoped>
</style>