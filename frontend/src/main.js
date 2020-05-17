// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import Vue from 'vue'
import VueMarkdown from 'vue-markdown'
import VuePlyr from 'vue-plyr'
// Stop All Vue Warnings:
// Vue.config.silent = true

Vue.component('VueMarkdown', VueMarkdown);

new Vue({
  components: {
    VueMarkdown
  }
})

Vue.use(VuePlyr, {
  plyr: {
    fullscreen: { enabled: true },
    settings: [],
    resetOnEnd: false,
    invertTime: true,
    controls: 
      ['play-large', 'play', 'progress', 'current-time',
      'mute', 'volume', 'fullscreen']
  },
  emit: ['ended']
})

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}
