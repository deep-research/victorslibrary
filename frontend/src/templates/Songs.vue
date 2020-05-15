<template>
  <Layout>
    <div v-if="$page.strapiSongs.custom">
      <component :is="customPage" v-bind:data="$page.strapiSongs" />
    </div>
    <div v-else>
      <h1 v-html="$page.strapiSongs.title" />
      <h3>
        <g-link to="/music/"
        style="text-decoration: none; color: black">
        Go to Library
        </g-link>
      </h3>
      <p v-if="$page.strapiSongs.explicit">⚠️ Warning: Contains explicit content.</p>
      <h2>Description:</h2>
      <VueMarkdown>{{ $page.strapiSongs.description }}</VueMarkdown>
      <h2 v-if="$page.strapiSongs.recordings.length > 0">{{ recordingPlural }}</h2>
      <div v-for="(recording, recordingCounter ) in recordingData" :key="recordingCounter">
        <h3>{{ recordingCounter = recordingCounter + 1 }}. {{ recording.title }}</h3>
        <audio controls>
          <source :src="recording.url" type="audio/mpeg">
          Your browser does not support the audio element.
        </audio>
      </div>
      <h2 v-if="$page.strapiSongs.lyrics">Lyrics:</h2>
      <VueMarkdown>{{ $page.strapiSongs.lyrics }}</VueMarkdown>
      <h2>Credits:</h2>
      <VueMarkdown>{{ $page.strapiSongs.credits }}</VueMarkdown>
      <br />
    </div>
  </Layout>
</Template> 

<page-query>
query ($id: ID!) {
  strapiSongs(id: $id) {
    title
    lyrics
    explicit
    credits
    description
    custom
    recordings {
      id
      title
      index
      url
    }
  }
}
</page-query>

<script>
export default {
  computed: {
    customPage () {
        return () => import(`~/components/custom-songs/${this.$page.strapiSongs.custom}.vue`)
    }
  },
  data () {
    return {
      recordingData: [],
      recordingPlural: "Recording:"
    }
  },
  created () {
    this.fetchData()
  },
  methods: {
    // Vue Router Data Fetching
    fetchData() {
      this.recordingData = this.$page.strapiSongs.recordings
      this.recordingData.sort((a, b) => a.index - b.index)
      if (this.recordingData.length > 1) {
        this.recordingPlural = "Recordings:"
      }
    }
  }
}
</script>