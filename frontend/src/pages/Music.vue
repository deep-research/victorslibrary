<template>
  <Layout :bind="createFilter">
    <h1>Music by Reenchantment</h1>
    <!-- Opportunity for modularization -->
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

    <div v-if="isPaginated">
      <br /><button v-on:click="prevPage" :disabled="pageNumber==0" style="margin-top: 10px">Prev Page</button>
      <br /><button v-on:click="nextPage" :disabled="pageNumber >= pageCount -1" style="margin-top: 10px">Next Page</button>
    </div>
    <br /><button v-on:click="pagination" style="margin-top: 10px">Paginated</button>
    <br /><button v-on:click="resetData" style="margin-top: 10px">Refresh</button>

    <h3 v-if="filterData.length > 0">Results: {{ filterData.length }}</h3>
    <h3 v-else>No results.</h3>

    <div v-if="isPaginated">
      <h3 v-if="pageCount">Page: {{ pageNumber + 1 }} of {{ pageCount }}</h3>
      <div v-for="(song, count) in paginatedData" :key="count">
        <h2>
          <span>{{ song.count }}. </span>
          <g-link v-bind:to="'/music/' + song.slug" style="text-decoration: none; color: black">
          {{ song.title }}
          </g-link>
        </h2>
      </div>
    </div>

    <div v-else>
      <div v-for="(song, count) in filterData" :key="count">
        <h2>
          <span>{{ song.count }}. </span>
          <g-link v-bind:to="'/music/' + song.slug" style="text-decoration: none; color: black">
          {{ song.title }}
          </g-link>
        </h2>
      </div>
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
      this.isReversed = !this.isReversed
    },
    pagination () {
      this.isPaginated = !this.isPaginated
    },
    clearSearch () {
      this.search = ""
    },
    nextPage(){
        this.pageNumber++
    },
    prevPage(){
      this.pageNumber--
    },
    resetData () {
      Object.assign(this.$data, this.$options.data.call(this))
      this.fetchData()
    }
  },
  data () {
    return {
      isReversed: false,
      isPaginated: true,
      songData: [],
      filterData: [],
      filters: {
        recordingtype: "All Songs"
        // , genre: "All Styles"
      },
      search: "",
      pageNumber: 0
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

      this.pageNumber = 0
      this.filterData = filterData
      return this.filterData

      // Add filter song count as an attribute
    },
    pageCount () {
          let length = this.filterData.length,
              size = 5 // Songs per page
          return Math.ceil(length / size)
    },
    paginatedData () {
        const start = this.pageNumber * 5,
              end = start + 5;
        return this.filterData.slice(start, end);
    }
  }
}
</script>

<style>
input, select, textarea, button {
  font-size: 16px;
}
</style>