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
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
  }

  body {
    margin: 0;
  }
</style>
