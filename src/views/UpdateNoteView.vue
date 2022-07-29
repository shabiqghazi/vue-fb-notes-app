<template>
  <h1 class="h2 mb-4">Update Note</h1>
  <note-form v-if="id" :prnoteid="id" :prtitle="title" :prtext="text" />
</template>

<script>
import NoteForm from "../components/NoteForm.vue";
import { useRoute } from "vue-router";
import useDatabase from "../composable/useDatabase.js";
import { onMounted, reactive, toRefs } from "vue";
export default {
  name: "UpdateNoteView",
  setup() {
    const note = reactive({
      id: "",
      title: "",
      text: "",
    });
    const { getNote } = useDatabase();
    const route = useRoute();

    onMounted(() => {
      getData(route.params.id);
    });

    const getData = async (id) => {
      try {
        const data = await getNote(id);
        note.title = data.data().title;
        note.text = data.data().text;
        note.id = data.id;
      } catch (error) {
        console.log(error);
      }
    };
    return {
      ...toRefs(note),
    };
  },
  components: {
    NoteForm,
  },
};
</script>

<style scoped>
</style>