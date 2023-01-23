<template>
  <nav>
    <!-- https://tailwindcomponents.com/component/responsive-navbar-with-dropdown -->
    <div class="w-full text-gray-700 bg-white dark-mode:text-gray-200 dark-mode:bg-gray-800">
      <div class="flex flex-col max-w-screen-xl mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
        <div :class="{'mb-6': !mobile_open}" v-on:click="mobile_open = !mobile_open" class="cursor-pointer mx-4 flex flex-row items-center justify-between md:hidden">
          <a href="#" class="no-underline px-0 text-lg font-semibold tracking-widest text-gray-900 uppercase dark-mode:text-white md:hidden focus:outline-none focus:shadow-outline">Menu</a> <!-- v-on:click="$event.target.blur()" -->
          <button class="md:hidden focus:outline-none focus:shadow-outline">
            <svg  fill="black" viewBox="0 0 20 20" class="w-6 h-6"> <!-- fill="currentColor" -->
              <!-- <path v-if="!mobile_open" fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clip-rule="evenodd"></path> -->
              <path v-if="!mobile_open" fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path>
              <path v-if="mobile_open" fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
            </svg>
          </button>
        </div>
        <nav :class="{'flex': mobile_open, 'hidden': !mobile_open}" class="mx-4 flex-col flex-grow mb-6 md:pb-0 md:flex md:justify-center md:flex-row md:space-x-4 > *">
          <!-- ORIGINAL LINKS -->
          <!-- <g-link class="px-4 py-2 mt-2 text-sm font-semibold text-gray-900 bg-gray-200 rounded-lg md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" to="/">Home</g-link>
          <g-link class="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" to="/music/">Music</g-link> -->

          <!-- CURRENT LINKS -->
          <g-link :class="{'text-gray-900 bg-gray-200': currentPage('/')}" class="no-underline rounded-sm hover:bg-gray-300 hover:no-underline px-4 py-2 mt-3 text-sm font-semibold bg-transparent md:mt-0 hover:text-gray-900 focus:text-gray-900 focus:bg-gray-200 focus:outline-none focus:shadow-outline" to="/">All Songs</g-link>
          <g-link :class="{'text-gray-900 bg-gray-200': currentPage('/short-demo/')}" class="no-underline rounded-sm hover:bg-gray-300 hover:no-underline px-4 py-2 mt-3 text-sm font-semibold bg-transparent md:mt-0 hover:text-gray-900 focus:text-gray-900 focus:bg-gray-200 focus:outline-none focus:shadow-outline" to="/short-demo/">Short Demo</g-link>
          <g-link :class="{'text-gray-900 bg-gray-200': currentPage('/light-demo/')}" class="no-underline rounded-sm hover:bg-gray-300 hover:no-underline px-4 py-2 mt-3 text-sm font-semibold bg-transparent md:mt-0 hover:text-gray-900 focus:text-gray-900 focus:bg-gray-200 focus:outline-none focus:shadow-outline" to="/light-demo/">Light Demo</g-link>   
          <g-link class="no-underline rounded-sm hover:bg-gray-300 hover:no-underline px-4 py-2 mt-3 text-sm font-semibold bg-transparent md:mt-0 hover:text-gray-900 focus:text-gray-900 focus:bg-gray-200 focus:outline-none focus:shadow-outline" to="https://bandcamp.com/contact?b=1631569890">Contact</g-link>

          <!-- DROPDOWN -->
          <!-- <div v-on-clickaway="dropdown_closed" class="relative">
            <button v-on:click="dropdown_open = !dropdown_open" class="flex flex-row items-center w-full px-4 py-2 mt-2 text-sm font-semibold text-left bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:focus:bg-gray-600 dark-mode:hover:bg-gray-600 md:w-auto md:inline md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline">
              <span>Dropdown</span>
              <svg fill="currentColor" viewBox="0 0 20 20" :class="{'rotate-180': dropdown_open, 'rotate-0': !dropdown_open}" class="inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform md:-mt-1"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </button>
            <transition
                enter-active-class="transition duration-100 ease-out"
                leave-active-class="transition duration-75 ease-in"
                enter-class="transform opacity-0 scale-95"
                enter-to-class="transform opacity-100 scale-100"
                leave-class="transform opacity-100 scale-100"
                leave-to-class="transform opacity-0 scale-95"
            >
              <div v-if="dropdown_open" class="absolute right-0 w-full mt-2 mb-5 origin-top-right rounded-md shadow-lg md:w-48">
                <div class="px-2 py-2 bg-white rounded-md shadow dark-mode:bg-gray-800">
                  <a class="block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="#">Link #1</a>
                  <a class="block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="#">Link #2</a>
                  <a class="block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="#">Link #3</a>
                </div>
              </div>
            </transition>
          </div> -->
        </nav>
      </div>
    </div>
  </nav>
</template>

<script>
import { mixin as clickaway } from 'vue-clickaway';

export default {
  mixins: [ clickaway ],
  data() {
    return {
      dropdown_open: false,
      mobile_open: false
    }
  },
  methods: {
    dropdown_closed () {
      this.dropdown_open = false
    },
    currentPage (nav_url) {
      if (this.$route.path == nav_url) {
        return true
      }
    }
  }
}
</script>