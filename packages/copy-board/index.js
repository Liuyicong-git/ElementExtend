import CopyBoard from "./src/copy-board";

CopyBoard.install = (vue)=>{
  vue.component(CopyBoard.name , CopyBoard);
}

export default  CopyBoard;