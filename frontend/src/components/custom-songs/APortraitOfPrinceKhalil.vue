<template>
  <div>
    <h1>A Portrait of Prince Khalil</h1>
    <p>I can do whatever I want here anytime I want to</p>
    <p>{{ data }}</p>
  </div>
</template>

<script>
  export default {
    props: ['data']
  }
</script>