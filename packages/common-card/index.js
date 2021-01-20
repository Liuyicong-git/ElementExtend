import CommonCard from './src/common-card';

CommonCard.install = (Vue) =>{
  Vue.component(CommonCard.name , CommonCard)
}

export default CommonCard;