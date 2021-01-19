<template>
  <div style="width:100vw;height:100vh;">

    <div v-dragdom style="position:fixed;">
      <img src="https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png"
        style="height:100px;width:100px;" />
    </div>

  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.test-box {
  img {
    position: relative;
    height: 100px;
    width: 100px;
  }
}
</style>