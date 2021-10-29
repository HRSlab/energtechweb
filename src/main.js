// This is the main.js file. Import global CSS and scripts here.
import '~/assets/styles.css'
import '~/assets/mobile.css'

// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue';



export default function(Vue, { head, router, isServer }) {

    // Add attributes to HTML tag
    head.htmlAttrs = [
        { lang: 'it' },
        {
            name: "viewport",
            content: "width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no"
        },
        {
            httpequiv: "X-UA-Compatible",
            content: "IE=edge,chrome=1",
        },
        {
            name: "HandheldFriendly",
            content: "true"
        },
    ]



    // Set default layout as a global component
    Vue.component('Layout', DefaultLayout)

    // Use VueSlickCarousel as a global component


    // External CSS files
    head.link.push({
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Roboto'
    })


}