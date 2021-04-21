<template>
  <section class="top_stripes">
    <svg
      id="stripes_top"
      data-name="stripes top"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1280.199 140.49"
    >
      <path
        id="top"
        d="M-4.2,34.385S99.479,37.142,588.757,32C1255.812,28.092,1276-81.972,1276-81.972V5.838l-17.725,1.856L949.84,40-4.2,38.785Z"
        transform="translate(4.199 81.972)"
        fill="#f90e12"
      />
      <path
        id="middle"
        d="M4.557,24.676s18.39,1.584,588.148,0,691.852-71.429,691.852-71.429V36.775l-1280,8.471Z"
        transform="translate(-4.357 95.243)"
        fill="#00a8e8"
      />
      <path
        id="bottom"
        d="M-4,1.723s26.685,1.07,590.2,0S1276-49.518,1276-49.518v56.1H-4Z"
        transform="translate(4.199 130.865)"
        fill="#0075bf"
      />
    </svg>
  </section>
</template>

<script>
export default {
  name: "topStripes",
};
</script>

<style scoped>

.top_stripes {
display: inline;
position: absolute;
top: 0;
left: 0;
width: 100vw;
z-index: -900;
}
</style>
