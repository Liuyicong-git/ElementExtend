## 快速使用 
ElementExtend是基于ElementUI进行的二次封装，包括DropSelect。

### 安装

```js
npm i element-extend-l  
```

### 引入

#### 完整引入

```js
import Vue from 'vue';
import ElementExtend from "element-extend-l";  
Vue.use(ElementExtend);
```

#### 按需引入

```javascript
import Vue from 'vue';
import { DropSelect }  from "element-extend-l/packages/drop-select";
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



