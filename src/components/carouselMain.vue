<template>
  <section class="carousel__container">
  <VueSlickCarousel  v-bind="settings">
          <g-link to="/category/">
            <g-image
              src="~/assets/img/placeholder.svg"
              class="slide__img"
              width="500"
            />
            <h4 class="slide__title">Category Name</h4>
            <p class="slide__index">1 / 4</p>
          </g-link>

          <g-link to="/category/">
            <g-image
              src="~/assets/img/placeholder.svg"
              class="slide__img"
              width="500"
            />
            <h4 class="slide__title">Category Name</h4>
            <p class="slide__index">2 / 4</p>
          </g-link>

          <g-link to="/category/">
            <g-image
              src="~/assets/img/placeholder.svg"
              class="slide__img"
              width="500"
            />
            <h4 class="slide__title">Category Name</h4>
            <p class="slide__index">2 / 4</p>
          </g-link>


          <g-link  to="/category/">
            <g-image
              src="~/assets/img/placeholder.svg"
              class="slide__img"
              width="500"
            />
            <h4 class="slide__title">Category Name</h4>
            <p class="slide__index">2 / 4</p>
          </g-link>

          <g-link to="/category/">
            <g-image
              src="~/assets/img/placeholder.svg"
              class="slide__img"
              width="500"
            />
            <h4 class="slide__title">Category Name</h4>
            <p class="slide__index">2 / 4</p>
          </g-link>

    </VueSlickCarousel>
  </section>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel"
import 'vue-slick-carousel/dist/vue-slick-carousel.css'

export default {
  name: "carouselMain",
  components: { VueSlickCarousel },

  data() {
    return {
      settings: {
        dots: false,
        focusOnSelect: true,
        infinite: true,
        arrows: false,
        centerMode: true,
        pauseOnHover: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        touchThreshold: 3
      },

      slides: [
        {
          id: 1,
          title: "Category Name",
          img: "",
          link: "/acquedotti/",
        },
        {
          id: 2,
          title: "Category Name",
          img: "",
          link: "/category/",
        },
        {
          id: 3,
          title: "Category Name",
          img: "",
          link: "/category/",
        },
        {
          id: 4,
          title: "Category Name",
          img: "",
          link: "/category/",
        },
        {
          id: 5,
          title: "Category Name",
          img: "",
          link: "/category/",
        },
        {
          id: 6,
          title: "Category Name",
          img: "",
          link: "/category/",
        },
      ],
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


</style>
