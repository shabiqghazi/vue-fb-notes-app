<script>
import { useAlertStore } from "./stores/alert";
import NavbarComponent from "./components/NavbarComponent.vue";
import AlertComponent from "./components/AlertComponent.vue";

export default {
  name: "App",
  components: {
    NavbarComponent,
    AlertComponent,
  },
  setup() {
    const alert = useAlertStore();

    return {
      alertData: alert.getAlertData,
    };
  },
};
</script>

<template>
  <alert-component
    v-if="alertData.isOpen === true"
    :alerttype="alertData.type"
    :message="alertData.message"
  />
  <NavbarComponent />
  <div class="container py-5">
    <RouterView />
  </div>
</template>

<style scoped>
</style>
