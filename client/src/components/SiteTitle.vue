<template>
  <div class="site-title">
    <p id="title">
      <a href="/">
        Victor's Library
      </a>
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
    margin: 20px;
    text-align: center;
    font-family: Lato,'helvetica neue',helvetica,arial;
  }

  a {
    color: black;
    text-decoration: none;
  }

  @media only screen and (max-width: 700px) {
    #title {
      outline: 0;
      transition: all .1s linear;
      /* transition-property: all;
      transition-duration: 0.1s;
      transition-timing-function: linear;
      transition-delay: 0s; */
      font-size: 29px;
    }

    #subtitle {
      font-size: 14px;
      margin: 0;
    }

    .site-title {
      margin: 0;
      padding: 25px 0 25px 0;
    }

    #title {
      margin-bottom: 2px;
      white-space: nowrap;
    }
  }
</style>
