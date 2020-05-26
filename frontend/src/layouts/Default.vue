<template>
  <div class="layout flex flex-col h-screen justify-between">
    <div class="mb-auto mx-10">
      <header class="header">
        <div class="text-center my-5">
          <g-link to="/" class="font-title text-3xl sm:text-5xl transition-all duration-100 ease-linear sm:title">{{ $static.metadata.siteName }}</g-link>
          <p class="font-subtitle font-bold text-sm subtitle">{{ $static.metadata.siteDescription }}</p>
        </div>
        <Navbar />
      </header>
      <div class="lg:flex lg:flex-row lg:justify-between mt-3">
        <div class="lg:flex-grow lg:px-3"> <!-- bg-blue-100 -->
          <slot />
        </div>
        <div class="sidebar lg:px-3 mt-8 lg:mt-0"> <!-- bg-purple-100 -->
          <p class="hidden lg:inline-flex lg:italic md:border lg:border-black lg:rounded-md lg:p-2 lg:pb-3 lg:pl-3">This website is currently in development.</p>
          <p><span class="italic border border-black rounded-md p-2 pb-3 pl-3 lg:hidden">This website is currently in development.</span></p>
          <br />
          <h1 class="font-bold">Recent Posts</h1>
          <p class="hover:underline">The Philosophical and Spiritual Value of Music</p>
          <p class="hover:underline">She Likes It Heavy Review</p>
          <p class="hover:underline">Chicago Doom Confederacy Review</p>
          <p class="hover:underline">The Spirit of the Band</p>
          <p class="hover:underline">About</p>
          <br />
          <h1 class="font-bold">Categories</h1>
          <p><span class="hover:underline">December 2019</span> (1)</p>
          <p><span class="hover:underline">November 2019</span> (1)</p>
          <p><span class="hover:underline">October 2019</span> (1)</p>
          <p><span class="hover:underline">September 2019</span> (12)</p>
          <p><span class="hover:underline">December 2018</span> (1)</p>
          <br />
          <h1 class="font-bold">Links</h1>
          <p class="hover:underline">Bandcamp</p>
          <p class="hover:underline">Twitter</p>
          <p class="hover:underline">Facebook</p>
          <p class="hover:underline">Instagram</p>
          <p class="hover:underline">YouTube</p>
        </div>
      </div>
    </div>
    <footer class="w-full text-center py-4">© {{ new Date().getFullYear() }} Victor Fisher</footer>
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
@media (min-width: 640px) {
  .subtitle {
    font-size: 22px;
  }
}

@media (min-width: 1024px) {
  .sidebar {
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
