<template>
  <div class="drop-select">
    <el-dropdown @command="handleCommand" trigger="click" class="drop-select__label"
      :class="$attrs.dropLabelClass? $attrs.dropLabelClass : ' ' ">
      <span class="el-dropdown-link">
        {{ curerentItem ?  curerentItem.showLable :'' }}<i class="el-icon-caret-bottom  el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item v-for=" item in dropMenus" :key="item.key" :command="item.value">{{item.key}}
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    <el-select :class="$attrs.dropSelectClass ? $attrs.dropSelectClass : ''" v-loading="$attrs.loading" v-bind="$attrs"
      :valueKey="$attrs['value-key']" :labelKey="$attrs['label-key']" v-model="selectValue" filterable
      @change="changeSelect">
      <el-option v-for="(item ,index) in selectOptions" :key="index"
        :label=" $attrs['label-key'] ? item[$attrs['label-key']] : item.label "
        :value=" $attrs['value-key'] ? item[$attrs['value-key']] : item.value " />

    </el-select>
  </div>
</template>
<script>
export default {
  name: "drop-select",
  data() {
    return {
      dropMenus: [], // 下拉选项
      curerentItem: null, // 当前下拉选项信息
      selectValue: null, // 下拉框选项值
      selectOptions: [], // 下拉选
    };
  },
  methods: {
    initData({ dropMenus, defalutItem, selectOptions }) {
      this.dropMenus = dropMenus;
      this.curerentItem = defalutItem || dropMenus[0];
      this.selectOptions = selectOptions || [];
    },
    // 下拉框change
    handleCommand(command) {
      this.curerentItem = this.dropMenus.find((val) => val.value === command);
      this.$emit("changeDrop", this.curerentItem);
    },
    changeSelect(val) {
      this.$emit("changeItem", val);
    },
    // 设置 下拉框的选项
    setSelectOptions(options) {
      this.selectOptions = options;
    },
  },
};
</script>

<style lang="scss" scoped>
.drop-select {
  &__label {
    width: auto;
  }
}
</style>