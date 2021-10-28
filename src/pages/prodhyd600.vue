<template>
  <Metal>
      <g-image
        class="hero__img"
        width="1440"
        height="600"
        fit="contain"
        background="white"
        quality="100"
        src="../assets/img/products/acquedotti/HYDN61.webp"
      />

      <svg
        class="stripe-bottom"
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
      <section class="title__container nobg">
        <h1 class="page__title">{{ page.title }}</h1>
        <p class="text">{{ page.description }}</p>
      </section>

      <section class="info__container">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="34.435"
          viewBox="0 0 40 34.435"
        >
          <path
            id="icon"
            data-name="Icon awesome-ravelry"
            d="M31.835,3.692c-5.923-3.079-11.69-2.383-17.543.352a2.874,2.874,0,0,0-1.555,1.485,17.193,17.193,0,0,0-1.555,4.118A16.013,16.013,0,0,0,7.8,16.671,12.628,12.628,0,0,0,5.993,22.25s-.055.594-.039.617A20.591,20.591,0,0,1,0,20.758c.711,1.133,4.79,2.524,5.962,2.962,0,0,.133,7.658,5.04,10.252-.883-1.344-1.039-1.578-1.039-1.578S7.408,27.72,7.845,24.259c.055,0,.117.016.172.016A16.007,16.007,0,0,0,23.4,36.1c.484,0,.946-.016,1.407-.055a7.112,7.112,0,0,0,3.133-.3,6.31,6.31,0,0,0,1.578-.844c5.486-3.055,7.884-6.408,9.619-11.541a19.568,19.568,0,0,0,.766-4.079A15.539,15.539,0,0,0,31.835,3.692ZM10.846,11.639a12.242,12.242,0,0,0-.055,1.539,11.448,11.448,0,0,0-1.422,1.3,15.572,15.572,0,0,1,1.477-2.844ZM8.408,21.164a9.251,9.251,0,0,1,2.329-4.306A28.8,28.8,0,0,0,11.971,23.9L8.736,23.36a13.652,13.652,0,0,1-.328-2.2Zm.617,3.344c1.156.25,2.657.594,3.368.711,2.133,6,8.463,9.713,8.463,9.713a1.154,1.154,0,0,0,.211.078,15.143,15.143,0,0,1-12.042-10.5Zm21.137,9.08a10.638,10.638,0,0,1-5.056.289s-7.119-1.805-9.963-8.424a31.253,31.253,0,0,0,6.1-.3,32.291,32.291,0,0,0,8.986-2.579c.922-.422.867-1.516.75-2.329-.156-1-.867-.946-1.672-.367a25.916,25.916,0,0,1-14.831,4.2c-1.461-2.5-2.094-8.658-2.094-8.658,3.235-2.751,6.5-4.657,13.159-4.095.016-.5.234-2.118-1.594-2.2,0,0-7.306-.867-11.409,2.618A10.034,10.034,0,0,1,13.4,8.662,14.912,14.912,0,0,1,23.427,4.794a15.218,15.218,0,0,1,6.736,28.8Z"
            transform="translate(0 -1.67)"
          />
        </svg>
        <div class="info__wrapper">
          <h4 class="info__title">Che Cos’è</h4>
          <p class="info__subtitle"></p>
        </div>
        <p class="info__description">
          Studiato per la ricarica di batterie a 24Vcc (modHYD6N1) o 48Vcc
          (modHYD6N2) da 80Ah a 400Ah. E’ I’ ideale per I’ alimentazione di case
          isolate. E’ costruito con materiali adatti al contatto con l’acqua
          potabile e conforme alle norme CE. Può essere utilizzato in
          abbinamento ad un impianto fotovoltaico preesistente.
        </p>
      </section>
      <section class="info__container">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="34.435"
          viewBox="0 0 40 34.435"
        >
          <path
            id="icon"
            data-name="Icon awesome-ravelry"
            d="M31.835,3.692c-5.923-3.079-11.69-2.383-17.543.352a2.874,2.874,0,0,0-1.555,1.485,17.193,17.193,0,0,0-1.555,4.118A16.013,16.013,0,0,0,7.8,16.671,12.628,12.628,0,0,0,5.993,22.25s-.055.594-.039.617A20.591,20.591,0,0,1,0,20.758c.711,1.133,4.79,2.524,5.962,2.962,0,0,.133,7.658,5.04,10.252-.883-1.344-1.039-1.578-1.039-1.578S7.408,27.72,7.845,24.259c.055,0,.117.016.172.016A16.007,16.007,0,0,0,23.4,36.1c.484,0,.946-.016,1.407-.055a7.112,7.112,0,0,0,3.133-.3,6.31,6.31,0,0,0,1.578-.844c5.486-3.055,7.884-6.408,9.619-11.541a19.568,19.568,0,0,0,.766-4.079A15.539,15.539,0,0,0,31.835,3.692ZM10.846,11.639a12.242,12.242,0,0,0-.055,1.539,11.448,11.448,0,0,0-1.422,1.3,15.572,15.572,0,0,1,1.477-2.844ZM8.408,21.164a9.251,9.251,0,0,1,2.329-4.306A28.8,28.8,0,0,0,11.971,23.9L8.736,23.36a13.652,13.652,0,0,1-.328-2.2Zm.617,3.344c1.156.25,2.657.594,3.368.711,2.133,6,8.463,9.713,8.463,9.713a1.154,1.154,0,0,0,.211.078,15.143,15.143,0,0,1-12.042-10.5Zm21.137,9.08a10.638,10.638,0,0,1-5.056.289s-7.119-1.805-9.963-8.424a31.253,31.253,0,0,0,6.1-.3,32.291,32.291,0,0,0,8.986-2.579c.922-.422.867-1.516.75-2.329-.156-1-.867-.946-1.672-.367a25.916,25.916,0,0,1-14.831,4.2c-1.461-2.5-2.094-8.658-2.094-8.658,3.235-2.751,6.5-4.657,13.159-4.095.016-.5.234-2.118-1.594-2.2,0,0-7.306-.867-11.409,2.618A10.034,10.034,0,0,1,13.4,8.662,14.912,14.912,0,0,1,23.427,4.794a15.218,15.218,0,0,1,6.736,28.8Z"
            transform="translate(0 -1.67)"
          />
        </svg>
        <div class="info__wrapper">
          <h4 class="info__title">Come Funziona</h4>
          <p class="info__subtitle"></p>
        </div>
        <p class="info__description">
          Il microgeneratore idroelettrico è azionato dalla pressione presente
          nella condotta (diametro minimo di 50 mm). L’acqua fa ruotare una
          turbina collegata ad un generatore elettrico che carica due batterie
          esterne tramite un regolatore di carica elettronico. Quando le
          batterie raggiungono il livello di fine carica il controllo
          elettronico invierà l’energia in eccesso su una resistenza zavorra
          (non fornita) che dovrà essere connessa al regolatore di carica. Sul
          regolatore il led verde indica che generatore elettrico è in funzione
          ed il led rosso che la batteria è scarica.
        </p>
      </section>
      <section class="product__container">
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
          src="../assets/img/products/acquedotti/HYD6N1_details.webp"
        />
        <p class="product__description">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea.
        </p>
      </section>
      <pageForm />
  </Metal>
</template>

<script>
import Metal from '~/layouts/Metal.vue'
import carouselMain from "../components/carouselMain.vue";
import productDescription from "../components/productDescription.vue";
import otherInfo from "../components/otherInfo.vue";
import pageForm from "../components/pageForm.vue";
export default {
  components: { Metal, productDescription, otherInfo, carouselMain, pageForm },
  metaInfo: {
    title: "HYD080",
    description:
      "E’ un generatore di energia elettrica azionato dall’acqua di un normale acquedotto.",
  },
  data() {
    return {
      page: {
        title: "HYD600",
        description:
          "E’ un generatore di energia elettrica azionato dall’acqua di un normale acquedotto.",
      },
    };
  },
};
</script>


<style scoped>

.nobg {
 background-color: transparent !important;
}


.stripe-bottom {
  margin-top: -3px;
}

#icon {
  fill: var(--color-text);
}
</style>
