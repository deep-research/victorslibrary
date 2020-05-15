<template>
  <div id="app">
    <SiteTitle />
  </div>
</template>

<script>
import SiteTitle from './components/SiteTitle.vue'

export default {
  name: 'App',
  components: {
    SiteTitle  
  }
}
</script>

<style>
  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    margin: 0;
  }
</style>
