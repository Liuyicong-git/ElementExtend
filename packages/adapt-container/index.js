import AdaptContainer from './src/adapt-container';

AdaptContainer.install = (Vue) => {
  Vue.component(AdaptContainer.name , AdaptContainer);
}

export default AdaptContainer;