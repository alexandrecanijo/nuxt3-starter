<template>
  <header>
    <div class="wrapper">
      <div class="inner-wrapper">
        <span>Header</span>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
header {
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: $zindex-300;
  min-height: xrem(60px);
}
</style>
