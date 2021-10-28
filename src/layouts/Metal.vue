<template>
  <div class="metal_bg">
      <header class="header">
    <stripesTop style="z-index: 999;" />
      <mainNav  />
      <secondNav style="background: transparent;" />
    </header>
    <slot class="metal_theme"> </slot>
  <footer class="footer">
    <footerWeb />
   </footer>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import mainNav from "../components/mainNav.vue";
import secondNav from "../components/secondNav.vue";
import footerWeb from "../components/footerWeb.vue";
import stripesTop from "../components/stripesTop.vue"

export default {
  components: { mainNav, secondNav, footerWeb, stripesTop },
};
</script>

<style>

.header {
  z-index: 99999;
}

.metal_bg {
  max-width: 100vw;
  overflow: hidden;
  background: #dadada98;
  background-image: url(../assets/img/mbg.jpg);
  background-position: top; /* Center the image */
  background-repeat: repeat; /* Do not repeat the image */
  background-size: 100%; /* Resize the background image to cover the entire container */
  background-blend-mode: overlay;
}

/*
.metal_bg::after {
  content: " ";
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #424242;
  background-image: url(../assets/img/mbg.jpg);
  color: var(--color-text);
  width: 100vw;
  height: 100%;
  background-position: center; /* Center the image
background-repeat: no-repeat; /* Do not repeat the image
 background-size: cover; /* Resize the background image to cover the entire container
 z-index: -1;
}
*/


.footer {
  position: relative;
  width: 100vw;
}
</style>
