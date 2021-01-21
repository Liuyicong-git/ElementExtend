const log = console.log;
const { join } = require('path');
const { readdirSync, writeFileSync } = require('fs');
const  uppercamelcase = require('uppercamelcase');
const { version } = require("../../package.json");

const CWD = process.cwd();
const componentDir = join(CWD , './packages');
const stylesTemplate = `import "./styles/index.scss"; \n`;
const pluginTemplate = `import "./plugin"; \n`;
function compileDir(dir){
    const files = readdirSync(dir);
    let componentsName = [];   // 驼峰后所有组件对应名称
    let importComponentTemplate = ``; // 组件导入模版字符串
    let concatComponentName = '';
    files.forEach( item => {
      let upperComponentsName = uppercamelcase(item);
      componentsName.push(upperComponentsName);
      importComponentTemplate += `import ${upperComponentsName} from "../packages/${item}"; \n`
    })
    concatComponentName = componentsName.join(",\n  ");
    const injectVueTemplate = `
${stylesTemplate}${pluginTemplate}
let components = [ ${componentsName} ];
// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，则所有的组件都将被注册
const install = function (Vue) {
  // 判断是否安装
  if (install.installed) return
  // 遍历注册全局组件
  components.map(component => Vue.component(component.name, component))
  Vue.directive('dragdom', require("./directives/drag"));
}
// 判断是否是直接引入文件
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
    `;
const exportComponentStr = `
export default {
  // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
  install,
  // 以下是具体的组件列表
  ${concatComponentName}
}
`
const result = importComponentTemplate + injectVueTemplate + exportComponentStr;
writeFileSync(join(CWD, './src/index.js'), result); 

}


compileDir(componentDir)