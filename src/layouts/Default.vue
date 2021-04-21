<template>
  <div class="layout">
    <header class="header">
    <stripesTop />
      <mainNav />
      <secondNav />
    </header>
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
import footerWeb from "../components/footerWeb.vue";
import stripesTop from "../components/stripesTop.vue"

export default {
  components: { mainNav, secondNav, footerWeb, stripesTop },
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
