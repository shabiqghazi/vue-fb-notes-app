<template>
  <div class="col-md-6 col-lg-4">
    <form>
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
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
import useDatabase from "../composable/useDatabase.js";
import { useRoute } from "vue-router";
export default {
  name: "NoteForm",
  props: ["prnoteid", "prtitle", "prtext"],
  setup(props, context) {
    const { addNote, updateNote } = useDatabase();
    const route = useRoute();

    const title = ref(props.prtitle);
    const text = ref(props.prtext);
    const handleSubmit = async () => {
      const data = {
        title: title.value,
        text: text.value,
      };
      try {
        if (route.name === "updatenote") {
          await updateNote(props.prnoteid, data);
          context.emit("onupdate");
        } else if (route.name === "addnote") {
          await addNote(data);
          context.emit("onadd");
        }
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