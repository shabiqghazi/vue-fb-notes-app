<template>
  <h1 class="h2 mb-4">All Notes</h1>
  <router-link class="btn btn-secondary mb-3" to="/addnote">
    Add Note
  </router-link>
  <!-- <button class="btn btn-secondary mb-3">Add Note</button> -->
  <div class="row">
    <note-component
      v-for="note in notes"
      :key="note.id"
      :title="note.title"
      :text="note.text"
      :noteid="note.id"
      :timestamp="note.timestamp"
      @notedelete="onNoteDelete"
    />
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import NoteComponent from "../components/NoteComponent.vue";
import useDatabase from "../composable/useDatabase.js";
import useTimeFormat from "../composable/useTimeFormat.js";
import { useAlertStore } from "../stores/alert.js";
export default {
  name: "HomeView",
  setup() {
    const { getNotes, deleteNote } = useDatabase();
    const { getTimeString } = useTimeFormat();
    const alert = useAlertStore();
    const notes = ref([]);

    onMounted(() => {
      getAllNotes();
    });

    const getAllNotes = async () => {
      try {
        const list = await getNotes();
        notes.value = list.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
          timestamp: getTimeString(doc.data().timestamp.seconds),
        }));
      } catch (error) {
        console.log(error);
      }
    };

    const onNoteDelete = async (id) => {
      try {
        await deleteNote(id);
        alert.setAlert("success", "Note has been deleted");
      } catch (error) {
        console.log(error);
      }
      getAllNotes();
    };

    return {
      notes,
      onNoteDelete,
    };
  },
  components: {
    NoteComponent,
  },
};
</script>

<style scoped>
</style>