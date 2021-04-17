<template>
  <section class="nav__container">
    <g-image class="nav__logo" src="../assets/img/logo.png" width="250" />
    <nav class="main__nav">
      <g-link id="nav__link" to="/">Home</g-link>
      <g-link id="nav__link" to="/about/">Servizi</g-link>
      <g-link id="nav__link" to="/about/">Azienda</g-link>
    </nav>
    <div class="contacts">
      <a class="nav__contact" href="mailto:info@energ-tech.it"
        >info@energ-tech.it</a
      >
      <a class="nav__contact" href="tel:+390125750171">+39 0125 750171</a>
    </div>
  </section>
</template>

<script>
export default {
  name: "mainNav",
};
</script>

<style>

.nav__container {
  display: grid;
  grid-template-columns: auto 50% auto;
  grid-template-areas: "logo menu contact";
  background-color: transparent;
  height: 80px;
  max-width: 80vw;
  padding: 20px;
  align-items: center;
  z-index: 1000;
  position: relative;
}

.nav__logo {
  max-width: 150px;
  grid-area: logo;
  justify-self: stretch;
}

.main__nav {
  grid-area: menu;
  display: flex;
  justify-self: center;
  justify-items: center;
  align-items: center;
}

#nav__link {
  padding: 0 20px;
  text-transform: uppercase;
  color: var(--color-text);
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 400;
  text-decoration: none;
}

#nav__link:hover::before {
  content: " ";
  position: absolute;
  margin-left: -4px;
  height: 20px;
  border-left: 2px solid var(--color-accent);
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 400;
  text-decoration: none;
  -webkit-animation: scale-up-ver-top 0.4s cubic-bezier(0.39, 0.575, 0.565, 1)
    both;
  animation: scale-up-ver-top 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
}

.link__active:before {
  content: " ";
  position: absolute;
  margin-left: -4px;
  height: 20px;
  width: 50px;
  border-top: 2px solid var(--color-accent);
  -webkit-animation: scale-in-hor-left 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    alternate both;
  animation: scale-in-hor-left 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    alternate both;
}

.link__active:hover::before {
  content: " ";
  position: absolute;
  margin-left: -4px;
  height: 0;
  width: 0;
  -webkit-animation: scale-in-hor-left 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    alternate-reverse;
  animation: scale-in-hor-left 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    alternate-reverse;
}

.contacts {
  grid-area: contact;
  display: flex;
  justify-self: flex-start;
  justify-items: flex-start;
  align-items: flex-start;
}

.nav__contact {
  padding: 0 10px;
  color: var(--color-text);
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 400;
  text-decoration: none;
}
</style>
