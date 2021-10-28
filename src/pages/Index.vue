<template>
  <Metal >
    <carouselMain style="background: transparent;" />
    <svg
      class="stripe_bottom"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1280 68.314"
    >
      <path
        id="stripe-bottom"
        d="M1276-44.663s-26.685-1.07-590.2,0S-4,18.8-4,18.8V-49.518H1276Z"
        transform="translate(4 49.518)"
        fill="#0075bf"
      />
    </svg>

    <section class="title__container mbg2">
      <h1 class="page__title">Chi Siamo</h1>
      <p class="text">
        Energ-Tech è specializzata nella progettazione e fornitura sia di
        sistemi idroelettrici e/o fotovoltaici per impianti “in isola” (non
        connessi alla rete) che per impianti per la vendita di energia, connessi
        “in rete”.
      </p>
    </section>
    <section class="product__container mbg2">
      <div class="title__wrapper">
        <p class="product__category">Acquedotti</p>
        <g-link href="#" class="product__title">Turbine Pelton</g-link>
        <p class="product__label">Impianti</p>
      </div>
      <g-image class="placeholder" src="../assets/img/placeholder.svg" />
      <p class="product__description">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea.
      </p>
    </section>
    <div class="divider"></div>
    <section class="title__container mbg2">
      <h1 class="page__title">About Us</h1>
      <p class="text">
        La Società viene fondata nel 2010 dall’unione di tecnici con esperienza
        pluriennale nel campo della progettazione, produzione, distribuzione e
        installazione di componenti e sistemi completi per la realizzazione di
        impianti di generazione di energia elettrica da fonti naturali.
      </p>
    </section>
    <productDescription  />
    <productDescription  />
    <otherInfo  />
    <otherInfo  />
    <otherInfo  />
    <pageForm  />
  </Metal>
</template>

<style scoped>
.test {
  border: 1px solid #bada55;
  width: 80vw;
  height: 50vh;
  margin: 3% auto;
  position: relative;
}
.test .mbg1 {
  background: -webkit-radial-gradient(
      center,
      circle,
      rgba(255, 255, 255, 0.35),
      rgba(255, 255, 255, 0) 20%,
      rgba(255, 255, 255, 0) 21%
    ),
    -webkit-radial-gradient(center, circle, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0)
          20%, rgba(0, 0, 0, 0) 21%),
    -webkit-radial-gradient(center, circle farthest-corner, #f0f0f0, #c0c0c0);
  background: -moz-radial-gradient(
      center,
      circle,
      rgba(255, 255, 255, 0.35),
      rgba(255, 255, 255, 0) 20%,
      rgba(255, 255, 255, 0) 21%
    ),
    -webkit-radial-gradient(center, circle, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0)
          20%, rgba(0, 0, 0, 0) 21%),
    -webkit-radial-gradient(center, circle farthest-corner, #f0f0f0, #c0c0c0);
  background: -ms-radial-gradient(
      center,
      circle,
      rgba(255, 255, 255, 0.35),
      rgba(255, 255, 255, 0) 20%,
      rgba(255, 255, 255, 0) 21%
    ),
    -webkit-radial-gradient(center, circle, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0)
          20%, rgba(0, 0, 0, 0) 21%),
    -webkit-radial-gradient(center, circle farthest-corner, #f0f0f0, #c0c0c0);
  background: -o-radial-gradient(
      center,
      circle,
      rgba(255, 255, 255, 0.35),
      rgba(255, 255, 255, 0) 20%,
      rgba(255, 255, 255, 0) 21%
    ),
    -webkit-radial-gradient(center, circle, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0)
          20%, rgba(0, 0, 0, 0) 21%),
    -webkit-radial-gradient(center, circle farthest-corner, #f0f0f0, #c0c0c0);
  background: radial-gradient(
      center,
      circle,
      rgba(255, 255, 255, 0.35),
      rgba(255, 255, 255, 0) 20%,
      rgba(255, 255, 255, 0) 21%
    ),
    -webkit-radial-gradient(center, circle, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0)
          20%, rgba(0, 0, 0, 0) 21%),
    -webkit-radial-gradient(center, circle farthest-corner, #f0f0f0, #c0c0c0);
  background-size: 10px 10px, 10px 10px, 100% 100%;
  background-position: 1px 1px, 0px 0px, center center;
  top: 0;
}

.test .mbg2 {
  background: -webkit-radial-gradient(
      center,
      circle farthest-corner,
      rgba(255, 255, 255, 0) 50%,
      rgba(200, 200, 200, 1)
    ),
    -webkit-radial-gradient(center, circle, rgba(255, 255, 255, 0.35), rgba(
            255,
            255,
            255,
            0
          )
          20%, rgba(255, 255, 255, 0) 21%),
    -webkit-radial-gradient(center, circle, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0)
          20%, rgba(0, 0, 0, 0) 21%),
    -webkit-radial-gradient(center, circle farthest-corner, #f0f0f0, #c0c0c0);
  background: -moz-radial-gradient(
      center,
      circle farthest-corner,
      rgba(255, 255, 255, 0) 50%,
      rgba(200, 200, 200, 1)
    ),
    -webkit-radial-gradient(center, circle, rgba(255, 255, 255, 0.35), rgba(
            255,
            255,
            255,
            0
          )
          20%, rgba(255, 255, 255, 0) 21%),
    -webkit-radial-gradient(center, circle, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0)
          20%, rgba(0, 0, 0, 0) 21%),
    -webkit-radial-gradient(center, circle farthest-corner, #f0f0f0, #c0c0c0);
  background: -ms-radial-gradient(
      center,
      circle farthest-corner,
      rgba(255, 255, 255, 0) 50%,
      rgba(200, 200, 200, 1)
    ),
    -webkit-radial-gradient(center, circle, rgba(255, 255, 255, 0.35), rgba(
            255,
            255,
            255,
            0
          )
          20%, rgba(255, 255, 255, 0) 21%),
    -webkit-radial-gradient(center, circle, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0)
          20%, rgba(0, 0, 0, 0) 21%),
    -webkit-radial-gradient(center, circle farthest-corner, #f0f0f0, #c0c0c0);
  background: -o-radial-gradient(
      center,
      circle farthest-corner,
      rgba(255, 255, 255, 0) 50%,
      rgba(200, 200, 200, 1)
    ),
    -webkit-radial-gradient(center, circle, rgba(255, 255, 255, 0.35), rgba(
            255,
            255,
            255,
            0
          )
          20%, rgba(255, 255, 255, 0) 21%),
    -webkit-radial-gradient(center, circle, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0)
          20%, rgba(0, 0, 0, 0) 21%),
    -webkit-radial-gradient(center, circle farthest-corner, #f0f0f0, #c0c0c0);
  background: radial-gradient(
      center,
      circle farthest-corner,
      rgba(255, 255, 255, 0) 50%,
      rgba(200, 200, 200, 1)
    ),
    -webkit-radial-gradient(center, circle, rgba(255, 255, 255, 0.35), rgba(
            255,
            255,
            255,
            0
          )
          20%, rgba(255, 255, 255, 0) 21%),
    -webkit-radial-gradient(center, circle, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0)
          20%, rgba(0, 0, 0, 0) 21%),
    -webkit-radial-gradient(center, circle farthest-corner, #f0f0f0, #c0c0c0);
  background-size: 100% 100%, 10px 10px, 10px 10px, 100% 100%;
  background-position: top center, 1px 1px, 0px 0px, top center;
  bottom: 0;
}
</style>

<script>
import Metal from '~/layouts/Metal.vue';
import carouselMain from "../components/carouselMain.vue";
import productDescription from "../components/productDescription.vue";
import otherInfo from "../components/otherInfo.vue";
import pageForm from "../components/pageForm.vue";

export default {
  components: { Metal, productDescription, otherInfo, carouselMain, pageForm },
  metaInfo: {
    title: "Home Page",
  },
};
</script>

