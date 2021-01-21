
const copyBoard = {
   name:'copy-board',
   render(h){
      let appendDom = <span  onClick= { this.copy } class="copy-board__btn">  复制 </span>;
      if(this.$scopedSlots.append) {
          appendDom = this.$scopedSlots.append();
      }
      return ( 
          <div>
            { this.$attrs.text }
            { appendDom }
          </div>
      )
   },
   methods:{
      copy() {
        if(!this.$attrs.text) {
          this.$message.error("复制失败，请重新操作！");
          return;
        }
        this.$copyText(this.$attrs.text).then(
          (e) => {
            this.$message.success("复制成功： " + e.text);
          },
          () => {
            this.$toast("复制失败");
          }
        );
      },
   }
}
export default copyBoard;
