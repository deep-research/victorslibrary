<template>
  <Layout>
    <div v-if="$page.strapiSongs.custom">
      <component :is="customPage" v-bind:data="$page.strapiSongs" />
    </div>
    
    <div v-else>
      <h1 v-html="$page.strapiSongs.title" />
      <h3>
        <g-link to="/music/">Music by Reenchantment</g-link> <!-- style="text-decoration: none; color: black" -->
      </h3>
      
      <p v-if="$page.strapiSongs.explicit">⚠️ Warning: Contains explicit content.</p>
      
      <h2>Description:</h2>
      <VueMarkdown>{{ $page.strapiSongs.description }}</VueMarkdown>

      <!-- Opportunity for modularization of media elements -->
      <div class="audio"> <!-- style="max-width: 550px;" -->
        <h2 v-if="$page.strapiSongs.recordings.length > 0">{{ recordingsLabel }}</h2>
        <div v-for="(recording, recordingCounter ) in recordingData" :key="recordingCounter">
          <h3 v-if="$page.strapiSongs.recordings.length > 1">{{ recordingCounter = recordingCounter + 1 }}. {{ recording.title }}</h3>
          <!-- <ClientOnly> -->
            <!-- preload="auto" -->
            <audio :ref="`player-${recording.url}`" @play="stopOthers(recording.url)" controls>
              <source :src="recording.url" type="audio/mp3" />
              Your browser does not support the audio element.
            </audio>
        <!-- </ClientOnly> -->
        </div>
      </div>
      
      <div class="video"><!-- style="max-width: 550px" -->
        <h2 v-if="$page.strapiSongs.videos.length > 0">{{ videoPlural }}</h2>
        <div v-for="(video, videoCounter ) in videoData" :key="videoCounter">
          <h3 v-if="$page.strapiSongs.videos.length > 1">{{ videoCounter = videoCounter + 1 }}. {{ video.title }}</h3>
          <!-- <ClientOnly> -->
            <!-- preload="auto" -->
            <video :ref="`player-${video.url}`" @play="stopOthers(video.url)" controls>
              <source :src="video.url" type="video/mp4">
              Your browser does not support the video element.
            </video>
          <!-- </ClientOnly> -->
        </div>
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
      multitrack
    }
    videos {
      url
      title
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
      videoData: [],
      recordingsLabel: "",
      videoPlural: "Video:",
      currentTrack: null,
      isDemo: true
    }
  },
  created () {
    this.fetchData()
  },
  methods: {
    // Vue Router Data Fetching
    fetchData() {
      this.recordingData = this.$page.strapiSongs.recordings

      if (this.recordingData.length > 0) {
        this.recordingData.sort((a, b) => a.index - b.index)

        this.recordingData.map((recording) => {
          if (recording.multitrack) {
            this.isDemo = false
          }
        })

        if (this.isDemo) {
          if (this.recordingData.length > 1) {
            this.recordingsLabel = "Demos:"
          } else {
            this.recordingsLabel = "Demo:"
          }
        } else {
          if (this.recordingData.length > 1) {
            this.recordingsLabel = "Recordings:"
          } else {
            this.recordingsLabel = "Recording:"
          }
        }
      }

      this.videoData = this.$page.strapiSongs.videos
      if (this.videoData.length > 0) {
        this.videoData.sort((a, b) => a.index - b.index)
        if (this.videoData.length > 1) {
          this.videoPlural = "Videos:"
        }
      }
    },

    stopOthers(newTrack) {
      if (this.currentTrack) {
        let refName = `player-${this.currentTrack}`;
        let player = this.$refs[refName][0];
        if (newTrack == this.currentTrack) {} else {player.pause()}
      }
      this.currentTrack = newTrack;
    }
  }
}
</script>

<style scoped>
/* video {
  width: 100%;
  max-width: 500px;
  height: auto;
} */
</style>