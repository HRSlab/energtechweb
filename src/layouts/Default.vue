<template>
  <div class="layout">
    <header class="header">
      <mainNav />
      <secondNav />
    </header>
    <carouselMain />
    <slot> </slot>
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
import carouselMain from "../components/carouselMain.vue";
import footerWeb from "../components/footerWeb.vue";

export default {
  components: { mainNav, secondNav, carouselMain, footerWeb },
};
</script>

<style>
.layout {
  max-width: 100vw;
  overflow: hidden;
}

.footer {
  position: relative;
  width: 100vw;
}
</style>
