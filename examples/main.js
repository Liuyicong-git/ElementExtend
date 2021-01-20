import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import CollapseTab from "./copy-board";
import All  from "../src/index";
Vue.use(ElementUI);
Vue.use(All);
new Vue({
  render: (h) => h(CollapseTab)
}).$mount('#app')