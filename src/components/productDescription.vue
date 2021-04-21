<template>
    <section class="product__container">
      <div class="title__wrapper">
        <p class="product__category">Category</p>
        <g-link href="#" class="product__title">Product
Title Link</g-link>
        <p class="product__label">label</p>
      </div>
      <g-image class="placeholder" src="../assets/img/placeholder.svg" />
      <p class="product__description">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea.
      </p>
    </section>
</template>

<script>
export default {
  name: "prodDescription"

};
</script>


<style scoped>

.product__container {
  display: grid;
  grid-template-columns: repeat(8, 1fr [col-start]);
  grid-template-rows: repeat(3, 1fr);
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
  grid-row: 1 / 3;
  justify-self: end;
}


.product__description {
grid-column: 1;
grid-row: 2;
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
