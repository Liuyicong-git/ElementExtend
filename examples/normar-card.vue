<template>
  <common-card :hasLine="true" @click.native="test">
    <template v-slot:title> 这是卡片头,如果 normal-card 中 hasLine 那么就有前面的竖线</template>
    <template v-slot:content> 这是卡片的内容， </template>
  </common-card>
</template>

<script>
export default {
  methods: {
    test() {
      alert(1);
    },
  },
};
</script>

<style>
</style>