<template>
  <div class="site-title">
    <p id="title">
      Victor's Library
    </p>
    <div id="subtitle">
      Research on Music and Religion
    </div>  
  </div>
</template>

<script>
export default {
  name: 'SiteTitle'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import
    url('https://fonts.googleapis.com/css2?family=Gilda+Display&family=Merienda+One&display=swap');

  #title { 
    font-family: 'Merienda One', cursive;
    font-size: 48px;
    line-height: 150%;
    margin: 0;
  }

  #subtitle {
    font-family: 'Gilda Display', serif;
    font-weight: 600;
    font-size: 22px;
  }

  .site-title {
    margin-bottom: 40px;
    margin-top: 40px;
  }

  @media only screen and (max-width: 700px) {
    #title {
      outline: 0;
      transition: all .1s linear;
      transition-property: all;
      transition-duration: 0.1s;
      transition-timing-function: linear;
      transition-delay: 0s;
      font-size: 29px;
    }
    #subtitle {
      font-size: 14px;
    }
  }
</style>
