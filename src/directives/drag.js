
export default {
  bind(el) {
      const dialogHeaderEl = el.lastChild; // 指定拖动的DOM
      dialogHeaderEl.style.cursor = 'move';
      const dragDom = el; // 被拖动的DOM
      // // 获取原有属性 ie dom元素.currentStyle 火狐谷歌 window.getComputedStyle(dom元素, null);
      // const sty = dragDom.currentStyle || window.getComputedStyle(dragDom, null);
      dialogHeaderEl.onmousedown = (e) => {
          const oEvent = e || event;
          // 鼠标按下，计算当前元素距离可视区的距离
          dragDom.style.transition = 'none';
          document.onmousemove = function (e) {
          // 通过事件委托，计算移动的距离 （开始拖拽至结束拖拽的距离）
              const l = e.clientX  - 50;
              const t = e.clientY  - 30;
              let finallyL = l;
              let finallyT = t;
              // top 边界值判定
              if (finallyT < 0) {
                  finallyT = 0;
              }
              // left 边界值判定
              if (finallyL < 0) {
                  finallyL = 0;
              }
              // right 边界值判定
              if (finallyL > 0 && finallyL > parseInt(document.body.clientWidth - dragDom.clientWidth)) {
                  finallyL = parseInt(document.body.clientWidth - dragDom.clientWidth);
              }
              // 移动当前元素
              dragDom.style.left = `${finallyL}px`;
              dragDom.style.top = `${finallyT}px`;

          // 将此时的位置传出去
          // binding.value({x:e.pageX,y:e.pageY})
          };
          document.onmouseup = function () {
              document.onmousemove = null;
              document.onmouseup = null;
              // e.preventDefault();
          };
          oEvent.preventDefault();
      };
  }
};
