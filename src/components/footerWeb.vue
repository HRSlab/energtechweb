<template>
<section class="footer__container">
<span class="divider__full"></span>
<h1 class="footer__title">Energtech s.r.l.</h1>
<div class="footer__col_one">
<h4 class="links_title">Prodotti</h4>
<ul class="footer__links">
<li><g-link hrf="#">Acquedotti</g-link></li>
<li><g-link hrf="#">Category Link</g-link></li>
<li><g-link hrf="#">Category Link</g-link></li>
<li><g-link hrf="#">Category Link</g-link></li>
<li><g-link hrf="#">Category Link</g-link></li>
</ul>
</div>
<div class="footer__col_two">
<h4 class="links_title">Servizi</h4>
<ul class="footer__links">
<li><g-link hrf="#">Progettazione</g-link></li>
<li><g-link hrf="#">Manutenzione</g-link></li>
<li><g-link hrf="#">Collaudo</g-link></li>
</ul>
</div>
<div class="footer__col_three">
<h4 class="links_title">Azienda</h4>
<ul class="footer__links">
<li><g-link hrf="#">Chi Siamo</g-link></li>
<li><g-link hrf="#">Privacy Policy</g-link></li>
<li><g-link hrf="#">Certificazioni</g-link></li>
<li><g-link hrf="#">Premi e Riconoscimenti</g-link></li>
<li><g-link hrf="#">Press Office</g-link></li>
</ul>
</div>
<div class="footer__col_four">
<h4 class="links_title">Contatti</h4>
<ul class="footer__links">
<li><g-link hrf="#">Telefono: +39 0125 750171</g-link></li>
<li><g-link hrf="#">Fax: +39 0125 750171</g-link></li>
<li><g-link hrf="#">info@energ-tech.it</g-link></li>
<li><g-link hrf="#">commerciale@energ-tech.it</g-link></li>
<li><g-link hrf="#">amministrazione@energ-tech.it</g-link></li>
</ul>
</div>
<p class="copyrights">© 2021 Energ-Tech s.r.l.</p>
<p class="address">Via San Rocco, 9 10010 Quassolo (TO) - Italy</p>
</section>
</template>


<script>
export default {
  name: "footerWeb",
};
</script>


<style scoped>

.footer__container .divider__full {
position: absolute;
top: 0;
left: 0;
}


.footer__container {
display: grid;
grid-template-columns: repeat(4, 20vw);
grid-template-rows: repeat(3, 1fr);
  min-width: 100vw;
  height: 50vh;
  margin: 0 auto;
  padding: 4% 10%;
background-color: var(--color-bg-dark);
color: #f7f7f7;

}

.footer__title {
grid-column: 1 / span 2;
  grid-row: 1;
  align-self: start;
  justify-self: start;
  font-weight: 200;
  font-size: 44px;
  line-height: 0.59;
  text-align: center;
  color: #f7f7f7;
}


.footer__col_one {
grid-column: 1;
grid-row: 2;
}

.footer__col_two {
grid-column: 2;
grid-row: 2;
}

.footer__col_three {
grid-column: 3;
grid-row: 2;
}

.footer__col_four {
grid-column: 4;
grid-row: 2;
}

ul {
list-style: none; /* Remove list bullets */
padding: 0;
margin: 0;
}

.footer__links * {
  color: #f7f7f7;
  font-weight: 100;
  text-decoration: none;
  line-height: 1.5;
}

.copyrights {
  font-size: 14px;
  grid-column: 1 / span 2;
  grid-row: 4;
  place-self: start;
  font-weight: 100;
  color: #f7f7f77c;
}

.address {
font-size: 14px;
font-weight: 100;
color: #f7f7f77c;
place-self: end;
grid-column: 2 / span 3;
grid-row: 4;
}

</style>