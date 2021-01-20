import CopyBoard from "./src/copy-board2";

CopyBoard.install = (vue)=>{
  vue.component(CopyBoard.name , CopyBoard);
}

export default  CopyBoard;