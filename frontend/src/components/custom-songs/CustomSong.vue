<template>
  <div>
    <!-- Add the file name without .vue to custom in the database -->
    <h1>A Plastic Paradise</h1>
    <p>I can do whatever I want here</p>
    <p>{{ data }}</p>
  </div>
</template>

<script>
  export default {
    props: ['data']
  }
</script>