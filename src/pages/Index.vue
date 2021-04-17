<template>
  <Layout>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1280 68.314">
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
  </Layout>
</template>

<script>
import productDescription from "../components/productDescription.vue";
import otherInfo from "../components/otherInfo.vue";

export default {
  components: { productDescription, otherInfo },

  metaInfo: {
    title: "Home Page",
  },
};
</script>

<style lang="css" scoped>

.divider {
 position: relative;
 width: 80%;
 height: 4px;
 margin: auto;
 background-color: var(--color-primary);
}

.title__container {
  display: grid;
  grid-template-columns: repeat(8, 1fr [col-start]);
  position: relative;
  max-width: 80vw;
  margin: 0 auto;
  padding: 8% 0;
}


.page__title {
  grid-column: 1 / span 3;
  justify-self: start;
  align-self: flex-start;
  margin: 0;
}

.text {
  grid-column: 4 / span 8;
  justify-self: start;
  align-self: stretch;
  margin: 0;
}

.product__container {
  display: grid;
  grid-template-columns: repeat(8, 1fr [col-start]);
  grid-template-rows: repeat(4, 1fr);
  position: relative;
  max-width: 80vw;
  margin: 0 auto;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  text-align: left;
  color: var(--color-tex);
}

.title__wrapper {
grid-column: 1;
  grid-row: 1;
  align-self: start;
  justify-self: start;
}


.product__category {
  padding: 0;
  margin: 0;
  font-size: 1.125rem;
  font-weight: 200;
  text-align: left;
  color: var(--color-tex);
}

.product__title {
  font-size: 2rem;
  text-align: left;
  font-weight: 400;
  color: var(--color-tex);
}


.product__label {
  font-size: 0.875rem;
  font-weight: 100;
  line-height: 1.29;
  text-transform: uppercase;
  text-align: left;
  color: #a4a4a4;
}


.placeholder {
  grid-column: 2 / span 7;
  grid-row: 1/ span 4;
  justify-self: end;
}


.product__description {
grid-column: 1;
grid-row: 2 / 4;
align-self: end;
justify-self: end;
  font-size: 0.875rem;
  font-weight: normal;
  line-height: 1;
  letter-spacing: normal;
  text-align: left;
  color: var(--color-tex);
}
</style>
