<template>
  <h1 class="h2 mb-4">Add Note</h1>
  <note-form @onadd="handleNoteAdded" />
</template>

<script>
import NoteForm from "../components/NoteForm.vue";
import { useAlertStore } from "../stores/alert.js";
import { useRouter } from "vue-router";
export default {
  name: "AddNoteView",
  setup() {
    const router = useRouter();
    const alert = useAlertStore();
    const handleNoteAdded = () => {
      alert.setAlert("success", "Note has been added");
      router.push("/");
    };
    return {
      handleNoteAdded,
    };
  },
  components: {
    NoteForm,
  },
};
</script>

<style scoped>
</style>