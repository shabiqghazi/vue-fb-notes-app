import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AddNoteView from "../views/AddNoteView.vue";
import UpdateNoteView from "../views/UpdateNoteView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/addnote",
      name: "addnote",
      component: AddNoteView,
    },
    {
      path: "/updatenote/:id",
      name: "updatenote",
      component: UpdateNoteView,
    },
  ],
});

export default router;
