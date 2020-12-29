import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import DropSelect from "./DropSelect";
import All  from "../packages/index";
Vue.use(ElementUI);
Vue.use(All);
new Vue({
  render: (h) => h(DropSelect)
}).$mount('#app')