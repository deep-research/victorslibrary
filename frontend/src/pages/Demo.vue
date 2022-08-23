<template>
  <Layout>
    <h1 class="mb-1">Demo 2022</h1>
    <h3>
      By Reenchantment <!-- style="text-decoration: none; color: black" -->
    </h3>
    
    <h2>Style</h2>
    <p>Psychedelic Rock and Doom Metal</p>

    <!-- Opportunity for modularization of media elements -->
    <div> <!-- style="max-width: 550px;" -->
      <h2>Recordings</h2>
      <div v-for="(recording, recordingCounter ) in recordingData" :key="recordingCounter">
        <h3 v-if="recordingData.length > 1">{{ recordingCounter = recordingCounter + 1 }}. <g-link :to="recording.page" class="no-underline hover:underline">{{ recording.title }}</g-link></g-link></h3>
        <!-- <ClientOnly> -->
          <!-- preload="auto" -->
          <audio :ref="`player-${recording.url}`" @play="stopOthers(recording.url)" controlsList="nodownload" controls>
            <source :src="recording.url" type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>
        <!-- </ClientOnly> -->
      </div>
    </div>
    
    <h2>Credits</h2>
    <p>Music by Victor Fisher</p>

    <h2>Contact</h2>
    <div class="mb-6">
      <g-link class="inline-block text-gray-900 bg-gray-200 no-underline rounded-sm hover:bg-gray-300 hover:no-underline px-4 py-2 text-sm font-semibold bg-transparent hover:text-gray-900 focus:text-gray-900 focus:bg-gray-200 focus:outline-none focus:shadow-outline" to="https://bandcamp.com/contact?b=1631569890">Bandcamp</g-link>
    </div>
  </Layout>
</template>

<script>
export default {
  data() {
    return {
      recordingData: 
        [
          {
            title: "They'll Come For You (Short Version)",
            url: "https://victorslibrary.s3.us-east-2.amazonaws.com/music/Theyll+Come+For+You/They'll+Come+For+You+(Short+Version).mp3",
            page: "/theyll-come-for-you"
          },
          {
            title: "Apathy = Freedom (Short Version)",
            url: "https://victorslibrary.s3.us-east-2.amazonaws.com/music/Apathy+%3D+Freedom/Apathy+%3D+Freedom+(Short+Version).mp3",
            page: "/apathy-equals-freedom"
          },
          {
            title: "The Ritual (Short Version)",
            url: "https://victorslibrary.s3.us-east-2.amazonaws.com/music/The+Ritual/The+Ritual+(Short+Version).mp3",
            page: "/the-ritual"
          }
        ]
    }
  },
  methods: {
    stopOthers(newTrack) {
      if (this.currentTrack) {
        let refName = `player-${this.currentTrack}`;
        let player = this.$refs[refName][0];
        if (newTrack == this.currentTrack) {} else {player.pause()}
      }
      this.currentTrack = newTrack;
    },
  }
}
</script>

<style scoped>
</style>