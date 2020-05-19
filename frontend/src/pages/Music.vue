<template>
  <Layout>
    <h1>Music by Reenchantment</h1>
    <select v-model="filters.recordingtype">
      <option>All Songs</option>
      <option>Recordings</option>
      <option>Demos</option>
      <option>Drafts</option>
      <option>Videos</option>
    </select>
    <!-- <select v-model="filters.genre" style="margin-left: 20px">
      <option>All Styles</option>
      <option>Rock</option>
      <option>Metal</option>
    </select> -->
    <br /><button v-on:click="reverse" style="margin-top: 10px">Reverse</button>
    <br /><input v-model="search" placeholder="Search" style="margin-top: 10px">
    <br /><button v-on:click="clearSearch" style="margin-top: 10px">Clear Search</button>
    <h3>Results: {{ resultsLength }}</h3>
    <div v-for="(song, songCounter) in createFilter" :key="songCounter">
      <h2>
        <span v-if="reversed">{{songCounter = createFilter.length - songCounter}}. </span> 
        <span v-else>{{ songCounter = songCounter + 1 }}. </span>
        <g-link v-bind:to="'/music/' + song.slug" target="_blank"
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
          videos {
            id
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
        // song.recordingtype = "All Songs"

        if (song.videos.length > 0) {
          song.hasVideo = true
        } else {
          song.hasVideo = false
        }

        if (song.recordings.length > 0) {
          song.recordingtype = "Demos"

          song.recordings.map((recording) => {
            if (recording.multitrack) {
              song.recordingtype = "Recordings"
            }
          })
        } else if (song.recordings.length == 0 && song.hasVideo == false) {
          song.recordingtype = "Drafts"
        }

        this.songData.push(song)
        this.songData.sort((a, b) => a.title.localeCompare(b.title))
      })
    },
    reverse () {
      this.songData.reverse()
      this.reversed = !this.reversed
    },
    clearSearch () {
      this.search = ""
    }
  },
  data () {
    return {
      reversed: false,
      songData: [],
      filters: {
        recordingtype: "All Songs"
        // , genre: "All Styles"
      },
      search: "",
      resultsLength: null
    }
  },
  created () {
    this.fetchData()
  },
  computed: {
    createFilter () {
      let filterData = this.songData
      for (let [key, value] of Object.entries(this.filters)) {
        if (value.startsWith("All")) {
          break
        } else if (value == "Videos") {
            filterData = filterData.filter(song => song.hasVideo == true)
        } else {
          filterData = filterData.filter(song => song[key] == value)
        }
      }

      filterData = filterData.filter(song => song.title.toLowerCase().includes(this.search.toLowerCase()))
      
      this.resultsLength = filterData.length
      return filterData
    }
  }
}
</script>

<style>
input[type='text'], input[type='number'], textarea {
  font-size: 16px;
}
</style>