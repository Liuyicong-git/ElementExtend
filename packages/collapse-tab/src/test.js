export default [
  {
    name: "region",
    type: "select",
    /** val 当前值 ， label 为当前tags 文案，  key为当前form 对应的key */
    callback: (val, label, key) => {
      debugger;
      let target = {
        currentLabel: label,
        currentValue: val,
      };
      return target;
    },
  },
  {
    name:'name',
    type:'input',
    showLabel:'活动名称：'
  },
]