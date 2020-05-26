<template>
  <Layout :bind="createFilter">
    <h1>Music by Reenchantment</h1>
    <!-- Opportunity for modularization of select elements -->
    <div>
    <select v-model="filters.recordingtype">
      <option>All Songs</option>
      <option>Recordings</option>
      <option>Demos</option>
      <option>Drafts</option>
      <option>Videos</option>
    </select>
    </div>
    <!-- <select v-model="filters.genre" style="margin-left: 20px">
      <option>All Styles</option>
      <option>Rock</option>
      <option>Metal</option>
    </select> -->
    <div>
      <button type="button" v-on:click="reverse">Reverse</button>
    </div>
    <div>
      <input v-model="search" placeholder="Search">
    </div>
    <div>
      <button type="button" v-on:click="clearSearch">Clear Search</button>
    </div>
    <div>
      <button type="button" v-on:click="resetData">Refresh</button>
    </div>

    <h3 v-if="filterData.length > 0">Results: {{ filterData.length }}</h3>
    <h3 v-else>No results.</h3>

    <div v-for="(song, count) in filterData" :key="count">
      <h2>
        <span>{{ song.count }}. </span>
        <g-link v-bind:to="'/music/' + song.slug"> <!-- style="text-decoration: none; color: black" -->
        {{ song.title }}
        </g-link>
      </h2>
    </div>
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
      this.isReversed = !this.isReversed
    },
    clearSearch () {
      this.search = ""
    },
    resetData () {
      Object.assign(this.$data, this.$options.data.call(this))
      this.fetchData()
    }
  },
  data () {
    return {
      isReversed: false,
      songData: [],
      filterData: [],
      filters: {
        recordingtype: "All Songs"
        // , genre: "All Styles"
      },
      search: ""
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
      
      let filterCount = 1
      filterData.map((song) => {
        song.count = filterCount
        filterCount = filterCount + 1
      })

      if (this.isReversed) {
        filterData.reverse()
      }

      this.filterData = filterData
      return this.filterData

      // Add filter song count as an attribute
    }
  }
}
</script>

<style>
/* input, select, textarea, button {
  font-size: 16px;
} */
</style>