<template>
  <Layout>
    <h1>Music by Reenchantment</h1>
    <select v-model="filters.recordingtype">
      <option>All Songs</option>
      <option>Recordings</option>
      <option>Demos</option>
    </select>
    <!-- <select v-model="filters.genre" style="margin-left: 20px">
      <option>All Styles</option>
      <option>Rock</option>
      <option>Metal</option>
    </select> -->
    <div v-for="(song, songCounter) in createFilter" :key="songCounter">
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
          song.recordingtype = "Demos"

          song.recordings.map((recording) => {
            if (recording.multitrack) {
              song.recordingtype = "Recordings"
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
      filters: {
        recordingtype: "All Songs"
        // , genre: "All Styles"
      }
    }
  },
  created () {
    this.fetchData()
  },
  computed: {
    createFilter () {
      // let filterList = []
      // for (let [key, value] of Object.entries(this.filters)) {
      //   filterList.push(`${key}: ${value}`)
      // }
      // return filterList

      let filterData = this.songData
      for (let [key, value] of Object.entries(this.filters)) {
        if (value.startsWith("All")) {
          break
        } else {
          filterData = filterData.filter(song => song[key] == value)
        }
      }
      return filterData
    }
  }
}
</script>