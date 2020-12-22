<template>
  <div>
    <drop-select dropLabelClass="drop-label" placeholder="请选择数据" value-key="value1" label-key="label1" ref="dropInput"
      @changeDrop="getDropInfo" @changeItem="getValue" />
  </div>

</template>

<script>
export default {
  data() {
    return {
      loading: false,
    };
  },
  methods: {
    getDropInfo(val) {
      console.log(val);
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
    },
  },
  mounted() {
    let initDrop = {
      dropMenus: [
        { key: "创建部门所属省区", value: 1, showLable: "创建...属省区" },
        { key: "任务部门所属省区", value: 2, showLable: "任务...属省区" },
        { key: "责任部门所属省区", value: 3, showLable: "责任...属省区" },
      ],
      selectOptions: [
        {
          value1: "选项1",
          label1: "黄金糕",
        },
        {
          value1: "选项2",
          label1: "双皮奶",
        },
        {
          value1: "选项3",
          label1: "蚵仔煎",
        },
      ],
    };
    this.$nextTick(() => {
      this.$refs.dropInput.initData(initDrop);
    });
  },
};
</script>

