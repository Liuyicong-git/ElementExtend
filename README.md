## 快速使用 
ElementExpand是基于ElementUI进行的二次封装，包括DropSelect。

### 安装

```js
npm i element-expand 
```

### 引入

#### 完整引入

```js
import Vue from 'vue';
import ElementExpand from "element-expand";  
Vue.use(ElementExpand);
```

#### 按需引入

```javascript
import Vue from 'vue';
import { DropSelect }  from "element-expand/packages/drop-select";
Vue.use(DropSelect);
```



## DropSelect

```html
<template>
  <div>
    <h3> 连级 下拉(无初始值) </h3>
    <drop-select :drop-menus="dropMenus" v-model="value1" dropLabelClass="drop-label" placeholder="请选择数据" value-key="value1"
      label-key="label1" ref="dropInput" @changeDrop="getDropInfo" @change="getValue" type="select" />
    <h3> 连级 下拉(有初始值) </h3>
    <drop-select v-model="value" :defalutItem="dropMenus[1]" :drop-menus="dropMenus" dropLabelClass="drop-label" placeholder="请选择数据" value-key="value1"
      label-key="label1" ref="dropInput1" @changeDrop="getDropInfo" @change="getValue" type="select" />
    <h3> 连级时间下拉框</h3>
    <drop-select :drop-menus="dropMenus" ref="dropPicker" dropLabelClass="drop-label" placeholder="请选择数据"
      type="datepick" />
  </div>

</template>

<script>
const DropSelect = ElementExpand.default.DropSelect;
let dropMenus = [
        { key: "创建部门所属省区", value: 1, showLable: "创建...属省区" },
        { key: "任务部门所属省区", value: 2, showLable: "任务...属省区" },
        { key: "责任部门所属省区", value: 3, showLable: "责任...属省区" },
      ];
let dropSelectOptions = [
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
    }
];  
export default {
  components: {
    'drop-select':DropSelect
  },
  data(){
     return {
      value:"选项14",
      value1:"",
      loading: false,
      showTool: false,
      tableData: [],
      dropMenus: dropMenus,
    };
  },
  methods:{
     getDropInfo(val) {
      setTimeout(() => {
        this.$refs.dropInput.setSelectOptions(dropSelectOptions);
      }, 1000);
    },
    getValue(val) {
      console.log(val);
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.$refs.dropInput1.setSelectOptions(dropSelectOptions);
    });
  },
};
</script>

```

[在线运行](https://codepen.io/liuyicong-git/pen/gOwoedR)

### DropSelect Attributes

| 参数            | 说明                            | 类型    | 可选值 | 默认值 |
| --------------- | ------------------------------- | ------- | ------ | ------ |
| loading         | 状态加在loading                 | boolean |        | false  |
| dropLabelClass  | 自定义drop-down样式class        | string  |        |        |
| dropSelectClass | 自定义e l-select 样式class      | string  |        |        |
| value-key       | 自定义下拉框选择值对应的属性    | string  |        | value  |
| label-key       | 自定义下拉框选择label对应的属性 | string  |        | key    |

Events Attributes

| 事件名称         | 说明                      | 回调参数          |
| ---------------- | ------------------------- | ----------------- |
| setSelectOptions | 设置type为select  options |                   |
| changeDrop       | 获取下拉menu的选中值      | dropMenu中选中值  |
| change           | 下拉框 select 改变        | 选中select 对应值 |

组件下拉悬着是基于ElementUI el-select 二次开发其它属性DropSelect也继承，[请参考el-select](https://element.eleme.io/#/zh-CN/component/select).



## SearchPop

SearchPop  主要为input或者 其他输入查询数据展示提供优化。

```html
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
<style>
.test-box {
  display: flex;
  align-items: center;
  height: 100vh;
  flex-direction: column;
}
</style>
```

[在线运行]()

### SearchPop Attributes 

| 参数     | 说明                                                  | 类型    | 可选值 | 默认值 |
| -------- | ----------------------------------------------------- | ------- | ------ | ------ |
| show     | pop显示与隐藏控制                                     | boolean |        | false  |
| loading  | 加在状态，通常在存在异步请求下设置此值                | boolean |        | false  |
| flag     | 需要挂在的目标id的方式为 '#id' , '.class'，此项为必填 | string  |        |        |
| tipClass | 自定义pop class                                       | string  |        |        |

