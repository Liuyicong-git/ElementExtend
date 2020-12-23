<template>
  <div class="test-box">
    <!-- <h3> IWOS 连级 下拉 </h3>
    <drop-select dropLabelClass="drop-label" placeholder="请选择数据" value-key="value1" label-key="label1" ref="dropInput"
      @changeDrop="getDropInfo" @changeItem="getValue" /> -->
    <h3> IWOS table 查询 </h3>
    <el-input id="test" v-model="searchInput" @input="changeSearch" />
    <search-pop mountedFlag="#test" :loading="loading" :show="showTool">
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
    };
  },
  methods: {
    // drop-select
    getDropInfo() {
      this.loading = true;
      setTimeout(() => {
        this.$refs.dropInput.setSelectOptions([
          {
            value1: "选项14",
            label1: "黄金糕2",
          },
          {
            value1: "选项24",
            label1: "双皮2",
          },
          {
            value1: "选项34",
            label1: "蚵仔煎2",
          },
        ]);
        this.loading = false;
      }, 1000);
    },
    getValue(val) {
      console.log(val);
      if (val == "21") {
        this.showTool = true;
      }
    },
    // searchTable
    changeSearch(val) {
      console.log(val);
      if (val == "21") {
        this.showTool = true;
        this.loading = true;
        setTimeout(() => {
          this.tableData = [
            {
              date: "2016-05-02",
              name: "王小虎",
              address: "上海市普陀区金沙江路 1518 弄",
            },
            {
              date: "2016-05-04",
              name: "王小虎",
              address: "上海市普陀区金沙江路 1517 弄",
            },
            {
              date: "2016-05-01",
              name: "王小虎",
              address: "上海市普陀区金沙江路 1519 弄",
            },
            {
              date: "2016-05-03",
              name: "王小虎",
              address: "上海市普陀区金沙江路 1516 弄",
            },
          ];
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
  mounted() {
    // let initDrop = {
    //   dropMenus: [
    //     { key: "创建部门所属省区", value: 1, showLable: "创建...属省区" },
    //     { key: "任务部门所属省区", value: 2, showLable: "任务...属省区" },
    //     { key: "责任部门所属省区", value: 3, showLable: "责任...属省区" },
    //   ],
    //   selectOptions: [
    //     {
    //       value1: "选项1",
    //       label1: "黄金糕",
    //     },
    //     {
    //       value1: "选项2",
    //       label1: "双皮奶",
    //     },
    //     {
    //       value1: "选项3",
    //       label1: "蚵仔煎",
    //     },
    //   ],
    // };
    // this.$nextTick(() => {
    //   this.$refs.dropInput.initData(initDrop);
    // });
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
