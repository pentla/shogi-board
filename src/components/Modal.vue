<template>
  <div v-show="show">
    <div class="modal hidden">
      成りますか？
      <div id="modal-btn">
        <div class="modal-option">yes</div>
        <div class="modal-option">no</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        show: false
      }
    },
  }
</script>