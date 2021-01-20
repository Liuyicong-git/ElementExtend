<!--
 * @Author: liuyicong
 * @Date: 2020-09-01 15:54:55
 * @LastEditors: liuyicong
 * @LastEditTime: 2020-09-18 17:22:49
 * @FilePath: \iwos-dashboard\components\bill-com\link-code.vue
-->
<template>
  <div>
    <slot name="text"></slot>
    <span @click="copy" v-if="waybillCode">
      <slot name="append">

      </slot>

    </span>
    <span v-if="!$attrs.suffix" class="link-code__copy"> 复制 </span>
  </div>
</template>

<script>
export default {
  name: "copy-board",
  props: ["waybillCode"],
  data() {
    return {
      message: this.waybillCode,
    };
  },
  methods: {
    toFormSearch() {},
    copyWaybillCode(e) {
      this.$message.success("复制成功： " + e.text);
    },
    copy() {
      this.$copyText(this.waybillCode).then(
        (e) => {
          this.$message.success("复制成功： " + e.text);
        },
        (e) => {
          this.$toast("复制失败");
        }
      );
    },
  },
};
</script>
<style lang="scss" scoped>
.link-code__copy {
  cursor: pointer;
  border: 1px solid #ff9d18;
  color: #ff9d18;
  border-radius: 15px;
  font-size: 12px;
  padding: 3px;
}
</style>