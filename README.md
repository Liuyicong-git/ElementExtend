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

### DropSelect Attributes

| 参数            | 说明                            | 类型    | 可选值 | 默认值 |
| --------------- | ------------------------------- | ------- | ------ | ------ |
| loading         | 状态加在loading                 | boolean |        | false  |
| dropLabelClass  | 自定义drop-down样式class        | string  |        |        |
| dropSelectClass | 自定义e l-select 样式class      | string  |        |        |
| value-key       | 自定义下拉框选择值对应的属性    | string  |        | value  |
| label-key       | 自定义下拉框选择label对应的属性 | string  |        | key    |

组件下拉悬着是基于ElementUI el-select 二次开发其它属性DropSelect也继承，[请参考el-select](https://element.eleme.io/#/zh-CN/component/select).

//TODO events API

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

### SearchPop Attributes 

| 参数     | 说明                                                  | 类型    | 可选值 | 默认值 |
| -------- | ----------------------------------------------------- | ------- | ------ | ------ |
| show     | pop显示与隐藏控制                                     | boolean |        | false  |
| loading  | 加在状态，通常在存在异步请求下设置此值                | boolean |        | false  |
| flag     | 需要挂在的目标id的方式为 '#id' , '.class'，此项为必填 | string  |        |        |
| tipClass | 自定义pop class                                       | string  |        |        |

