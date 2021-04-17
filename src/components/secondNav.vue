<template>
<div class="second__nav_container">
<svg id="stripes_top" data-name="stripes top" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 1280.199 141.443">
  <path id="top" d="M-4.2,34.385S99.479,37.142,588.757,32C1255.812,28.092,1276-81.972,1276-81.972V5.838l-17.725,1.856L949.84,40-4.2,38.785Z" transform="translate(4.199 81.972)" fill="#f90e12"/>
  <path id="middle" d="M4.557,24.676s18.39,1.584,588.148,0,691.852-71.429,691.852-71.429V36.775l-1280,8.471Z" transform="translate(-4.357 95.243)" fill="#00a8e8"/>
  <path id="bottom" d="M-4,1.723s26.685,1.07,590.2,0S1276-49.518,1276-49.518v56.1H-4Z" transform="translate(4.199 134.865)" fill="#0075bf"/>
</svg>
  <nav class="second__nav">
    <g-link class="second__nav__link" to="/">Category 1</g-link>
    <g-link class="second__nav__link" to="/about/">Category 2</g-link>
    <g-link class="second__nav__link" to="/about/">Category 3</g-link>
    <g-link class="second__nav__link" to="/about/">Category 4</g-link>
    <g-link class="second__nav__link" to="/about/">Category 5</g-link>
    <g-link class="second__nav__link" to="/about/">Category 6</g-link>
  </nav>

</div>
</template>

<script>
export default {
  name: "secondNav"

};
</script>


<style scoped>


.second__nav_container {
background-color: var(--color-bg-light);
display: grid;
position: absolute;
top: 0;
left: 0;
width: 100vw;
z-index: 900;
}


.second__nav  {
position: relative;
  display: flex;
background-color:  transparent;
  justify-content: center;
  align-items: center;
height: 64px;
width: 100%;
margin-top: -4px;
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
