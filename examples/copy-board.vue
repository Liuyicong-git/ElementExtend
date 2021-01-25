<template>
  <div>
    <copy-board text="默认复制来测试" />
    <br />
    <copy-board text="自定义复制来测试" ref="copyBoard">
      <template v-slot:append>
        <el-button type="mini" @click="defineCopy">这里自定义 复制按钮</el-button>
      </template>
    </copy-board>
  </div>
</template>

<script>
export default {
  methods: {
    defineCopy() {
      this.$refs.copyBoard.copy();
    },
  },
};
</script>
