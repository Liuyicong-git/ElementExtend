<!--
 * @Author: liuyicong
 * @Date: 2020-08-27 09:23:24
 * @LastEditors: liuyicong
 * @LastEditTime: 2020-08-27 10:15:27
 * @FilePath: \iwos-dashboard\pages\workbill\components\bill-card.vue
-->
<template>
  <div class="common-card">
    <div>
      <div class="common-card-title">
        <div v-if="$attrs.hasLine" class="title--line"></div>
        <span class="title--text">
          <slot name="title" />
        </span>
      </div>
      <div class="common-card-content">
        <slot name="content" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "common-card",
};
</script>
<style lang="scss" scoped>
.common-card {
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  &-title {
    border-bottom: 1px solid #dbdbdb;
    padding: 10px;
    font-weight: 500;
    font-size: 16px;
    .title--line {
      position: relative;
      top: 2px;
      width: 4px;
      height: 15px;
      background: #ff9d18;
      display: inline-block;
    }
    .title--text {
      padding-left: 5px;
    }
  }
  &-content {
    padding: 20px;
  }
}
</style>