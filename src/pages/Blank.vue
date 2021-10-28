<template>
  <Metal>
    <div>
      <g-image
        class="hero__img"
        width="1440"
        height="600"
        fit="contain"
        background="white"
        src="../assets/img/placeholder.svg"
      />
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1280 68.314">
      <path
        id="stripe-bottom"
        d="M1276-44.663s-26.685-1.07-590.2,0S-4,18.8-4,18.8V-49.518H1276Z"
        transform="translate(4 49.518)"
        fill="#0075bf"
      />
    </svg>
    <section class="title__container">
      <h1 class="page__title">{{ page.title }}</h1>
      <p class="text">{{ page.description }}</p>
    </section>



    <pageForm />
  </Metal>
</template>

<script>
import Metal from '~/layouts/Metal.vue';
import carouselMain from "../components/carouselMain.vue";
import productDescription from "../components/productDescription.vue";
import otherInfo from "../components/otherInfo.vue";
import pageForm from "../components/pageForm.vue";
export default {
  components: { Metal, productDescription, otherInfo, carouselMain, pageForm },
  metaInfo: {
    title: "Blank Page",
    description: "Blank Page"
  },
  data() {
    return {
      page: {
        title: "Blank Page",
    description: "Blank Page"
      },
    };
  },
};
</script>
