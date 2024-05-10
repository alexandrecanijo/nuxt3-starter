<script setup>
// @TODO: Make this variable reactive and watchable
const shouldShowOverlay = ref(false);

function closeOverlays() {
  shouldShowOverlay.value = false;
}
</script>

<template>
  <div class="overlay" :class="[shouldShowOverlay ? 'active' : '']" @click="closeOverlays()">
    <div @click.stop />
  </div>
</template>

<style lang="scss" scoped>
.overlay {
  transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
  position: fixed;
  inset: 0;
  display: flex;
  opacity: 0;
  justify-content: center;
  background-color: var(--overlay-bg-color);
  z-index: -100;

  &.active {
    z-index: $zindex-500;
    display: flex;
    opacity: 1;
  }
}
</style>
