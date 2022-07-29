import { defineStore } from "pinia";

export const useAlertStore = defineStore({
  id: "alert",
  state: () => ({
    isOpen: "false",
    type: "success",
    message: "",
  }),
  getters: {
    getAlertData: (state) => state,
  },
  actions: {
    setAlert(type = "secondary", message = "") {
      this.isOpen = true;
      this.type = type;
      this.message = message;
      setTimeout(() => {
        this.isOpen = false;
      }, 6000);
    },
  },
});
