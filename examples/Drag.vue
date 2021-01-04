<template>
  <div style="width:100vw;height:100vh;">
    <drag-box class="test-box">
      <div class="cursor:move;display:inline-block;">
        <img src="https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png" />
      </div>
    </drag-box>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.test-box {
  img {
    position: relative;
    height: 100%;
    width: 100%;
    cursor: pointer;
  }
}
</style>