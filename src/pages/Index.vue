<template>
  <Layout>
  <carouselMain />
    <svg class="stripe_bottom" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1280 68.314">
      <path
        id="stripe-bottom"
        d="M1276-44.663s-26.685-1.07-590.2,0S-4,18.8-4,18.8V-49.518H1276Z"
        transform="translate(4 49.518)"
        fill="#0075bf"
      />
    </svg>

    <section class="title__container">
      <h1 class="page__title">Chi Siamo</h1>
      <p class="text">
        Energ-Tech è specializzata nella progettazione e fornitura sia di
        sistemi idroelettrici e/o fotovoltaici per impianti “in isola” (non
        connessi alla rete) che per impianti per la vendita di energia, connessi
        “in rete”.
      </p>
    </section>
    <section class="product__container">
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
    <section class="title__container">
      <h1 class="page__title">About Us</h1>
      <p class="text">
        La Società viene fondata nel 2010 dall’unione di tecnici con esperienza
        pluriennale nel campo della progettazione, produzione, distribuzione e
        installazione di componenti e sistemi completi per la realizzazione di
        impianti di generazione di energia elettrica da fonti naturali.
      </p>
    </section>
    <productDescription />
    <productDescription />
    <otherInfo />
    <otherInfo />
    <otherInfo />
    <pageForm />
  </Layout>
</template>


<script>
import carouselMain from "../components/carouselMain.vue";
import productDescription from "../components/productDescription.vue";
import otherInfo from "../components/otherInfo.vue";
import pageForm from "../components/pageForm.vue";

export default {
  components: { productDescription, otherInfo, carouselMain, pageForm },
  metaInfo: {
    title: "Home Page",
  },
};
</script>