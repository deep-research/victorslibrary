<template>
  <Layout>
    <h1>Music by Reenchantment</h1>
    <p>{{ songData }}</p>
    <select v-model="recordingtypeFilter">
      <option>All Songs</option>
      <option>Recordings</option>
      <option>Demos</option>
    </select>
    <div v-for="(song, songCounter) in songData" :key="songCounter">
      <h2>{{ songCounter = songCounter + 1 }}. 
        <g-link v-bind:to="'/music/' + song.slug"
        style="text-decoration: none; color: black">
        {{ song.title }}
        </g-link>
      </h2>
    </div>
    <br />
  </Layout>
</template>

<page-query>
  query {
    songs: allStrapiSongs (sortBy: "title", order: ASC) { 
      edges{
        node {
          id
          title
          slug
          recordings {
            multitrack
          }
        }
      }
    }
  }
</page-query>

<script>
export default {
  metaInfo: {
    title: 'Music'
  },
  methods: {
    // Vue Router Data Fetching
    fetchData() {
      this.$page.songs.edges.map((edge) => {
        let song = edge.node
        song.recordingtype = "All Songs"

        if (song.recordings.length > 0) {
          song.recordingtype = "Demo"

          song.recordings.map((recording) => {
            if (recording.multitrack) {
              song.recordingtype = "Recording"
            }
          })
        }
        this.songData.push(song)
        this.songData.sort((a, b) => a.title.localeCompare(b.title))
      })
    }
  },
  data () {
    return {
      songData: [],
      recordingtypeFilter: "All Songs"
    }
  },
  created () {
    this.fetchData()
  }
}

// add attributes to the song objects to filter by
// example: song.style = rock, song.type = recording
// Have a song list that doesn't change
// Create a filtered song list every time there is a change in the dropdown
// generate the filtered song list with es6 filter...
// It filters based on attributes of objects
// For example if we need rock songs remove any songs that don't have...
// Rock as a value for the style attribute
</script>