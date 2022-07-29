<template>
  <div class="alert-container">
    <div :class="['alert', `alert-${alerttype}`]" role="alert">
      {{ message }}
    </div>
  </div>
</template>

<script>
export default {
  name: "AlertComponent",
  props: ["alerttype", "message"],
};
</script>

<style scoped>
.alert-container {
  position: fixed;
  min-width: 300px;
  padding: 0;
  z-index: 100;
  bottom: 30px;
  left: 30px;
}
.alert {
  padding: 0.7rem 1rem;
}
</style>