<template>
  <h1 class="h2 mb-4">Add Note</h1>
  <note-form />
</template>

<script>
import NoteForm from "../components/NoteForm.vue";
export default {
  name: "AddNoteView",
  setup() {},
  components: {
    NoteForm,
  },
};
</script>

<style scoped>
</style>