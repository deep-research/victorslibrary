<template>
  <div class="layout flex flex-col h-screen justify-between">
    <div class="mb-auto">
      <header class="header">
        <div class="text-center my-5">
          <g-link to="/" id="title" class="text-3xl sm:text-5xl transition-all duration-100 ease-linear sm:title hover:no-underline">{{ $static.metadata.siteName }}</g-link>
          <p id="subtitle" class="font-bold text-sm mb-5">{{ $static.metadata.siteDescription }}</p>
        </div>
        <Navbar />
      </header>
      <div class="lg:flex lg:flex-row lg:justify-between md:mt-5">
        <div id="slot-container" class="md:mx-16 mb-5 lg:mb-0 lg:flex-grow mx-10 lg:mr-8 lg:ml-16"> <!-- bg-blue-100 -->
          <slot />
        </div>
        <div id="sidebar" class="mx-10 md:mx-16 lg:ml-8 lg:mr-16"> <!-- bg-purple-100 -->
          <p class="border border-black w-56 pt-2 pb-3 pl-4 mb-5 italic font-sans">This website is currently in development.</p>
          <div class="my-5">
            <h2>Recent Posts</h2>
            <ul>
              <li>The Philosophical and Spiritual Value of Music</li>
              <li>She Likes It Heavy Review</li>
              <li>Chicago Doom Confederacy Review</li>
              <li>The Spirit of the Band</li>
              <li>About</li>
            </ul>
          </div>
          <div class="mb-5">
            <h2>Categories</h2>
            <ul>
              <li><span >December 2019</span> (1)</li>
              <li><span >November 2019</span> (1)</li>
              <li><span >October 2019</span> (1)</li>
              <li><span >September 2019</span> (12)</li>
              <li><span >December 2018</span> (1)</li>
            </ul>
          </div>
          <div>
            <h2>Links</h2>
            <ul>
              <li>Bandcamp</li>
              <li>Twitter</li>
              <li>Facebook</li>
              <li>Instagram</li>
              <li>YouTube</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <footer class="w-full text-center py-5">© {{ new Date().getFullYear() }} Victor Fisher</footer>
    <!-- <footer class="fixed bottom-0 w-full text-center my-5">© {{ new Date().getFullYear() }} Victor Fisher</footer> -->
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'

export default {
  components: {
    Navbar
  }
}
</script>

<static-query>
query {
  metadata {
    siteName
    siteDescription
  }
}
</static-query>

<style>
@import './default.css';

#title {
  font-family: 'Merienda One', Merriweather, lato,'helvetica neue', helvetica, arial;
}

#subtitle {
  font-family: 'Gilda Display', lato,'helvetica neue', helvetica, arial;
}

p {
  font-family: 'Amiko','lato', lato, 'helvetica neue', helvetica, arial, sans-serif;
}

@media (min-width: 640px) {
  #subtitle {
    font-size: 22px;
  }
}

@media (min-width: 1024px) {
  #sidebar {
    width: 20rem;
  }
}

#slot-container:empty {
  margin-bottom: 0;
}

/* a:focus, button:focus, input:focus, select:focus {
   outline: 0 !important
} */

a:focus, button:focus, input:focus, select:focus {
  box-shadow: 0 0 0 2px black;
  -webkit-box-shadow: 0 0 0 2px black;
	-moz-box-shadow: 0 0 0 2px black;
  border-radius: 0px;
  outline: 2px;
  transition-property: all;	
  transition-duration: 100ms;
  transition-timing-function: linear;	
}

a, button, input, select {
 padding: 2px;
}

audio:focus {
  box-shadow: 0 0 0 2px black;
  -webkit-box-shadow: 0 0 0 2px black;
	-moz-box-shadow: 0 0 0 2px black;
  border-radius: 0px;
  outline: 2px;
  transition-property: all;	
  transition-duration: 100ms;
  transition-timing-function: linear;	
}

/* body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
}

.layout {
  max-width: 760px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
}

.nav__link {
  margin-left: 20px;
} */
</style>
