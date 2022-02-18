<template>
    <div class="show ? 'backdrop':'backdrop-closed'">
    </div>
</template>

<script>
export default {
  name: 'Backdrop',
  props: {
      show: Boolean,
  },
  methods: {
        toggle (event)  {
            event.cancelBubble = true;
            event.stopPropagation();
            this.set(false)
        }
    },
  }
</script>

<style scoped>
.backdrop {
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 1;
}

.backdrop-closed {
    display: none;
}
</style>