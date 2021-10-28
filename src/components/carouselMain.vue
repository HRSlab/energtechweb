<template>
  <VueSlickCarousel v-bind="settings">
    <div class="slide__container mbg2">
      <g-link to="/category/">
        <g-image
          src="/"
          class="slide__img"

        />
        <h4 class="slide__title">Lorem Ipsum</h4>
        <p class="slide__index">1 / 6</p>
      </g-link>
    </div>
    <div class="slide__container">
      <g-link to="/category/">
        <g-image
          src="/"
          class="slide__img"
        />
        <h4 class="slide__title">Lorem Ipsum</h4>
        <p class="slide__index">2 / 6</p>
      </g-link>
    </div>
    <div class="slide__container">
      <g-link to="/category/">
        <g-image
          src="/"
          class="slide__img"
        />
        <h4 class="slide__title">Lorem Ipsum</h4>
        <p class="slide__index">3 / 6</p>
      </g-link>
    </div>
    <div class="slide__container">
      <g-link to="/category/">
        <g-image
          src="/"
          class="slide__img"
          width="500"
          height="340"
          fit="contain"
        />
        <h4 class="slide__title">Lorem Ipsum</h4>
        <p class="slide__index">4 / 6</p>
      </g-link>
    </div>
    <div class="slide__container">
      <g-link to="/category/">
        <g-image
          src="/"
          class="slide__img"
        />
        <h4 class="slide__title">Lorem Ipsum</h4>
        <p class="slide__index">5 / 6</p>
      </g-link>
    </div>
        <div class="slide__container">
      <g-link to="/category/">
        <g-image
          src="/"
          class="slide__img"
        />
        <h4 class="slide__title">Lorem Ipsum</h4>
        <p class="slide__index">6 / 6</p>
      </g-link>
    </div>
  </VueSlickCarousel>
</template>

<script lang="js">
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
  name: "carouselMain",
  components: { VueSlickCarousel },

  data() {
    return {
      settings: {
        centerMode: true,
        autoplay: true,
        autoplaySpeed: 1000,
        pauseOnFocus: false,
        dots: true,
        arrows: true,
        centerPadding: '20px',
        focusOnSelect: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        speed: 1000,
        responsive: [
          {
            breakpoint: 480,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerPadding: '0',
            autoplaySpeed: 3500,
          }
         },
        ]
      },
    };
  },
};
</script>

<style>
/*
 * ----------------------------------------
 * Slider Style
 * ----------------------------------------
 */

.slick-slider {
  position: relative;
  background-color: white;
  max-height: 580px;
  padding: 3% 0;
}

.slick-slide {
 /* border: 1px solid red; */
  margin: 0 20px;
}


.slick-dots {
  margin: 2% auto;
}




.slide__img {
  position: relative;
  width: 100%;
  height: 400px;
  border: 1px solid rgba(196, 196, 196, 0.1);
  border-radius: 8px;
  text-decoration: none;
  background-image: url("../assets/img/placeholder.svg");
  background-size: cover;
  background-position: center;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}


.slide__img:hover {
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
}

.slide__title {
  position: relative;
  font-size: 1rem;
  margin-left: 2%;
  font-weight: 300;
  line-height: 1.29;
  text-align: left;
  color: var(--color-text);
  text-transform: uppercase;
   text-decoration: none;
}

.slide__title::after {
  content: " ";
  position: absolute;
  bottom: -50%;
  left: 0;
  width: 35%;
  height: 1px;
  background-color: #707070;
}

.slick-slide a {
  text-decoration: none;
}

.slide__index {
  position: relative;
  font-size: 0.725rem;
  line-height: 1.2;
  margin-left: 2%;
  font-weight: 100;
  text-align: left;
  color: var(--color-text);
  text-decoration: none;
}


/*
  ##Device = Most of the Smartphones Mobiles (Portrait)
  ##Screen = B/w 320px to 479px
*/

@media (min-width: 320px) and (max-width: 480px) {

slick-slider {
  position: relative;
  background-color: white;
  max-height: 580px;
  padding: 3% 0;
}

.slick-slide {
 border: 1px solid red;
  margin: 0 10px;
}


.slick-dots {
  margin-top: -2% !important;
  border: 1px solid #bada55;
}




.slide__img {
  position: relative;
  width: 400px;
  height: 400px;
  border: 1px solid rgba(196, 196, 196, 0.1);
  border-radius: 8px;
  text-decoration: none;
  background-image: url("../assets/img/placeholder.svg");
  background-size: cover;
  background-position: center;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}


.slide__img:hover {
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
}

.slide__title {
  position: relative;
  font-size: 1rem;
  margin-left: 2%;
  font-weight: 300;
  line-height: 1.29;
  text-align: left;
  color: var(--color-text);
  text-transform: uppercase;
   text-decoration: none;
}

.slide__title::after {
  content: " ";
  position: absolute;
  bottom: -50%;
  left: 0;
  width: 35%;
  height: 1px;
  background-color: #707070;
}

.slick-slide a {
  text-decoration: none;
}

.slide__index {
  position: relative;
  font-size: 0.725rem;
  line-height: 1.2;
  margin-left: 2%;
  font-weight: 100;
  text-align: left;
  color: var(--color-text);
  text-decoration: none;
}

}



</style>
