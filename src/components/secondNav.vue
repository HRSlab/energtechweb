<template>
<div class="second__nav_container">
  <nav class="second__nav">
    <g-link class="second__nav__link" to="/acquedotti/">Acquedotti</g-link>
    <g-link class="second__nav__link" to="/category/">Category 2</g-link>
    <g-link class="second__nav__link" to="/category/">Category 3</g-link>
    <g-link class="second__nav__link" to="/category/">Category 4</g-link>
    <g-link class="second__nav__link" to="/category/">Category 5</g-link>
    <g-link class="second__nav__link" to="/category/">Category 6</g-link>
  </nav>

</div>
</template>

<script>

export default {
  name: "secondNav",

};
</script>


<style scoped>

.second__nav_container {
background-color: var(--color-bg-light);
display: flex;
position: relative;
width: 100vw;
z-index: 900;
}



.second__nav  {
position: relative;
  display: flex;
background-color:  transparent;
  justify-content: center;
  align-items: center;
width: 100%;
height: 48px;
border-bottom: 2px solid var(--color-primary);
}

.second__nav__link {
  padding: 0 20px;
  text-transform: uppercase;
  color: var(--color-primary);
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 200;
  text-decoration: none;
}

.second__nav__link:hover {
color: var(--color-secondary);
}

.second__nav__link:hover::before {
  content: ' ';
  position: absolute;
  margin-left: -6px;
  height: 20px;
  border-left: 2px solid var(--color-accent);
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 400;
  text-decoration: none;
  	-webkit-animation: scale-up-ver-top 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
	        animation: scale-up-ver-top 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
}

















</style>
