// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import VueMarkdown from 'vue-markdown'
import vueUrlParameters from 'vue-url-parameters'
require('typeface-merienda-one')
require('typeface-gilda-display')
require('typeface-merriweather')
require('typeface-amiko')
require('typeface-lato')
// Stop All Vue Warnings:
// Vue.config.silent = true

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

  Vue.component('VueMarkdown', VueMarkdown)
  Vue.mixin(vueUrlParameters)
}
