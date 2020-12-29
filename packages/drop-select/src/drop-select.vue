<template>
  <div class="drop-select">
    <el-dropdown @command="handleCommand" trigger="click" class="drop-select__label"
      :class="$attrs.dropLabelClass? $attrs.dropLabelClass : ' ' ">
      <span class="el-dropdown-link">
        {{ curerentItem ?  curerentItem.showLable :'' }}
        <i class="el-icon-caret-bottom  el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item v-for=" item in $attrs['drop-menus']" :key="item.key" :command="item.value">{{item.key}}
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    <el-select v-if="$attrs.type == 'select'" :class="$attrs.dropSelectClass ? $attrs.dropSelectClass : ''"
      v-loading="$attrs.loading" v-bind="$attrs" v-on="$listeners" :valueKey="$attrs['value-key']"
      :labelKey="$attrs['label-key']" v-model="selectValue" filterable>
      <el-option v-for="(item ,index) in selectOptions" :key="index"
        :label=" $attrs['label-key'] ? item[$attrs['label-key']] : item.label "
        :value=" $attrs['value-key'] ? item[$attrs['value-key']] : item.value " />
    </el-select>
    <el-date-picker v-if="$attrs.type == 'datepick'" v-on="$listeners" v-bind="$attrs" v-model="selectValue"
      type="datetime">
    </el-date-picker>
  </div>
</template>
<script>
export default {
  name: "drop-select",
  data() {
    return {
      curerentItem: null, // 当前下拉选项信息
      selectValue: null, // 下拉框选项值
      selectOptions: [], // 下拉选
    };
  },
  props: {
    value: [String, Number],
    defalutItem: [Object],
  },
  methods: {
    // 下拉框change
    handleCommand(command) {
      this.curerentItem = this.$attrs["drop-menus"].find(
        (val) => val.value === command
      );
      this.$emit("changeDrop", this.curerentItem);
    },
    // 设置 下拉框的选项
    setSelectOptions(options) {
      this.selectOptions = options;
    },
  },
  watch: {
    selectValue: function (val) {
      this.$emit("input", val);
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.selectValue = this.value;
      this.curerentItem = this.defalutItem || this.$attrs["drop-menus"][0];
    });
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