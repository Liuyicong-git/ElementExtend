<template>
  <div class="card-swiper">
    <div class="card-swiper__container">
      <div class="card-swiper-item">123</div>
      <div class="card-swiper-item">456</div>
      <div class="card-swiper-item">789</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "card-swiper",
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.card-swiper {
  width: 150px;
  border: 1px solid #e5e5e5;
  height: 50px;
  overflow: hidden;
  position: relative;
  .card-swiper__container {
    overflow-y: hidden;
    overflow-x: scroll;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    .card-swiper-item {
      width: 60px;
      display: inline-block;
      height: 50px;
      flex: 1 0 60px;
    }
  }
}
</style>