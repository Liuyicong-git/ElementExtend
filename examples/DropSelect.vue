<template>
  <div>
    <h3> 连级 下拉 </h3>
    <drop-select :drop-menus="dropMenus" dropLabelClass="drop-label" placeholder="请选择数据" value-key="value1"
      label-key="label1" ref="dropInput" @changeDrop="getDropInfo" @change="getValue" v-model="value" type="select" />
    <h3> 连级时间下拉框</h3>
    <drop-select :drop-menus="dropMenus" ref="dropPicker" dropLabelClass="drop-label" placeholder="请选择数据"
      type="datepick" />
  </div>

</template>

<script>
import { dropMenus, dropSelectOptions } from "./test.js";
export default {
  data() {
    return {
      loading: false,
      showTool: false,
      value: "选项14",
      tableData: [],
      dropMenus: dropMenus,
    };
  },
  methods: {
    // drop-select
    getDropInfo(val) {
      console.log(val);
      this.loading = true;
      setTimeout(() => {
        this.$refs.dropInput.setSelectOptions(dropSelectOptions);
        this.loading = false;
      }, 1000);
    },
    getValue(val) {
      console.log(val);
    },
  },
  mounted() {
    this.$refs.dropInput.setSelectOptions(dropSelectOptions);
  },
};
</script>
