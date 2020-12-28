import CardSwiper from "./src/card-swiper";
CardSwiper.install = function( Vue ) {

   Vue.component(CardSwiper.name , CardSwiper);

};

export default CardSwiper;