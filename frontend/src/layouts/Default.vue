<template>
  <div class="layout flex flex-col h-screen justify-between">
    <div class="mb-auto">
      <header class="header">
        <div class="text-center my-5">
          <g-link to="/" id="title" class="text-3xl sm:text-5xl transition-all duration-100 ease-linear sm:title">{{ $static.metadata.siteName }}</g-link>
          <p id="subtitle" class="font-bold text-sm">{{ $static.metadata.siteDescription }}</p>
        </div>
        <Navbar />
      </header>
      <div class="lg:flex lg:flex-row lg:justify-between md:mt-5">
        <div class="mb-5 lg:mb-0 lg:flex-grow lg:px-3 mx-10 lg:ml-10 lg:mr-5"> <!-- bg-blue-100 -->
          <slot />
        </div>
        <div class="sidebar lg:px-3 mx-10 lg:mr-10 lg:ml-5"> <!-- bg-purple-100 -->
          <p class="border border-black w-56 pt-2 pb-3 pl-4 mb-5 italic">This website is currently in development.</p>
          <div class="mb-5">
            <h1 class="font-bold">Recent Posts</h1>
            <p>The Philosophical and Spiritual Value of Music</p>
            <p>She Likes It Heavy Review</p>
            <p>Chicago Doom Confederacy Review</p>
            <p>The Spirit of the Band</p>
            <p>About</p>
          </div>
          <div class="mb-5">
            <h1 class="font-bold">Categories</h1>
            <p><span >December 2019</span> (1)</p>
            <p><span >November 2019</span> (1)</p>
            <p><span >October 2019</span> (1)</p>
            <p><span >September 2019</span> (12)</p>
            <p><span >December 2018</span> (1)</p>
          </div>
          <div>
            <h1 class="font-bold">Links</h1>
            <p>Bandcamp</p>
            <p>Twitter</p>
            <p>Facebook</p>
            <p>Instagram</p>
            <p>YouTube</p>
          </div>
        </div>
      </div>
    </div>
    <footer class="w-full text-center pb-4 pt-4">© {{ new Date().getFullYear() }} Victor Fisher</footer>
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
#title {
  font-family: 'Merienda One', cursive;
}

#subtitle {
  font-family: 'Gilda Display', serif;
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
