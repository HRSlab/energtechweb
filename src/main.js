// This is the main.js file. Import global CSS and scripts here.
import '~/assets/styles.css'




// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import VueCarousel from 'vue-carousel';



export default function (Vue, { router, head, isClient }) {

  // External CSS files
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Roboto'
  })

    // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

     // Set VueCarousel Globally
  Vue.use(VueCarousel);

}
