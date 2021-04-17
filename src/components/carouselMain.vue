<template>
  <div class="carousel__container">
    <carousel
      class="main__carousel"
      per-page="3"
      navigationEnabled="true"
      autoplay="true"
      loop="true"
      scrollPerPage="false"
      speed="800"
      paginationActiveColor="#0075bf"
    >
      <slide v-for="slide in slides" :key="slide" class="carousel__cell">
        <g-image
          :src="slide.img"
          class="slide__img"
          fit="contain"
        >
        </g-image>
        <h4 class="slide__title">{{ slide.title }}</h4>
        <p class="slide__index"> {{ slide.id }} / {{ slides.length }}</p>
      </slide>

    </carousel>
  </div>
</template>

<script>
export default {
  name: "carouselMain",
  data() {
    return {
      slides: [
        {
          id: 1,
          title: "Prduct Name",
          img: "https://picsum.photos/500",
        },
        {
          id: 2,
          title: "Prduct Name",
          img: "https://picsum.photos/500",
        },
        {
          id: 3,
          title: "Prduct Name",
          img: "https://picsum.photos/500",
        },
         {
          id: 4,
          title: "Prduct Name",
          img: "https://picsum.photos/500",
        },
                 {
          id: 5,
          title: "Prduct Name",
          img: "https://picsum.photos/500",
        },
                         {
          id: 6,
          title: "Prduct Name",
          img: "https://picsum.photos/500",
        },
      ],
    };
  },
};
</script>

<style>

.slide__img {
  border: 1px solid rgba(196, 196, 196, 0.445);
  border-radius: 8px;
  width: 500px;
  height: 420px;
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
}

.slide__title::after {
  content: " ";
  position: absolute;
  bottom: -50%;
  left: 0;
  content: " ";
  width: 35%;
  height: 1px;
  background-color: #707070;
}

.slide__index {
  font-size: 0.725rem;
  margin-left: 2%;
  font-weight: 100;
  text-align: left;
  color: #2b2727;
}
</style>
