/*  导入 组件必须提供namelse; */
import DropSelect from "./src/drop-select.vue";
// 为组件提供 install 安装方法，供按需引入
DropSelect.install = (Vue)=>{
    Vue.component(DropSelect.name , DropSelect );
}
  

/* 导出组件 */
export default DropSelect;