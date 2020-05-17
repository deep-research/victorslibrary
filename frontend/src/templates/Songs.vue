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

      <div class="audio">
        <h2 v-if="$page.strapiSongs.recordings.length > 0">{{ recordingPlural }}</h2>
        <div v-for="(recording, recordingCounter ) in recordingData" :key="recordingCounter">
          <h3 v-if="$page.strapiSongs.recordings.length > 1">{{ recordingCounter = recordingCounter + 1 }}. {{ recording.title }}</h3>
          <vue-plyr>
            <audio :ref="`player-${recording.url}`" @play="stopOthers(recording.url)">
              <source :src="recording.url" type="audio/mp3"/>
              Your browser does not support the audio element.
            </audio>
          </vue-plyr>
        </div>
      </div>
      
      <div class="video">
        <h2 v-if="$page.strapiSongs.videos.length > 0">{{ videoPlural }}</h2>
        <div v-for="(video, videoCounter ) in videoData" :key="videoCounter">
          <h3 v-if="$page.strapiSongs.videos.length > 1">{{ videoCounter = videoCounter + 1 }}. {{ video.title }}</h3>
          <vue-plyr>
            <video width="535" height="300" :ref="`player-${video.url}`" @play="stopOthers(video.url)" controls>
              <source :src="video.url" type="video/mp4">
              Your browser does not support the video element.
            </video>
          </vue-plyr>
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
      recordingPlural: "Recording:",
      videoPlural: "Video:",
      currentTrack: null
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

      this.videoData = this.$page.strapiSongs.videos
      this.videoData.sort((a, b) => a.index - b.index)
      if (this.videoData.length > 1) {
        this.videoPlural = "Videos:"
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

<style>
.audio .plyr--full-ui input[type=range] {
  color: black !important
}

.video .plyr--full-ui input[type=range] {
  color: red !important
}

.plyr--audio .plyr__control.plyr__tab-focus, .plyr--audio .plyr__control:hover, .plyr--audio .plyr__control[aria-expanded=true] {
  background: black !important
}

.plyr__menu__container .plyr__control[role=menuitemradio][aria-checked=true]::before {
  background: red !important
}

.plyr__control--overlaid {
  background: red !important
}

.plyr--video .plyr__control.plyr__tab-focus, .plyr--video .plyr__control:hover, .plyr--video .plyr__control[aria-expanded=true] {
  background: red !important
}
</style>