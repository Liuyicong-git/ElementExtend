<template>
  <div class="test-box">
    <h3> IWOS table 查询 </h3>
    <el-input id="test" v-model="searchInput" @input="changeSearch" />
    <search-pop flag="#test" :loading="loading" :show="showTool">
      <div style="padding:15px">
        <el-table :data="tableData" border style="width: 100%" @row-click="rowClick">
          <el-table-column prop="date" label="日期" width="180" />
          <el-table-column prop="name" label="姓名" width="180" />
          <el-table-column prop="address" label="地址" />
        </el-table>
      </div>
    </search-pop>
  </div>

</template>

<script>
export default {
  data() {
    return {
      loading: false,
      showTool: false,
      tableData: [],
      searchInput: "",
      testValue: "",
      // dropMenus: dropMenus,
    };
  },
  methods: {
    changeSearch(val) {
      if (val == "21") {
        this.showTool = true;
        this.loading = true;
        setTimeout(() => {
          this.tableData = searchPopTableData;
          this.loading = false;
        }, 3000);
      } else {
        this.showTool = false;
      }
    },
    rowClick(row) {
      console.log(row);
      this.showTool = false;
    },
  },
};
</script>
<style lang="scss" scoped>
.test-box {
  display: flex;
  align-items: center;
  height: 100vh;
  flex-direction: column;
}
</style>
