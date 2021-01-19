
let log = console.log;
// function isObjectAsset(){
//     log( ObjectUtils.isObject(null) , `  null 调用isObject 的结果为 ${ObjectUtils.isObject(null)} `);
//     log( ObjectUtils.isObject(undefined) , `  undefined 调用isObject 的结果为 ${ObjectUtils.isObject(undefined)}`)
//     log( ObjectUtils.isObject({}), `  {} 调用isObject 的结果为 ${ObjectUtils.isObject({})}`)
//     log( ObjectUtils.isObject(Object.create(null)), `  Object.create(null) 调用isObject 的结果为 ${ObjectUtils.isObject(Object.create(null))} `)
//     log( ObjectUtils.isObject(function(){}) , `Function 调用isObject 的结果为${ObjectUtils.isObject(function(){})}`)
//     log( ObjectUtils.isObject([]) , ` Array 调用isObject 的结果为 ${ObjectUtils.isObject([])}`);
// }
const NotArray = function(val){
   return !Array.isArray(val);
}
const NotNull = function (val) {
   return val !== null;
}
const NotBlank = function (val) {
  return  Object.keys(val).length !== 0;
}
const isObject = function(obj) {
    return typeof obj === 'object';
}
isObject.condition = function(...args) {
   return function (val) {
     let flag = isObject(val);
     if(!flag) return false;
     args.forEach( fnStr => {
        let  func = eval(fnStr);
        let result = func.call(null, val);
        if( !result) return false;
     })
     return true;
   }
}
log(isObject.condition('NotBlank','NotArray','NotNull' )(1))
