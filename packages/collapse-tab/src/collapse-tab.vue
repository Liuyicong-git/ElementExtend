<template>
  <div class="card-swiper">
    <el-tabs type="border-card">
      <el-tab-pane label="用户管理">
        <div class="card-collapse">
          <div class="card-collapse-title" @click="triggleCollapse">
            <div class="card-collapse-title__left"> <i class="el-icon-search"></i>
              搜索条件：
              <el-tag v-for="(tag ,index) in tags" :key="index" closable>
                {{tag.currentLabel}} : {{tag.currentValue}}
              </el-tag>
            </div>
            <div class="card-collapse-right"> <i class="el-icon-arrow-down"></i></div>
          </div>
          <div class="card-collapse-form" :class="formFlag">
            <el-form ref="form" :model="form" label-width="80px" :conditions="conditions">
              <el-form-item label="活动名称">
                <el-input v-model="form.name"></el-input>
              </el-form-item>
              <el-form-item label="活动区域">
                <el-select v-model="form.region" placeholder="请选择活动区域">
                  <el-option v-for="(item , index) in reginList" :key="index" :label="item.value" :value="item.key">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="活动时间">
                <el-col :span="11">
                  <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;">
                  </el-date-picker>
                </el-col>
                <el-col class="line" :span="2">-</el-col>
                <el-col :span="11">
                  <el-time-picker placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
                </el-col>
              </el-form-item>
              <el-form-item label="即时配送">
                <el-switch v-model="form.delivery"></el-switch>
              </el-form-item>
              <el-form-item label="活动性质">
                <el-checkbox-group v-model="form.type">
                  <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
                  <el-checkbox label="地推活动" name="type"></el-checkbox>
                  <el-checkbox label="线下主题活动" name="type"></el-checkbox>
                  <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
                </el-checkbox-group>
              </el-form-item>
              <el-form-item label="特殊资源">
                <el-radio-group v-model="form.resource">
                  <el-radio label="线上品牌商赞助"></el-radio>
                  <el-radio label="线下场地免费"></el-radio>
                </el-radio-group>
              </el-form-item>
              <el-form-item label="活动形式">
                <el-input type="textarea" v-model="form.desc"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="onSubmit">立即创建</el-button>
                <el-button>取消</el-button>
              </el-form-item>
            </el-form>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="配置管理">配置管理</el-tab-pane>
      <el-tab-pane label="角色管理">角色管理</el-tab-pane>
      <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import conditions from "./test";
export default {
  name: "collapse-tab",
  data() {
    return {
      formFlag: "",
      reginList: [
        { key: "bei", value: "区域1" },
        { key: "bei1", value: "区域2" },
      ],
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
      conditions: conditions,

      tags: [],
    };
  },
  methods: {
    triggleCollapse() {
      this.formFlag =
        this.formFlag == "card-collapse__close"
          ? "card-collapse__default"
          : "card-collapse__close";
      this.tags = [];
      this.conditions.forEach((item) => {
        let value = this.form[item.name];
        if (item.type == "select") {
          let labelItem = this.reginList.find((val) => val.key === value);
          if (labelItem) {
            let result = item.callback(value, labelItem.value, item.name);
            this.tags.push(result);
          }
        }
        if (item.type == "input") {
          this.tags.push({
            currentLabel: item.showLabel,
            currentValue: value,
          });
        }
      });
    },
    onSubmit() {
      console.log("submit!");
    },
  },
  mounted() {
    // this.$nextTick(() => {
    //   console.log(this.$refs.form);
    // });
  },
};
</script>

<style lang="scss" scoped>
.card-collapse {
  width: 100%;
  height: auto;
  border: 1px solid #e5e5e5;

  &-title {
    display: flex;
    justify-content: space-between;
  }
  &-form {
    max-height: 500px;
    overflow: hidden;
    transition: max-height 300ms ease-in-out;
  }
  &__default {
    max-height: 500px;
  }
  &__close {
    max-height: 0px;
  }
}
</style>