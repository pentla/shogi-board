<template>
  <div>
    <board/>
    <modal/>
  </div>
</template>

<script>
import Board from './components/Board.vue';
import Modal from './components/Modal.vue';

export default {
  components: {
    board: Board,
    modal: Modal,
  }
}
</script>
