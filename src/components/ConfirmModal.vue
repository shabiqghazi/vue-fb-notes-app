<template>
  <div class="modall">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="staticBackdropLabel">Confirm</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body mb-3">Are you sure?</div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary me-2"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <button type="button" class="btn btn-primary" @click="handleConfirm">
            Understood
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ConfirmModal",
  setup(props, context) {
    const handleConfirm = () => {
      context.emit("confirm");
    };
    return {
      handleConfirm,
    };
  },
};
</script>

<style>
.modall {
  position: fixed;
  top: 50px;
  left: 0px;
  width: 100%;
  z-index: 8000;
}
.modal-dialog {
  width: 400px;
  background-color: #fcfcfc;
  border: solid 1px #ddd;
  border-radius: 1rem;
  padding: 1rem;
}
</style>