<template>
  <Layout>
<div>

<g-image
class="hero__img"
width="1440"
height="600"
fit="contain"
src="../assets/img/placeholder.svg" />
</div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1280 68.314">
      <path
        id="stripe-bottom"
        d="M1276-44.663s-26.685-1.07-590.2,0S-4,18.8-4,18.8V-49.518H1276Z"
        transform="translate(4 49.518)"
        fill="#0075bf"
      />
    </svg>
<div>
</div>
<section class="title__container">
      <h1 class="page__title">{{ page.title }}</h1>
      <p class="text">{{ page.description }}
      </p>
    </section>


    <pageForm />
  </Layout>
</template>

<script>
import productDescription from "../components/productDescription.vue";
import otherInfo from "../components/otherInfo.vue";
import pageForm from "../components/pageForm.vue";

export default {
  components: { productDescription, otherInfo, pageForm },
  metaInfo: {
    title: "Azienda",
    description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. "
  },
  data() {
    return {
      page: {
        title:  "Azienda",
        description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. ",
      },

      slides: [
        {
          id: 1,
          title: "HYD080",
          img: "",
          link: "https://gridsome.org/docs/linking/#link-between-pages"

        },
             {
          id: 2,
          title: "HYD600",
          img: "",
          link: "https://gridsome.org/docs/linking/#link-between-pages"
        },
      ],

      properties: {
      scrollPerPage: true,
      perPageCustom: [
        [320, 2], [1280, 3], [11440, 4]
        ],
      navigationEnabled: true,
      autoplay: true,
      loop: true,
      centerMode: true,
      speed: 1500,
      paginationActiveColor: "#0075bf"
      },

      infos: [
        {
          title: "Certificate",
          subtitle: "DM 174/2004",
          description: "Le turbine per uso acquedottistico rientrano nelle specifiche normate dal DM 174/2004 sui materiali impiegabili a contatto con acqua ad uso potabile e alimentare.",
        },
        {
          title: "Garanzia",
          subtitle: "Continuità del servizio",
          description: "I sistemi idraulici e di automazione implementati in questo tipo di impianti vengono inoltre studiati in modo da garantire la continuità del servizio in qualsiasi condizione di lavoro della turbina.",
        },
        {
          title: "In isola o In rete",
          subtitle: "A partire da 80Watt",
          description: "La Energ-Tech produce questa tipologia di turbine sia per sistemi con immissione dell’energia prodotta nella rete di distribuzione, sia per sistemi in isola a partire da pico-impianti di 80 Watt per l’alimentazione di piccoli utilizzatori in loco.",
        },
      ],
    };
  },
};
</script>

<style scoped>




</style>