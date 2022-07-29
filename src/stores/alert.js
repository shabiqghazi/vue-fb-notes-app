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
    setAlert(isOpen = false, type = "error", message = "") {
      this.isOpen = isOpen;
      console.log("alert setted");
      if (isOpen === true) {
        this.type = type;
        this.message = message;
        setTimeout(() => {
          this.setAlert();
        }, 2000);
      }
    },
  },
});
