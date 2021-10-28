<template>
  <Metal >
    <g-image
      class="hero__img dark-bg"
      width="1440"
      height="600"
      fit="cover"
      background="white"
      quality="100"
      src="../assets/img/products/acquedotti/PeltonTurbine.webp"
    />

    <svg
      class="stripe-bottom dark-bg"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1280 68.314"
    >
      <path
        id="stripe-bottom"
        class="dark-bg"
        d="M1276-44.663s-26.685-1.07-590.2,0S-4,18.8-4,18.8V-49.518H1276Z"
        transform="translate(4 49.518)"
        fill="#0075bf"
      />
    </svg>

    <section class="title__container metal">
      <h1 class="page__title">{{ page.title }}</h1>
      <p class="text">{{ page.description }}</p>
    </section>

    <section class="product__container dark-bg">
      <div class="title__wrapper">
        <p class="product__category">Acquedotti</p>
        <g-link href="#" class="product__title">Titolo</g-link>
        <p class="product__label">Label</p>
      </div>
      <g-image
        width="720"
        height="500"
        quality="100"
        position="center"
        class="placeholder"
        src="../assets/img/products/acquedotti/PeltonTurbine_details.webp"
      />
      <p class="product__description metal-bg">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea.
      </p>
    </section>

    <pageForm class="dark-bg" />
  </Metal>
</template>

<script>
import Metal from '~/layouts/Metal.vue';
import productDescription from "../components/productDescription.vue";
import otherInfo from "../components/otherInfo.vue";
import pageForm from "../components/pageForm.vue";
export default {
  components: { Metal, productDescription, otherInfo, pageForm },
  metaInfo: {
    title: "Turbine",
    description: "Turbine Pelton per acquedotti",
  },
  data() {
    return {
      page: {
        title: "Turbine Pelton per acquedotti",
        description:
          "La Energ-Tech è in grado di soddisfare esigente molto differenti con sistemi studiati appositamente sia nella tipologia della macchina che nell’automazione del sistema idraulico di gestione ed è in grado di fornire il supporto ingegneristico necessario allo studio delle migliori soluzioni per l’integrazione  della macchina nello specifico sistema acquedottistico. Per i sistemi con turbina Pelton in rete o in isola destinate a questi scopi, le strutture a contatto con l’acqua vengono realizzate principalmente in acciaio inox, e in applicazioni specifiche con materiali tecno-compositi ad alta resistenza per la realizzazione delle pale. Anche le movimentazioni sono affidate ad attuatori elettrici con assenza di rischi legati alla presenza di sostanze nocive alla potabilità dell’acqua. I sistemi di automazione, controllo e remotizzazione possono essere integrati attingendo al bagaglio culturale delle turbine prodotte dalla Energ-Tech.",
      },
    };
  },
};
</script>

<style scoped>

.dark-bg::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #424242;
  background-image: url(../assets/img/bg-metal.svg);
  color: var(--color-text);
  width: 150vw;
  height: 120%;
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover; /* Resize the background image to cover the entire container */
  z-index: -1000;
  overflow: visible;
}

.stripe-bottom {
  margin-top: -3px;
}

#icon {
  fill: var(--color-text);
}
</style>
